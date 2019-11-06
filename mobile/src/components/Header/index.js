import React from 'react';
import { View } from 'react-native';

import logo from '~/assets/logo.png';

import { Container, Content, Image } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <View>
          <Image source={logo} />
        </View>
      </Content>
    </Container>
  );
}
