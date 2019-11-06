import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Subscription from '~/components/Subscription';

import { Container, Title, List } from './styles';

function Subscriptions({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`subscriptions/${id}`);

    setSubscriptions(
      subscriptions.map(subscription =>
        subscription.id === id
          ? {
              ...subscription,
              canceled_at: response.data.canceled_at,
            }
          : subscription
      )
    );
  }
  return (
    <Background>
      <Container>
        <Title>Subscriptions</Title>

        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Subscription onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
