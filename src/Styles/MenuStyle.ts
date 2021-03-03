import { StyleSheet } from "react-native";


export const menu = StyleSheet.create(
    {
        container: {
            backgroundColor: "white",
            height: "100%",
            padding: 0,
            paddingVertical: 50,
            paddingHorizontal: 20,
        },
        item: {
            marginTop: 15,
            flexDirection: "row",
            alignItems: "center",
        },
        itemText: {
            marginLeft: 10,
            fontSize: 18,
        },
        itemImage: {
            height: 20,
            width: 20
        }
    }
);