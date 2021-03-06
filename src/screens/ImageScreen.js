import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/forest.jpg")}
                imageScore="8"
            />
            <ImageDetail
                title="Beach"
                imageSource={require("../../assets/beach.jpg")}
                imageScore="10"
            />
            <ImageDetail
                title="Mountain"
                imageSource={require("../../assets/mountain.jpg")}
                imageScore="6"
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
