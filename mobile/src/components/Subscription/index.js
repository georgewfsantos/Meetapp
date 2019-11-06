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

export default function Subscription({ data, onCancel }) {
  return (
    <Container past={data.Meetup.past}>
      <Banner
        source={{
          uri: data.Meetup.File
            ? data.Meetup.File.url
            : 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        }}
      />
      <Info>
        <Title>{data.Meetup.title}</Title>
        <LineView>
          <Icon name="event" size={20} color="#999999" />
          <InfoText>
            {format(parseISO(data.Meetup.date), "d 'de' MMMM', às' HH:mm'h'", {
              locale: pt,
            })}
          </InfoText>
        </LineView>

        <LineView>
          <Icon name="place" size={20} color="#999999" />
          <InfoText>{data.Meetup.location}</InfoText>
        </LineView>

        <LineView>
          <Icon name="person" size={20} color="#999999" />
          <InfoText>Organizador: {data.Meetup.User.name}</InfoText>
        </LineView>

        {data.Meetup.past === false && !data.canceled_at && (
          <MeetupButton onPress={onCancel}>
            <ButtonText>Cancelar Inscrição</ButtonText>
          </MeetupButton>
        )}
      </Info>
    </Container>
  );
}
