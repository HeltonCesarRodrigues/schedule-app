import { StyleSheet, Text, View } from 'react-native';

export const WebApp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.main}></View>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
    },
    main: {
        flex: 1,
        width: 500,
        margin: 'auto',
        backgroundColor: '#fff',
    }
});