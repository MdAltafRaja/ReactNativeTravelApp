import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../assets/Colors";
import Entypo from "react-native-vector-icons/Entypo";
const height = Dimensions.get("window").height;
const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-left" size={32} color={Colors.White} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={Colors.White} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={Colors.Orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}>
                Description
            </Text>
            <Text numberOfLines={4} style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
                <View style={styles.infoTextWrapper}>
                    <Text style={styles.infoText}>&#x20b9; {item.price}</Text>
                    <Text style={styles.infoSubText}>{" /Person"}</Text>
                </View>
            </View>
            <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
                <View style={styles.infoTextWrapper}>
                    <Text style={styles.infoText}>{item.rating}</Text>
                    <Text style={styles.infoSubText}>{" /5"}</Text>
                </View>
            </View>
            <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DURATION</Text>
                <View style={styles.infoTextWrapper}>
                    <Text style={styles.infoText}>{item.duration}</Text>
                    <Text style={styles.infoSubText}>{" hours"}</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: "space-between",
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: Colors.White,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 32,
    color: Colors.White,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: Colors.White,
  },
  heartWrapper: {
    position: "absolute",
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: Colors.White,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  descriptionTextWrapper:{
        marginTop:30,
        marginHorizontal:20,

  },
  descriptionTitle:{
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: Colors.Black,
  },
  descriptionText:{
    marginTop:20,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: "gray",
    height:85  //agar bahut sara text hai toh niche content chipe na
  },
  infoWrapper:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:20,
    marginTop:20
  },
  infoTitle:{
    fontFamily:"Lato-Bold",
    fontSize:12,
    color:Colors.Gray
  },infoTextWrapper:{
    flexDirection:"row",
    alignItems:"flex-end",
    marginTop:5
  },
  infoItem:{
    paddingVertical:5
  },
  infoText:{
    fontFamily:"Lato-Bold",
    fontSize:24,
    color:Colors.Orange
  },
  infoSubText:{
    fontFamily:"Lato-Bold",
    fontSize:14,
    color:Colors.Gray
  },
  buttonWrapper:{
    marginHorizontal:20,
    marginTop:40,
    backgroundColor:Colors.Orange,
    alignItems:"center",
    paddingVertical:15,
    borderRadius:10
  },
  buttonText:{
    fontFamily:"Lato-Bold",
    fontSize:18,
    color:Colors.White
  }

});
