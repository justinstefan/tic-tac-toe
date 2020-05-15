import styled from 'styled-components';

export const Button = styled.button`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
  ${({ active }) => !active && `
    border: 1px solid #999999;
    background-color: #cccccc !important;
    color: #666666;
  `}
`;

export const Container = styled.div`
  text-align: center;
  margin: 1rem;
`;