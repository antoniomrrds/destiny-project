import { Header } from './styled';
import P from 'prop-types';
export const Title = ({ value }) => <Header>{value}</Header>;

Title.propTypes = {
  value: P.string.isRequired,
};
