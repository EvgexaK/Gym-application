import React, { Component }  from "react";
import { View, Text, StyleSheet } from "react-native";

class MenuItem extends Component {
    render() {
        return (
            <View style={styles.container} >
            <Text>{this.props.name}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'powderblue', 
        borderColor: 'black', 
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default MenuItem;