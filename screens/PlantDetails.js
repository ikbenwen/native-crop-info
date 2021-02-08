import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlantDetails (props) {
    return (
    <View>
        <Text>Plant Details {props.route.params.id}</Text>
    </View>
    );
}

const styles = StyleSheet.create ({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
