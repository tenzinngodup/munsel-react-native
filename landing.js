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
        <Card>
          <CardItem button onPress={() => this.props.navigation.navigate('Profile')}>
            <Left>
              <Thumbnail source={{uri:images[0] }} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: images[0]}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem >
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
          <CardItem button onPress={() => this.props.navigation.navigate('Profile')}>
            <Left>
              <Thumbnail source={{uri:images[1] }} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: images[1]}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
      <FooterView />
    </Container>
    );
  }
}