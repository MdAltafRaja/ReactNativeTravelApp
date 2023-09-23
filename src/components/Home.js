import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";

import Colors from "../../assets/Colors";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import activitiesData from "../../assets/data/activitiesData";
import discoverCategoriesData from "../../assets/data/discoverCategoriesData";
import discoverData from "../../assets/data/discoveryData";
import learnMoreData from "../../assets/data/learnMoreData";
import person from "../../assets/images/person.jpg";
import { useFonts } from "expo-font";

const Home = ({ navigation }) => {
  const [loaded] = useFonts({
    "Lato-Bold": require("../../assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const renderDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            { marginLeft: item.id === "discover-1" ? 20 : 0 },
          ]}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={Colors.White} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivityItem = ({ item }) => {
    console.log(item);
    return (
      <View style={[styles.activityItemWrapper,{
        marginLeft:item.id==="activities-1"?20:0
      }]}>
        <Image
          source={item.icon}
          style={styles.activityItemImage}
          width={38}
          height={54}
        />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItem=({item})=>{
    return(
        <ImageBackground source={item.image} style={[styles.learnMoreItem,{
            marginLeft:item.id==="learnMore-1"?20:0
        }]}
        imageStyle={styles.learnMoreItemImage}
        >
            <Text style={styles.learnMoreText}>{item.title}</Text>
        </ImageBackground>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={Colors.Black}
              style={styles.menuIcon}
            />
            <Image  source={person} style={styles.profileImage} resizeMode="stretch" />
          </View>
        </SafeAreaView>
        {/* Discover */}
        <View style={styles.discoverWrraper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.discoverCategoryText,
                  styles.isActiveDiscoverText,
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.discoverCategoryText}>Destination</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.discoverCategoryText}>Cities</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.discoverCategoryText}>Experiences</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
            <Text style={styles.learnMoreTitle}>Learn More</Text>
            <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.White,
    marginTop: 50,
  },
  menuWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverWrraper: {
    marginTop: 20,
    // marginHorizontal:20
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  discoverCategoryText: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: Colors.Gray,
  },
  isActiveDiscoverText: {
    color: Colors.Orange,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: Colors.White,
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: Colors.White,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: Colors.Black,
  },
  activitiesItemsWrapper: {
    paddingVertical:20
  },
  activityItemWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
  },
  activityItemImage:{
    width:36
  },
  activityItemText:{
     marginTop:5,
     fontFamily:"Lato-Bold",
     fontSize:14,
     color:Colors.Gray
  },
  learnMoreWrapper:{
    paddingVertical:10
  },
  learnMoreTitle:{
    marginHorizontal:20,
    fontSize:24,
    fontFamily:"Lato-Bold",
    color:Colors.Black
  },
  learnMoreItemsWrapper:{
   paddingVertical:20
  },
  learnMoreItem:{
    width:170,
    height:180,
    justifyContent:"flex-end",
    marginRight:20,
    
  },
  learnMoreItemImage:{
    borderRadius:20
  },
  learnMoreText:{
    fontSize:18,
    fontFamily:"Lato-Bold",
    color:Colors.White,
    marginHorizontal:10,
    marginVertical:20 
  }
});
