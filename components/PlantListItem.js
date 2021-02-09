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
        margin: 0,
        backgroundColor: '#315C2B',
        width: '100%',
        padding: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        margin: 0,
        fontSize: 22,
        fontWeight:'bold',
        color: 'white' ,
        // backgroundColor: '#B7245C',
    },
    subtitle: {
        fontSize: 18,
        color: '#EDCBB1',
    },
    scientific: {
        fontSize: 15,
        color: 'lightgrey'
    },
    image: {
        width: 200,
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    }
})
