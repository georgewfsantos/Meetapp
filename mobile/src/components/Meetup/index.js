import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Banner,
  Info,
  Title,
  InfoText,
  ButtonText,
  LineView,
  MeetupButton,
} from './styles';

export default function Meetup({ data, onSubscribe }) {
  return (
    <Container past={data.past}>
      <Banner
        source={{
          uri: data.File
            ? data.File.url
            : 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        }}
      />
      <Info>
        <Title>{data.title}</Title>
        <LineView>
          <Icon name="event" size={20} color="#999999" />
          <InfoText>
            {format(parseISO(data.date), "d 'de' MMMM', às' HH:mm'h'", {
              locale: pt,
            })}
          </InfoText>
        </LineView>

        <LineView>
          <Icon name="place" size={20} color="#999999" />
          <InfoText>{data.location}</InfoText>
        </LineView>

        <LineView>
          <Icon name="person" size={20} color="#999" />
          <InfoText>Organizador: {data.User.name}</InfoText>
        </LineView>
        {data.past === false && (
          <MeetupButton onPress={onSubscribe}>
            <ButtonText>Realizar Inscrição</ButtonText>
          </MeetupButton>
        )}
      </Info>
    </Container>
  );
}
