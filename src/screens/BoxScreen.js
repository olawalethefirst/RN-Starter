import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.childOneStyle} />
            <View style={styles.childTwoStyle} />
            <View style={styles.childThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: "blue",
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    childOneStyle: {
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: "red",
        backgroundColor: "red",
    },

    childTwoStyle: {
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: "green",
        top: 50,
        backgroundColor: "green",
    },

    childThreeStyle: {
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: "purple",
        backgroundColor: "purple",
    },
});

export default BoxScreen;
