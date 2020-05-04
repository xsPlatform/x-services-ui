import * as Yup from 'yup';
import ValidationRules from '../validations/validationsSchemas';

export const signupDataSchema = Yup.object().shape({
  email: ValidationRules.Email(),
  role: ValidationRules.Required(),
  password: ValidationRules.PasswordClient(),
});
