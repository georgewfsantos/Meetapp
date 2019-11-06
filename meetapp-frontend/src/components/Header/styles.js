import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #999;
    }

    a {
      font-weight: bold;
      color:#999;

      &:hover {
       color: ${lighten(0.08, '#999')};
     }
    }


  }

  aside {
    display: flex;
    align-items: center;

    button {
      border: 0;
      width: 71px;
      height: 35px;
      border-radius: 4px;
      background: #f94d6a;
      margin-left: 20px;
      color: #fff;
      font-weight:600;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;

      &:hover {
        color: ${lighten(0.08, '#999')};
      }
    }
  }
`;
