import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Btn = styled.button`
  background-color:${theme.colors.dark};
  border: 2px solid ${theme.colors.secondaryColor};
  border-radius: 4px;
  width: 250px;
  height: 50px;
  font-size: 20px;
  padding: 10px 20px;
  color: ${theme.colors.white};
  margin: 0 auto;
  :hover{
    cursor: pointer;
    background:${theme.colors.primaryColor};
    color: ${theme.colors.secondaryColor};
  }
`;
