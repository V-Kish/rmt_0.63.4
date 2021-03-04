import { StyleSheet } from "react-native";
import { CONSTANTS } from "./Variables";



export const mainNav = StyleSheet.create(
    {
        container: {
            backgroundColor: "#00AEEF",
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
            alignItems: "center"
        },
        logo: {
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            height: CONSTANTS.logo.height,
            width: CONSTANTS.logo.width
        },
        buttonWrapper: {
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center"
        },
        menuButton: {
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            height: 20,
            width: 20
        },
        logoImage: {
            width: "100%",
            justifyContent: "center"
        },
        authButton: {
            justifyContent: "center",
            height: "100%",
            width: 40,
            alignItems: "flex-end"
        },
        loginImage: {
            width: 30,
            height: 30
        },
    }
);



