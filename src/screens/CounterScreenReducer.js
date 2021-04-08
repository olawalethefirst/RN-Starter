import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case "increase":
            return { ...state, counter: state.counter + action.payload };
        case "decrease":
            return {
                ...state,
                counter:
                    state.counter - action.payload < 0
                        ? 0
                        : state.counter - action.payload,
            };
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button
                title="Increase"
                onPress={() =>
                    dispatch({ type: "increase", payload: COUNTER_INCREMENT })
                }
            />
            <Button
                title="Decrease"
                onPress={() =>
                    dispatch({ type: "decrease", payload: COUNTER_INCREMENT })
                }
            />
            <Text>Current count: {{ counter }}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Counter;
