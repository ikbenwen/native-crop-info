import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import axios from "axios";

const token = 'BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc';


export default function PlantDetails (props) {
    const [plant, setPlant] = useState([{}])

    useEffect(() => {
        async function getPlant(){
            try {
                const {
                    data,
                } = await axios.get(`https://trefle.io/api/v1/plants/search?token=${token}&q=${props.route.params.id}&limit=1`);

                console.log(data)
                setPlant(data)
            } catch (e) {
                console.log(e)
            }
        }
        getPlant();
    },['']);


    return (
    <View style={styles.appContainer}>
       <Text>{props.route.params.id}</Text>
        <Text>{plant.family}</Text>
        <ImageBackground source={{ url: plant?.image_url }} alt={plant.common_name} style={styles.image} />
    </View>
    );
}

const styles = StyleSheet.create ({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        margin: 0,
        backgroundColor: 'white',
        width: '100%',
        padding: 0,
    },
    title: {
        margin: 0,
        fontSize: 22,
    },
    subtitle: {
        fontSize: 18,
        color: 'green',
    },
    scientific: {
        fontSize: 15,
        color: 'lightgrey',
    },
    image: {
        width: 200,
        height: 200,
        flex: 1,
    }
});
