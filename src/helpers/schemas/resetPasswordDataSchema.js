import * as Yup from 'yup';
import ValidationRules from '../validations/validationsSchemas';

export const resetPasswordDataSchema = Yup.object().shape({
  password: ValidationRules.PasswordClient(),
});
