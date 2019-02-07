import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  form {
    width: 100%;
    background: #e9f1f6;
    padding: 20px;
    border-radius: 5px;
    margin: 30px 0;
  }

  form textarea {
    border: 3px solid #d8e5ed;
    border-radius: 5px;
    font-size: 14px;
    padding: 15px;
    width: 100%;
    resize: none;
  }

  li {
    padding: 20px 20px 0;
    margin: 20px 0 0;
    border-top: 1px solid #eee;
  }

  li:first-child {
    margin-top: 0;
    padding-top: 0;
    border: 0;
  }

  ul {
    list-style: none;
    color: #1c2022;
  }
`;
