import P from 'prop-types';
import { Span, SpanSelected } from './styled';
import { FiAlertTriangle } from 'react-icons/fi';
export const Error = ({ value, errors }) => {
  if (errors[value]) {
    return (
      <Span>
        <FiAlertTriangle size={20} className="icons" />
        {errors[value]?.message}
      </Span>
    );
  }
};
export const ErrorSelected = ({ value, errors }) => {
  if (errors[value]) {
    return (
      <SpanSelected>
        <FiAlertTriangle size={20} className="icons" />
        {errors[value]?.message}
      </SpanSelected>
    );
  }
};

Error.propTypes = {
  value: P.string.isRequired,
  errors: P.object.isRequired,
};
ErrorSelected.propTypes = {
  value: P.string.isRequired,
  errors: P.object.isRequired,
};
