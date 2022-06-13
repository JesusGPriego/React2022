import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 100;
  transition: all 0.5s;
`;
export const Container = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 240px;
  height: 340px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 1000;

  button {
    margin-top: auto;
    font-size: 12px;
  }
`;

export const Message = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const Item = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
