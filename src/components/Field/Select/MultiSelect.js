import P from 'prop-types';
import React from 'react';
import SelectMultiple from 'react-select';
import makeAnimated from 'react-select/animated';
import { Controller } from 'react-hook-form';
import { SelectInput } from './styled';

export const Multiselect = ({ label, name, values = [], control }) => {
  const options = values.map((value) => ({
    label: value,
    value: value,
  }));

  const animatedComponents = makeAnimated();
  return (
    <SelectInput>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <SelectMultiple
              components={animatedComponents}
              options={options}
              placeholder={'Selecione...'}
              isMulti={true}
              onChange={(options) =>
                onChange(options?.map((option) => option.value))
              }
              onBlur={onBlur}
              value={options.filter((option) => value?.includes(option.value))}
              defaultValue={options.filter((option) =>
                value?.includes(option.value),
              )}
            />
          );
        }}
      />
    </SelectInput>
  );
};
Multiselect.propTypes = {
  label: P.string,
  name: P.string.isRequired,
  values: P.array.isRequired,
  control: P.object.isRequired,
};
