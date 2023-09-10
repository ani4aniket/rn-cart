import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerFont}>Myntra</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headerFont: {
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: 20,
        color: 'black',
        padding: 10,

    },
});
export default Header;
