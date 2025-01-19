import { StyleSheet, Text, View, TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
const Lab3 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passWord, setPassWord] = useState("");
  return (
    <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhap ten"
        style={styles.tipStyle}
      ></TextInput>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Nhap so dien thoai "
        keyboardType="phone-pad"
        style={styles.tipStyle}
      ></TextInput>
      <TextInput
        value={passWord}
        onChangeText={setPassWord}
        placeholder="Nhap pass"
        secureTextEntry={true}
        style={styles.tipStyle}
      ></TextInput>
      <View style={styles.container}>
        <Text style={styles.baseText}>
          Em vào đời bằng{" "}
          <Text style={[styles.boldText, { color: "red" }]}>Vang đỏ</Text> và
          Anh vào đời bằng{" "}
          <Text style={[styles.boldText, { color: "green" }]}>Nước trà</Text>
        </Text>
        <Text style={styles.baseText}>
          Bằng cơn mưa thơm{" "}
          <Text style={[styles.boldText, { fontSize: 20 }, styles.italicText]}>
            Mùi đất
          </Text>
          {" --- "}
          bằng hoa dại mọc trước nhà
        </Text>
        <Text style={(styles.boldText, styles.italicText, { color: "gray" })}>
          Em vào đời bằng kế hoạch anh vào đời bẳng mộng mơ
        </Text>
        {/**------- */}
        <Text style={styles.baseText}>
          Lý trí em là {" --"}
          <Text
            style={{
              textDecorationLine: "underline",
              letterSpacing: 20,
              fontWeight: "bold",
            }}
          >
            {" "}
            Công cụ
          </Text>
        </Text>
        {/**----- */}
        <Text style={[styles.baseText, { textAlign: "right" }]}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều ân tình
        </Text>
        {/**- */}
        <Text
          style={{
            color: "orange",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Anh chỉ muốn đạp đất chứ không muốn đạp ai dưới chân mình
        </Text>

        <Text style={styles.baseText}>
          <Text
            style={{
              color: "yellow",
            }}
          >
            Em vào đời bằng
          </Text>{" "}
          đại lộ {"\n"}{" "}
          <Text style={{ color: "yellow" }}>Và con đường đó giờ</Text> Vắng anh
        </Text>
      </View>
    </View>
  );
};
export default Lab3;
