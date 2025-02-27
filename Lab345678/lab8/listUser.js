import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import React, { useEffect, useState } from "react";

const ListUser = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selecttedUser, setSelecttedUser] = useState(undefined);

  const getAPI = async () => {
    const url = "http://192.168.2.19:3000/users";
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  const handleDelete = async (id) => {
    const url = "http://192.168.2.19:3000/users";
    let result = await fetch(`${url}/${id}`, { method: "Delete" });

    result = await result.json();
    if (result) {
      getAPI();
    }
  };

  const handleUpdate = (data) => {
    setOpenDialog(true);
    setSelecttedUser(data);
    console.log("Update");
  };

  React.useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      getAPI();
    });
    return focusHandler;
  }, [navigation]);

  // Hàm để lấy ảnh từ `assets` theo tên ảnh từ JSON
  const getImage = (imageName) => {
    switch (imageName) {
      case "img.png":
        return require("../assets/ima.png");
      case "img1.png":
        return require("../assets/image.png");
      case "img2.png":
        return require("../assets/image1.png");
      default:
        return require("../assets/ima.png");
    }
  };
  //
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.buttonNew}
        onPress={() => {
          navigation.navigate("AddUser");
        }}
      >
        <Text style={styles.buttonText}>Add New</Text>
      </TouchableOpacity>
      {data.length
        ? data.map((item, index) => (
            <View style={styles.container} key={index}>
              <View style={styles.containerText}>
                {/**thêm imageimage */}
                <Image source={getImage(item.image)} style={styles.userImage} />
                {/**thêm imageimage */}
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.birthday}>{item.birthday}</Text>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={styles.buttonText}
                    onPress={() => handleUpdate(item)}
                  >
                    Update
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={styles.buttonText}
                    onPress={() => handleDelete(item.id)}
                  >
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        : null}

      <Modal visible={openDialog} transparent={true}>
        <UpdateModel
          setOpenDialog={setOpenDialog}
          selecttedUser={selecttedUser}
          getAPI={getAPI}
        ></UpdateModel>
      </Modal>
    </ScrollView>
  );
};

const UpdateModel = (props) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (props.selecttedUser) {
      setName(props.selecttedUser.name);
      setBirthday(props.selecttedUser.birthday);
    }
  }, [props.selecttedUser]);

  const updateUser = async () => {
    const url = "http://192.168.2.19:3000/users";
    const id = props.selecttedUser.id;
    let result = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, birthday }),
    });

    result = await result.json();
    if (result) {
      props.getAPI();
      props.setOpenDialog(false);
    }
  };

  return (
    <View style={styles.modelContent}>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter birthday"
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
      />
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={updateUser}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => props.setOpenDialog(false)}
          >
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ListUser;
