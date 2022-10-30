import P from 'prop-types';

import { Label } from './Label';
import { Content } from '../Content';
import { Input } from './Input';

const Text = ({ label, type, name, register, placeholder }) => (
  <Label>
    <Content>{label}</Content>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name)}
    />
  </Label>
);

Text.propTypes = {
  label: P.string.isRequired,
  type: P.string.isRequired,
  name: P.string.isRequired,
  placeholder: P.string,
  register: P.func.isRequired,
};

const Field = {
  Text,
};

export default Field;
