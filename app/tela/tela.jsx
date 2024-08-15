import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

const logoSpotify ='https://static.vecteezy.com/system/resources/previews/018/930/750/original/spotify-app-logo-spotify-icon-transparent-free-png.png';

return (
<View style={styles.container}>
<LinearGradient
       start={{ x: 1, y: 10}}
       end={{ x: 1, y: 14}}
       colors={['hsl(141.97deg 75.93% 47.25%)', 'rgb(135 209 162)', 'hsl(0deg 0% 0%)']}
       style={styles.background}
     />
<Image
style={styles.logo}
source={{
uri: logoSpotify,
}}
/>
</View>
);
}
const styles = StyleSheet.create({
 container:{
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
 },
 background:{
   position: 'absolute',
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
 },
 logo:{
   width: 300,
   height: 300,
 },
});