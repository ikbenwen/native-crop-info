import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import axios from "axios";
import {Link} from "@react-navigation/native";

const token = 'BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc';


export default function PlantDetails (props) {
    const [plant, setPlant] = useState({})

    useEffect(() => {
        async function getPlant(){
            try {
                const {
                data,
                } = await axios.get(`https://trefle.io/api/v1/species/search?token=${token}&q=${props.route.params.id}&limit=1`);

                console.log(data)
                // console.log(data)
                setPlant(data.data[0])
            } catch (e) {
                console.log(e)
            }
        }
        getPlant();
    },[]);



    return (
    <View style={styles.appContainer}>
        <Text>The {plant.slug} also known as {plant.common_name} is a species of the {plant.family_common_name} </Text>
        {/*<Text style={styles.subtitle}>Synonyms for this plant are: {plant?.synonyms[0]} and {plant?.synonyms[1]}</Text>*/}


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
    image: {
        width: 200,
        height: 200,
        flex: 1,
    }
});
