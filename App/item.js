import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';

export default class Item extends Component{
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render(item) {
            <View style={{ flex: 1, height: 100 }}>
                <Text> { item.item.id } </Text>
                <Text> { item.item.id } </Text>
            </View>
    }
}