import React, { Component } from 'react';
import { Text ,View} from 'react-native';

import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { Footer, FooterTab, Button, Icon, Form,Item ,Input, Label} from 'native-base';

import {  Card, CardItem, Right } from 'native-base';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 3, backgroundColor: 'powderblue'}} >
          <Container>
          <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Phone Number</Label>
                  <Input />
                </Item>
              </Form>
              <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Icon active name="logo-facebook" />
              <Text>facebook</Text>
             </CardItem>
           </Card>

            <Button block onPress={() => this.props.navigation.navigate('Options')}>
              <Text>Sign Up</Text>
            </Button>
          </Content>
        </Container>
      </View>
      <View style={{flex: 2, backgroundColor: 'white'}} />
      <View style={{flex: 3, backgroundColor: 'white'}}>
      <Container>
          <Content>
            <Button block onPress={() => this.props.navigation.navigate('Options')}>
              <Text>Login</Text>
            </Button>
          </Content>
          </Container>
        </View>
    </View>

    );
  }
}