import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super()
        this.state = {
            isLoading: false
//            MarsImages: []
        }
    }
    componentDidMount() {
        return fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + '999' + 'MAST' + '&api_key=' + 'a1vxn94JAg11UtnooLxGQKwbSYpk85ml24xtqYAB')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.MarsImages({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    MarsImages: ds.cloneWithRows(responseJson.photos),
                }, function () {
//                    return (ListView.MarsImages)
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, marginTop: 20 }}>
                <ListView
                dataSource={this.state.MarsImage}
                renderRow={(rowData) => <Text>{rowData.photos.objects}</Text>}
                />
            </View>
        );
    }
}


/*+

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />



                <FlatList
                    keyExtractor={item => item.guid}
                    data={this.state.MarsImages}
                    renderItem={({ photos }) => <MarsImage data={photos} />}
                />