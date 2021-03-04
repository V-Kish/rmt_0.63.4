import { StyleSheet } from "react-native";
import { CONSTANTS } from "./Variables";


export const footerNav = StyleSheet.create(
    {
        container: {
            height: "10%",
            backgroundColor: "#00AEEF",
            flexDirection: "row",
            alignItems: "center",
        },
        item: {
            width: "19%",
            height: "100%",
            alignItems: "center",
            justifyContent:"center",
            flexDirection: "column",
            position: "relative"
        },
        jetItem: {
            width: "24%",
            height: "100%",
            alignItems: "center",
            justifyContent:"center",
            flexDirection: "column",
            position: "relative"
        },
        jetButton:{
            borderRadius: 50,
            top:-33,
            backgroundColor: "#00AEEF",
            padding: 40,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 1,
            shadowColor: "rgb(0,0,0)",
            shadowOffset: {
                height: 10,
                width: 0
            },
            shadowOpacity: 1,
            shadowRadius: 1,  
            elevation: 7
        },
        jetCover: {
            position:"absolute",
            top:0,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "white",
            zIndex: 0,
            height: "70%",
            width: "100%",

        },
        jetImage: {
            position: "absolute",
            width: 40,
            height: 40,
            maxWidth: 70,
            transform: [{ rotate: "-45deg" }],
        },
        itemImage:{
            width: 35,
            height: 35,
        },
        itemText: {
            fontSize: 10,
            color: "white"
        }
    }
);