import { StyleSheet } from "react-native";
import { CONSTANTS } from "./Variables";



export const mainNav = StyleSheet.create(
    {
        container: {
            backgroundColor: CONSTANTS.colors.white,
            height: CONSTANTS.header.height,
            width: CONSTANTS.header.width,
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: CONSTANTS.paddings.sides,
            shadowColor: CONSTANTS.shadow.shadowColor,
            shadowOffset: CONSTANTS.shadow.shadowOffset,
            shadowOpacity: CONSTANTS.shadow.shadowOpacity,
            shadowRadius: CONSTANTS.shadow.shadowRadius,  
            elevation: CONSTANTS.shadow.elevation,
        },
        logo: {
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            height: CONSTANTS.logo.height,
            width: CONSTANTS.logo.width,
        },
        logoImage: {
            width: "100%"
        },
        authButton: {
            justifyContent: "center",
            height: "100%",
            width: 70,
            justifyContent: "center",
            alignItems: "flex-end"
        },
        loginImage: {
            width: 30,
            height: 30
        },
    }
);



