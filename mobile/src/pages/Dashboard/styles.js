import styled from 'styled-components/native';
import Button from './Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
  align-self: center;
  margin-top: 30px;
`;

export const DateHeader = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const DateText = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-right: 8px;
  margin-left: 8px;
`;
export const RightButton = styled(Button)``;
export const LeftButton = styled(Button)``;
export const RightButtonText = styled.Text``;
export const LeftButtonText = styled.Text``;

export const List = styled.FlatList.attrs({
  showsVerticalScrolIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
