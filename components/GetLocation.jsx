import { Button, View, Text, StyleSheet } from "react-native";

/* User Permissions for Location
    https://www.npmjs.com/package/react-native-location
*/
import RNLocation from 'react-native-location';
// RNLocation.configure({
//     distanceFilter: null
// });


const GetLocation = () => {
    
    const handleGetLocation = () => {
        // const handleGetLocation = async () => {
        console.log('starting...');
        // const permission = await RNLocation.checkPermission({
        //     ios: 'whenInUse',
        //     android: {
        //       detail: 'fine'
        //     }
        // });
        // console.log('end', permission);
    }

    return (
        <View style={styles.getLocation}>
            <Button 
                style={styles.button}
                title="Get Location"
                onPress={handleGetLocation}
            />
            <Text>Latitude: </Text>
            <Text>Longitude: </Text>
        </View>
    )
}

export default GetLocation;

const styles = StyleSheet.create({
    getLocation: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    button: {
        margin: 10
    }
});

