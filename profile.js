import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import FooterView from './footer';

const images = [
  'https://media1.popsugar-assets.com/files/thumbor/f6mR3MTC66MfnZFc0qGrgcnZ_fg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/12/19/048/n/1922441/tmp_f17bIy_7aef35b1ab387138_k.jpg',
  'https://www.bbcgoodfood.com/sites/default/files/Ching-main.jpg',
  '/images/dummy-image-3.jpg',
  '/images/dummy-image-4.jpg',
  '/images/dummy-image-5.jpg'
];
export default class HelloWorldApp extends Component {
  render() {
    return (
      <Container>
      <Header />
      <Content>
      <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:images[0]}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: images[0]}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                Procuring education on consulted assurance in do. Is sympathize he expression mr no travelling. Preference he he at travelling in resolution. So striking at of to welcomed resolved. Northward by described up household therefore attention. Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new. 
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button block onPress={() => this.props.navigation.navigate('Options')}>
              <Text>Connect</Text>
            </Button>
              </Left>
            </CardItem>
          </Card>
      </Content>
      <FooterView />
    </Container>
    );
  }
}