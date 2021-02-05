import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';


// const fetch = require('node-fetch');


// (async () => {
//     const response = await fetch('https://trefle.io/api/v1/plants?token=BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc');
//     const json = await response.json();
//     console.log(json);
// })();

export default function PlantIndex () {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        async function getPlants(){
            try {
                const result = await axios.get('https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc&limit=5')

               setPlants(result);
                console.log(result)
            } catch (e) {
                console.log(e)
            }
        }
        getPlants()
    }, [])

    return(
        <view>
            <text>Plant Index</text>
        </view>
    )
}
