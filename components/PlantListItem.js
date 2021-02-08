import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from "react-native";

export default function PlantListItem({item, onPress}) {
    return (

        <Pressable style={styles.listItem} onPress={onPress}>

        <Text style={styles.title}>
            {item?.common_name}
        </Text>
        <Text style={styles.subtitle}>
            {item?.family_common_name}
        </Text>
            <Text style={styles.scientific}>
                {item?.scientific_name}
            </Text>
            <ImageBackground source={{ url: item?.image_url }} alt={item?.common_name} style={styles.image} />

    </Pressable>
    );
}


const styles = StyleSheet.create({
    listItem: {
        margin: 10,
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    title: {
        margin: 10,
        fontSize: 22,
    },
    subtitle: {
        fontSize: 18,
        color: 'green',
    },
    scientific: {
        fontSize: 15,
        color: 'lightgrey'
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'flex-start',
        justifyContent: 'center'
    }
})
