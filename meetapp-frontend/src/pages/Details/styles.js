import styled from 'styled-components';

export const Container = styled.div`
  width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #info {
    padding: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 32px;
  font-weight: 400;
  line-height: 24px;

  #buttons {
    display: flex;
    justify-content: space-between;
  }

  strong {
    color: #ffffff;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 35px;
    border: 0;
    border-radius: 4px;
    background: #f94d6a;
    color: #fff;
    line-height: 21px;

    svg {
      margin-right: 0.5em;
    }
  }

  #edit {
    margin-right: 8px;
    background: #4dbaf9;
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 45px;

  img {
    width: 100%;
    height: 250px;
    background: #d8d8d8;
    border-radius: 4px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;
  margin-top: 15px;

  #description {
    margin-bottom: 10px;
  }

  p {
    color: #fff;
    font-size: 18px;
    line-height: 32px;
    margin-top: 10px;
  }
`;

export const InfoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 25px;

  span {
    display: flex;
    align-content: center;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.6);

    svg {
      margin-right: 0.5em;
    }
  }
`;
