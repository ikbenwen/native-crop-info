import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function PlantListItem({item}) {
    return (

        <View style={styles.listItem}>
        <Text style={styles.title}>
            {item?.common_name}
        </Text>
        <Text style={styles.subtitle}>
            {item?.family_common_name}
        </Text>
            <Text style={styles.scientific}>
                {item?.scientific_name}
            </Text>
            <ImageBackground source={{ url: item?.image_url }} alt={item?.common_name} style={{ width: 100, height: 100 }} />
    </View>
    );
}


const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
    },
    title: {
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
        position: 'absolute'
    }
})
