import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;
export const Banner = styled.Image`
  width: 100%;
  height: 150px;
`;
export const Info = styled.View`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const LineView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const InfoText = styled.Text`
  margin: 5px 0 10px 5px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;

  color: #999;
`;
export const Title = styled.Text`
  margin-bottom: 10px;
  height: 24px;
  font-size: 22px;
  font-weight: bold;
  line-height: 24px;
`;

export const MeetupButton = styled(Button)`
  width: 100%;
  margin-top: 5px;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
`;
