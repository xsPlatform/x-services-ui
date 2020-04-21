const status400Message = (errorMessage) => {
  switch (errorMessage) {
    case 'Token is invalid':
      return 'Tempo expirado, solicite um novo e-mail.';
    default:
      return 'Erro ao realizar ação. Tente novamente mais tarde!';
  }
};

const status401Message = (errorMessage) => {
  if (errorMessage.includes('Email ou senha incorretos')) {
    return 'Email ou Senha incorretos';
  }
  return 'Erro ao realizar ação. Tente novamente mais tarde!';
};

export const handleException = (status, errorMessage) => {
  switch (status) {
    case 400:
      return status400Message(errorMessage);
    case 401:
      return status401Message(errorMessage);
    default:
      return status400Message(errorMessage);
  }
};

export default handleException;
