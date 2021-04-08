import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

const COLOUR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColour = (colour, change) => {
        switch (colour) {
            case "red":
                red + change > 255 || red + change < 0
                    ? null
                    : setRed(red + change);
                break;
            case "green":
                green + change > 255 || green + change < 0
                    ? null
                    : setGreen(green + change);
                break;
            case "blue":
                blue + change > 255 || blue + change < 0
                    ? null
                    : setBlue(blue + change);
                break;
            default:
                break;
        }
    };

    return (
        <View>
            <ColourCounter
                onIncrease={() => setColour("red", COLOUR_INCREMENT)}
                onDecrease={() => setColour("red", -1 * COLOUR_INCREMENT)}
                colour="Red"
            />
            <ColourCounter
                onIncrease={() => setColour("blue", COLOUR_INCREMENT)}
                onDecrease={() => setColour("blue", -1 * COLOUR_INCREMENT)}
                colour="Blue"
            />
            <ColourCounter
                onIncrease={() => setColour("green", COLOUR_INCREMENT)}
                onDecrease={() => setColour("green", -1 * COLOUR_INCREMENT)}
                colour="Green"
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
