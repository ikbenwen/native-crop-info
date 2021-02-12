
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
                } = await axios.get(`https://trefle.io/api/v1/species/${props.route.params.id}?token=${token}`)

                setPlant(data.data)
                console.log(data.data)
            } catch (e) {
                console.log(e)
            }
        }
        getPlant();
    },['']);

    // function GetRequiredLight ({light}) {
    //     let sun = plant.;
    //     if (sun  >= 7) {
    //         return <Text>Deze plant houdt van veel zon</Text>
    //     } else if (sun >=4 || sun <= 6){
    //         return <Text>Deze plant houdt van half zon half schaduw</Text>
    //     } else {
    //         return <Text>Zet deze plant op een donkere plaats</Text>
    //     }
    // }



    return (
    <View style={styles.appContainer}>
        <Text>The</Text>
        <Text style={styles.slug}>  {plant.slug}</Text>
        <Text> also known as </Text>
        <Text style={styles.common}> {plant.common_name} </Text>
        <Text> is a species of the</Text>
        <Text style={styles.family} >{plant.family_common_name} </Text>
        <ImageBackground source={{ url: plant?.image_url }} alt={plant.common_name} style={styles.image} />
        {/*<Text>{plant.growth.light}</Text>*/}

    </View>
    );
}

const styles = StyleSheet.create ({
    appContainer: {
        fontFamily: 'Roboto-Regular',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        flex: 1,
    },
    family: {
        fontWeight: 'bold',
        color: '#6f6f6f',
    },
    slug: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 30,
    },
    common: {
        fontWeight: 'bold'
    }

});
