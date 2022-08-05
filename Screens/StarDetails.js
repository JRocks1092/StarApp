import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import axios from "axios";

export default class StarDetails extends Component {
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
      .get(
        "https://1282-103-161-144-8.ngrok.io/star?name=" +
          this.props.route.params.Star_Name
      )
      .then((data) => {
        var responseData = data.data.data;
        this.setState({ data: responseData[0] });
      })
      .catch((err) => alert("ERROR"));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerSpace}>
          <Text style={styles.header}>{this.state.data.name}</Text>
        </View>
        <ScrollView>
          <Text style={styles.text}>Radius - {this.state.data.radius}</Text>
          <Text style={styles.text}>Distance - {this.state.data.distance}</Text>
          <Text style={styles.text}>Mass - {this.state.data.mass}</Text>
          <Text style={styles.text}>Gravity - {this.state.data.gravity}</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  text: {
    color: "#aaa",
    fontSize: 30,
    textAlign: "center",
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
