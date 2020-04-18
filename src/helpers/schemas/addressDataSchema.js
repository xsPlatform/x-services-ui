import * as Yup from 'yup';
import ValidationRules from '../validations/validationsSchemas';

export const addressDataSchema = Yup.object().shape({
  postalCode: ValidationRules.Cep([Yup.ref('noNumber')]),
  street: ValidationRules.Required(),
  neighborhood: ValidationRules.Required(),
  city: ValidationRules.Required(),
  state: ValidationRules.Required(),
  noNumber: ValidationRules.CheckNoNumber([Yup.ref('noNumber')]),
  number: ValidationRules.AddressNumber([Yup.ref('number')]),
});
