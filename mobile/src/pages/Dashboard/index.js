import React, { useEffect, useState, useMemo } from 'react';
import { Alert } from 'react-native';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import {
  Container,
  Title,
  List,
  DateHeader,
  DateText,
  RightButton,
  LeftButton,
  RightButtonText,
  LeftButtonText,
} from './styles';

export default function Dashboard({ navigation }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  const formattedDate = useMemo(
    () => format(date, "d ' de ' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  useEffect(() => {
    async function loadMeetups() {
      const stringDate = date.toISOString();
      const searchDate = stringDate.split('T', 1);
      const response = await api.get(`listing?date=${searchDate}&page=1`);

      setMeetups(response.data);
    }

    loadMeetups();
  }, [date]);

  async function handleSubscription(id) {
    try {
      await api.post(`meetups/${id}/subscriptions`);

      Alert.alert(
        'You are subscribed',
        'Your subscription was succesfully submitted'
      );

      navigation.navigate('Subscriptions');
    } catch (err) {
      Alert.alert(
        'Subscription failed',
        'There was an error during the subscription attempt.'
      );
    }
  }

  return (
    <Background>
      <Container>
        <Title>Meetups</Title>
        <DateHeader>
          <LeftButton onPress={handlePrevDay}>
            <LeftButtonText>
              <Icon name="chevron-left" size={35} color="#fff" />
            </LeftButtonText>
          </LeftButton>

          <DateText> {formattedDate} </DateText>

          <RightButton onPress={handleNextDay}>
            <RightButtonText>
              <Icon name="chevron-right" size={35} color="#fff" />
            </RightButtonText>
          </RightButton>
        </DateHeader>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              onSubscribe={() => handleSubscription(item.id)}
              data={item}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
