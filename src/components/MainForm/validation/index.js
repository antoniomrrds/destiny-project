import * as yup from 'yup';
export const yupValidation = yup.object().shape({
  name: yup
    .string()
    .min(2, 'mínimo 2 caracteres')
    .required('Nome é obrigatório'),
  email: yup.string().email('email inválido').required('Email é obrigatório'),
  telephone: yup
    .string()
    .matches(/\(?\d{0,3}\)?\s?\d{4,5}-\d{4}/g, 'telefone inválido')
    .required('Telefone é obrigatório'),
  cpf: yup
    .string()
    .matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/g, 'Cpf inválido')
    .max(14, 'Cpf inválido')
    .required('Cpf é obrigatório'),
  city: yup
    .array()
    .min(1, 'Cidade é obrigatória')
    .required('Cidade é obrigatória'),
  country: yup
    .array()
    .min(1, 'País é obrigatório')
    .required('País é obrigatório'),
});
