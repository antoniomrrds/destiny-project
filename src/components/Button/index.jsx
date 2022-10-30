import P from 'prop-types';
import { Btn } from './styled';
export const Button = ({ name }) => <Btn>{name}</Btn>;

Button.propTypes = {
  name: P.node.isRequired,
};
