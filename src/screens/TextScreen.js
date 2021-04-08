import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                value={password}
                onChangeText={(newValue) => {
                    setPassword(newValue);
                }}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {password.length < 5 ? (
                <Text>Password must be at least 5 characters</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
    },
});

export default TextScreen;
