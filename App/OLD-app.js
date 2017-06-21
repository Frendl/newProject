import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';

export default class App extends Component {
   constructor(props){
        super()
        this.state = {
            MarsImages: []
        }
    }
    componentDidMount() {
        let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + '999' + 'MAST' + '&api_key=' + 'a1vxn94JAg11UtnooLxGQKwbSYpk85ml24xtqYAB'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson) {
                    console.log(responseJson)
                    this.setState({MarsImages: responseJson.items})
                    // store.raw = responseJson.raw
                }
            })
            .catch((error) => {
                console.error(error)
            });
// this is a prommis, learn it. fetch is also explained in the react native doc.
    }

    render() {
        return (
            <View style={{flex:1, marginTop:20}}>
                <FlatList
                    keyExtractor={item => item.guid}
                    data={this.state.MarsImages}
                    renderItem={({item}) => <MarsImage data={item} />}
                />
            </View>
        );
    }
}
