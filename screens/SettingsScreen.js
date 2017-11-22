import React from 'react';
import { View, Image, Text} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Layout from '../constants/Layout';
import { FontAwesome } from '@expo/vector-icons';

export default class SettingsScreen extends React.Component {
static route = {
navigationBar: {
title: 'Links',
},
};

render() {

return(
<View>
<Image
source={require('../assets/images/BCmap.jpg')}
style={{width: Layout.window.width, alignSelf: 'center'}}
/>
<FontAwesome
name={"map-marker"}
size={70}
style={{
position: "absolute",
backgroundColor: 'transparent',
top: 110,
left: 30
}}
color={'#FFB6C1'}
/>
<FontAwesome
name={"map-marker"}
size={70}
style={{
position: "absolute",
backgroundColor: 'transparent',
top: 200,
left: 30
}}
color={'#FF4500'}
/>
<FontAwesome
name={"map-marker"}
size={70}
style={{
position: "absolute",
backgroundColor: 'transparent',
left: 140,
top: 30
}}
color={'#FFB6C1'}
/>
<FontAwesome
name={"map-marker"}
size={70}
style={{
backgroundColor: 'transparent',
position: "absolute",
left: 200,
top: 30
}}
color={'#ADFF2F'}
/>
<View style={{marginLeft: 100}}>

<View style={{flexDirection: "row"}}>
<FontAwesome
name={"map-marker"}
size={30}
color={'#ADFF2F'}
/>
<Text style={{fontSize: 20}}> - Cardio</Text>
</View>

<View style={{flexDirection: "row"}}>
<FontAwesome
name={"map-marker"}
size={30}
color={'#FFB6C1'}
/>
<Text style={{fontSize: 20}}> - Muscle Training</Text>
</View>

<View style={{flexDirection: "row"}}>
<FontAwesome
name={"map-marker"}
size={30}
color={'#FF4500'}
/>
<Text style={{fontSize: 20}}> - Other</Text>
</View>

</View>
</View>
);
}
}