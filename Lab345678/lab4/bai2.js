import React, { useState } from "react";
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  SafeAreaView,
} from "react-native";

const [state, setState] = useState(false);

const Bai2 = () => {
  return (
    <ScrollView
      // contentContainerStyle={styles.scrollView} thuộc tinh sudung style scroll, flat..
      refreshControl={<RefreshControl />}
    >
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text style={{ marginLeft: "auto", marginRight: "auto" }}>
          Kéo xuống để xem refreshControl
        </Text>
      </View>
    </ScrollView>
  );
};

export default Bai2;
