import React, { Component } from "react";
import { View, ScrollView, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get("https://1282-103-161-144-8.ngrok.io/")
      .then((data) => {
        var responseData = data.data.data;
        this.setState({ data: responseData });
      })
      .catch((err) => alert("ERROR"));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerSpace}>
          <Text style={styles.header}>Star APP</Text>
        </View>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() =>
                  this.props.navigation.navigate("StarDetails", {
                    Star_Name: item.name,
                  })
                }
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 30,
                    marginVertical: 20,
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },

  itemContainer: {
    marginVertical: 5,
    backgroundColor: "#aaa",
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  header: {
    color: "#666",
    alignSelf: "center",
    marginVertical: 40,
    justifyContent: "center",
    fontSize: 70,
  },
  headerSpace: {
    marginVertical: 20,
    backgroundColor: "#DDDDDD",
  },
});
