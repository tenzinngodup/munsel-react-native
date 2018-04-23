import React, { Component } from 'react';
import { Image } from 'react-native';

import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import FooterView from './footer';

export default class HelloWorldApp extends Component {
  render() {
    return (
        <Container>s
        <Content>
          <Card  >
            <CardItem header button onPress={() => this.props.navigation.navigate('Dicovery')}>
              <Text >Tibetan</Text>
              <CardItem cardBody>
            </CardItem>
            </CardItem>
  
         </Card>
         <Card>
            <CardItem header button onPress={() => this.props.navigation.navigate('Dicovery')}>
              <Text>English</Text>
              <CardItem cardBody>
            </CardItem>
            </CardItem>

         </Card>
         <Card>
            <CardItem header button onPress={() => this.props.navigation.navigate('Dicovery')}>
              <Text>Chinese</Text>
              <CardItem cardBody>
            </CardItem>
            </CardItem>
         </Card>
        </Content>
      <FooterView />
      </Container>
      
    );
  }
}