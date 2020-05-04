import * as Yup from 'yup';

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
};
