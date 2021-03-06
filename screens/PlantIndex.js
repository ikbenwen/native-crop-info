import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import PlantListItem from "../components/PlantListItem";

const token = 'BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc';


// const fetch = require('node-fetch');
//
// (async () => {
//     const response = await fetch('https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc&limit=5');
//     const json = await response.json();
//     console.log(json);
// })();
//


export default function PlantIndex ({ navigation }) {

    const [plants, setPlants] = useState([])

    useEffect(() => {
        async function getPlants(){
            try {
               const {data: {data}} = await axios.get(`https://trefle.io/api/v1/species?filter_not%5Bedible_part%5D=null&token=${token}&page=2`);
                // const {data: {data}} = await axios.get(`https://trefle.io/api/v1/species?token=${token}&filter[common_name]=garden%20tomato`);



               setPlants(data);
                // console.log(data[0].grow)
            } catch (e) {
                console.log(e)
            }
        }
        getPlants()
    }, [''])

function goToPlant (id) {
navigation.navigate("PlantDetails",{ id: id })
};

    return(

        <View>

            <FlatList
                data={plants}
                renderItem={({item}) => {
                    return <PlantListItem item={item} onPress={() => goToPlant(item.slug)}/>;
                }}
                keyExtractor={(item) => item.slug}
                ItemSeparatorComponent={() => {
                    return <View style={styles.itemSeparator} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemSeparator: {
        borderBottomColor: 'green',
        borderWidth: 1,

    }
})
