import { StyleSheet } from "react-native";

export const authModal = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "red",
        padding: 15,
        alignItems: "center"
    },
    closeWrapper: {
        flexDirection: "row-reverse"  
    },
    closeButton: {
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.04)"
    },
    phoneInput: {
        marginTop: 80,
        height: 60,
        width: 300,
        backgroundColor: "rgba(0,0,0,0.04)",
        alignSelf: "center"
    },
    or: {
        marginTop:12,
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
        alignSelf: "center"
    },
    buttons: {
        alignItems: "center"
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        borderColor: "rgba(0,0,0,0.05)",
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 35,
        marginTop: 15
    },
    buttonImage: {
        width: 40,
        height: 40
    },
    buttonText: {
        fontSize: 16
    }
});