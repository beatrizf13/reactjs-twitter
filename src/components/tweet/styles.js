import styled from 'styled-components';

export const Container = styled.div`
  p {
    margin: 15px 0;
    font-size: 14px;
    line-height: 20px;
  }

  button {
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    color: #697882;
    cursor: pointer;
  }

  button img {
    margin-right: 5px;
  }

  button:hover {
    opacity: 0.7;
  }
`;
