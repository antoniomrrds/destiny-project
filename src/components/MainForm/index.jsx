import { yupResolver } from '@hookform/resolvers/yup';
import { yupValidation } from './validation/index';

import MaskedInput from 'react-input-mask';
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from 'react';

import { loadingDatas } from './service/loadingDatas';

import { Form, FormContainer } from '../Form/styled';
import Field from '../Field';
import { Button } from '../Button/index';
import { Error, ErrorSelected } from './Error/index';
import { Container } from '../Container/index';
import { Title } from '../Title/index';
import { Multiselect } from '../Field/Select/MultiSelect';
import { Content } from '../Content/index';
import { Label } from '../Field/Label';
import { Input } from '../Field/Input';

export const MainForm = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async function data() {
      const { countriesResponse, citiesResponse } = await loadingDatas();
      setCities(citiesResponse.data);
      setCountries(countriesResponse.data);
    })();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(yupValidation),
  });
  const newDestiny = (data) => {
    alert(JSON.stringify(data));
  };

  if (cities && countries) {
    return (
      <Form onSubmit={handleSubmit(newDestiny)}>
        <FormContainer>
          <Container>
            <Title value="Dados pessoais" />
            <Field.Text
              label="Nome"
              name="name"
              type="text"
              register={register}
            />
            <Error value="name" errors={errors} />

            <Field.Text
              label="Email"
              name="email"
              type="email"
              register={register}
            />
            <Error value="email" errors={errors} />

            <Controller
              name="telephone"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <MaskedInput
                  mask="(99) 9999-9999"
                  maskChar=""
                  value={field.value}
                  onChange={field.onChange}
                >
                  {(inputProps) => (
                    <Label>
                      <Content>{'Telefone'}</Content>
                      <Input {...inputProps} type="text" />
                    </Label>
                  )}
                </MaskedInput>
              )}
            />

            <Error value="telephone" errors={errors} />

            <Controller
              name="cpf"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <MaskedInput
                  mask="999.999.999-99"
                  maskChar=""
                  value={field.value}
                  onChange={field.onChange}
                >
                  {(inputProps) => (
                    <Label>
                      <Content>{'Cpf'}</Content>
                      <Input {...inputProps} type="text" />
                    </Label>
                  )}
                </MaskedInput>
              )}
            />
            <Error value="cpf" errors={errors} />
          </Container>
          <Container>
            <Title title={false} value="Destinos de Interesse" />

            <Multiselect
              name="country"
              control={control}
              values={countries.map((e) => e.name_ptbr)}
            />

            <ErrorSelected value="country" errors={errors} />
            <Multiselect
              name="city"
              control={control}
              values={cities.map((e) => e.name_ptbr)}
            />
            <ErrorSelected value="city" errors={errors} />
          </Container>
        </FormContainer>

        <Button name="Enviar" />
      </Form>
    );
  }
};
