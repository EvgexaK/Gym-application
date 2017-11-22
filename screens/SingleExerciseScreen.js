import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.handlePress()}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={this.props.imageSource}/>
                </View>
                <View>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>     
                   
                    </View>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        height: 420,
        flexDirection: "row",
        backgroundColor: '#333333', 
        borderColor: '#808080', 
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 16,
        marginRight: 16,
        marginBottom: 5,
        marginLeft: 30,
    },
    imageContainer: {
        padding: 8,
        flex: 1,
    },
    image: {
        width: 234,
        height: 234,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
    },
    description: {
        fontSize: 16,
        width: 100,
    }

})

export default MenuItem;