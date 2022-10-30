import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.section`
  min-width: 400px;
  max-width: 500px;
  background:${theme.colors.primaryColor} ;
  margin: 20px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(1,1,1,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  color:${theme.colors.secondaryColor} ;


`;
