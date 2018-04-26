import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';

import  { Animated,
    StyleSheet,
    Text,
Image,
Easing} from 'react-native'
const timing = 4000

export default class FABExample extends Component {
    constructor () {
        super()
        this.spinValue = new Animated.Value(0)
      }
      componentDidMount () {
        this.spin()
      }
      spin () {
        this.spinValue.setValue(0)
        Animated.timing(
          this.spinValue,
          {
            toValue: 1,
            duration: timing,
            easing: Easing.linear
          }
        ).start(() => this.spin())
      }

      render () {
        /* This also works, to show functions instead of strings */
        // const getStartValue = () => '0deg'
        // const getEndValue = () => '360deg'
        // const spin = this.spinValue.interpolate({
        //   inputRange: [0, 1],
        //   outputRange: [getStartValue(), getEndValue()]
        // })
        const spin = this.spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
        return (
          <View style={styles.container}>
           <Text> In Session Start </Text>
            <Animated.Image
              style={{ width: 227, height: 200, transform: [{rotate: spin}] }}
              source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
          </View>
        )
    }
    

//   render() {
//     return (  
//       <Container>
//         <Header />
//         <View style={{ flex: 1 }}>
//             <Icon name="share" />
//             <Button style={{ backgroundColor: '#34A34F' }}>
//               <Icon name="logo-whatsapp" />
//             </Button>
//             <Button block onPress={() => this.props.navigation.navigate('Session')}>
//             <Icon name="logo-facebook" />
//             </Button>
//             <Button style={{ backgroundColor: '#3B5998' }}>
//               <Icon name="logo-facebook" />
//             </Button>
//             <Button disabled style={{ backgroundColor: '#DD5144' }}>
//               <Icon name="mail" />
//             </Button>
//         </View>
//       </Container>
//     );
//   }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })