import {Footer, FooterTab, Button, Icon, Badge,Text } from 'native-base';


import React from 'react';

class FooterView extends React.Component {
  render() {
    return (
        <Footer>
        <FooterTab>
        <Button active badge vertical block onPress={() => this.props.navigation.navigate('Dicovery')}>
            <Badge ><Text>51</Text></Badge>
            <Icon active name="navigate" />
            <Text>Discover</Text>
          </Button>
          <Button badge vertical block onPress={() => this.props.navigation.navigate('Session')}>
            <Badge><Text>2</Text></Badge>
            <Icon name="apps" />
            <Text>History</Text>
          </Button>
          <Button vertical>
            <Icon name="person" block onPress={() => this.props.navigation.navigate('Profile')}/>
            <Text>Account</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterView;


// function FooterView (){

//     return(
//       <Footer>
//       <FooterTab>
//         <Button badge vertical>
//           <Badge><Text>2</Text></Badge>
//           <Icon name="apps" />
//           <Text>Apps</Text>
//         </Button>
//         <Button vertical>
//           <Icon name="camera" />
//           <Text>Camera</Text>
//         </Button>
//         <Button active badge vertical>
//           <Badge ><Text>51</Text></Badge>
//           <Icon active name="navigate" />
//           <Text>Navigate</Text>
//         </Button>
//         <Button vertical>
//           <Icon name="person" />
//           <Text>Contact</Text>
//         </Button>
//       </FooterTab>
//     </Footer>
//     );
// }