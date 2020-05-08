import * as Yup from 'yup';
import { validCpf } from './cpf';
import { validCNPJ } from './cnpj';

let checked = false;

export default {
  Cep() {
    return Yup.string()
      .required('Campo obrigatório!')
      .test('validCep', 'Cep inválido!', (value) => {
        if (value) {
          const cepNoMask = value.replace('-', '');
          return cepNoMask.length === 8;
        }
        return false;
      });
  },
  Required() {
    return Yup.string().required('Campo obrigatório!');
  },
  Email() {
    return Yup.string()
      .required('Campo obrigatório!')
      .email('Email inválido!');
  },
  CpfCnpj() {
    return Yup.string()
      .required('Campo obrigatório!')
      .test('cpf', 'Cpf inválido!', (value) => {
        if (value && value.length <= 14) {
          return validCpf(value);
        }
        return true;
      })
      .test('CpfCnpj', 'Cnpj inválido!', (value) => {
        if (value && value.length > 14) {
          return validCNPJ(value);
        }
        return true;
      });
  },
  AddressNumber() {
    return Yup.string().test('validAddressNumber', 'Campo obrigatório!', (value) => {
      if (checked || value) {
        return true;
      }
      return false;
    });
  },
  PasswordClient() {
    return Yup.string()
      .required('Campo obrigatório!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/,
        'Senha fraca, verificar Regras para senha',
      );
  },
  CheckNoNumber() {
    return Yup.string().test('checkNoNumber', (value) => {
      checked = value === 'true';
      return true;
    });
  },
  CompanyResponsibleName() {
    return Yup.string().when('personType', {
      is: (personType) => personType === 2,
      then: Yup.string().required('Campo obrigatório'),
    });
  },
  CompanyResponsibleEmail() {
    return Yup.string()
      .when('personType', {
        is: (personType) => personType === '2',
        then: Yup.string().required('Campo obrigatório'),
      })
      .email('Email inválido!');
  },
};
