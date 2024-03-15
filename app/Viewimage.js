import React from 'react'
import { Image ,StyleSheet,View} from 'react-native'

import colour from './colour'

function Viewimage() {
  return (
    <View style={styles.container}> 
<View style={styles.top1} />
<Image resizeMode='contain' style={styles.img} source={require("../app/assets/view.jpeg")}></Image>
    </View>
  )
}

export default Viewimage

const styles = StyleSheet.create({
    container:{
        backgroundColor:colour.primary,
        flex:1,
    },
    img:{
        alignSelf:"center",
        flex:1,
    },
    top1:{
        backgroundColor:"red"
    }
})