import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    margin: 20px 0 0;
    width: 100%;
    max-width: 280px;

    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  form input {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 44px;
    padding: 0 15px;
    font-size: 14px;
  }

  form button {
    margin: 10px 0 0;
    background: #4bb0ee;
    border-radius: 5px;
    height: 44px;
    border: 0;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
  }

  form button:hover {
    background: #42a1db;
  }
`;
