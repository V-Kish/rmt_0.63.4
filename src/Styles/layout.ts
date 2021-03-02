import { StyleSheet } from "react-native";


const Layout = StyleSheet.create({
    container: {
        flex: 1
    },
    left: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-start'
    },
    right: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-end'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center'
    },
    grid: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    col: {
        flex: 1,
        flexDirection: 'column'
    },
    /**
     * ����������� �� �������� 
     */
    jc_c: {
        justifyContent: 'center'
    },
    /**
     * ����������� �� ����������
     */
    ai_c: {
        alignItems: 'center'
    }
});

export { Layout }