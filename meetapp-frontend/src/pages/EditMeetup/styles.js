import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input,
    #description {
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    #description {
      display: flex;
      height: 200px;
      font-family: 'Roboto';
      font-size: 14px;
      line-height: 24px;
      padding-top: 10px;
      resize: none;

      &::placeholder {
        align-items: start;
      }
    }

    .react-datepicker__navigation.react-datepicker__navigation--previous,
    .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
      display: none;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item--selected {
      background: #402845;
    }

    #img {
      height: 300px;
      font-family: 'Roboto';
      font-size: 14px;
      line-height: 24px;
      padding-top: 10px;
      resize: none;
    }

    span {
      color: #f94d6a;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      width: 162px;
      height: 50px;
      align-self: flex-end;
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 5px 0 0;
      height: 50px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      svg {
        margin-right: 0.5em;
      }

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }

    a {
      color: #fff;
      opacity: 0.6;
      margin-top: 15px;
      font-size: 16px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
