import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  flex-grow: 1;
  padding-top: 4px;
`;

export const ClearBtn = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  z-index: 1;
`;

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  min-width: 228px;
  height: 48px;
  padding: 0 16px;
  border-radius: 4px;
  overflow: hidden;
  ${ClearBtn} {
    margin-left: 8px;
  }
`;

export const Error = styled.span`
  color: red;
  white-space: nowrap;
`;

export const Progress = styled.progress`
  width: 100%;
  height: 4px;
  border-radius: 8px;
  ::-webkit-progress-bar {
    background-color: blue;
    border-radius: 8px;
  }
  ::-webkit-progress-value {
    background-color: orange;
    border-radius: 8px;
  }
`;

export const Link = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
