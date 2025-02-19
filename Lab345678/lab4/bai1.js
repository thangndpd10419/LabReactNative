import React from "react";
import { ScrollView, View, Text, Image, FlatList } from "react-native";
import style1 from "./style1";
import { Colors } from "react-native/Libraries/NewAppScreen";

const bai1 = () => {
  const data = [
    { id: 1, name: "name1", sou: require("../assets/ima.png") },
    { id: 2, name: "name2", sou: require("../assets/icon.png") },
    { id: 3, name: "name3", sou: require("../assets/ima.png") },
    { id: 4, name: "name4", sou: require("../assets/image.png") },
    { id: 5, name: "name5", sou: require("../assets/ima.png") },
  ];
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <Text style={style1.t1}>Scroll view - FlatList</Text>
      {/* <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      > */}

      <FlatList
        numColumns={2}
        data={data}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[style1.par]}>
            <Image source={item.sou} style={style1.ima} />
            <Text>{item.name}</Text>
            <Text style={{ color: "green", fontWeight: "bold" }}>Call</Text>
          </View>
        )}
        contentContainerStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 5,
        }}
      />
    </View>
  );
};
export default bai1;
