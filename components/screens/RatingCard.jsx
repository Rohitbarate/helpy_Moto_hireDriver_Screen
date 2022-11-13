import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const RatingCard = ({ item }) => {
  return (
    <View style={styles.mainView}>
      <View style={[styles.row,{width:'100%', marginBottom: 8,}]}>
        <Image source={item.img} style={{ height: 48, aspectRatio: 1 }} />
        <View style={styles.col}>
          <Text
            style={{
              marginBottom: 4,
              fontSize: 14,
              // fontFamily:'Jost-Medium',
              color: "#000000",
              lineHeight:20,
            }}
          >
            {item.name}
          </Text>
          <View style={styles.row}>
            <Text
              style={{
                fontSize: 13,
                // fontFamily:'Jost-Medium',
                lineHeight: 19,
                color: "#FFCE31",
                marginRight:4,
              }}
            >
              {item.rating}
            </Text>
            <Image source={require("../../assets/img/Star.png")} />
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 12,
          // fontFamily:'Jost-Regular',
          lineHeight: 13,
          color: "#4F4F4F",
        }}
      >
        {item.feedback}
      </Text>
    </View>
  );
};

export default RatingCard;

const styles = StyleSheet.create({
  mainView: {
    width: 270,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C5C5C5",
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 12,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  col: {
    marginLeft: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
