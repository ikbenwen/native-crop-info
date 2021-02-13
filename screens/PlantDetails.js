import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import axios from "axios";


const token = 'BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc';


export default function PlantDetails (props) {
    const [plant, setPlant] = useState({})

    useEffect(() => {
        async function getPlant() {
            try {
                const {
                    data,
                } = await axios.get(`https://trefle.io/api/v1/species/${props.route.params.id}?token=${token}`)

                setPlant(data.data)
                // console.log(data.data)
            } catch (e) {
                console.log(e)
            }
        }

        getPlant();
    }, ['']);


    // let sun = plant?.growth.light;
    //
    // async function GetRequiredLight(sun) {
    //
    //     if (sun >= 7) {
    //         return <Text>Deze plant houdt van veel zon</Text>
    //     } else if (sun >= 4 || sun <= 6) {
    //         return <Text>Deze plant houdt van half zon half schaduw</Text>
    //     } else if (sun != null && sun < 4) {
    //         return <Text>Zet deze plant op een donkere plaats</Text>
    //     } else {
    //         return <Text>Geen gegevens over licht gevonden</Text>
    //     }
    // }



    return (
        <View style={styles.generalInfoContainer}>

            <Text >The</Text>
            <Text style={styles.slug}>{plant.slug}</Text>
            <Text> also known as </Text>
            <Text > {plant.common_name} </Text>
            <Text> is a species of the</Text>
            <Text style={styles.family}>{plant.family_common_name} </Text>
            {/*<Text>{GetRequiredLight(sun)}</Text>*/}

            <ImageBackground source={{url: plant?.image_url}} alt={plant.common_name} style={styles.image}/>

        </View>
    );
}

const styles = StyleSheet.create ({
    generalInfoContainer: {
        fontFamily: 'Roboto',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#315C2B',
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
        margin: 0 ,
    },
    common: {
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5
    }
});
