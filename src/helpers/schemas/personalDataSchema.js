import * as Yup from 'yup';
import ValidationRules from '../validations/validationsSchemas';

export const personalDataSchema = Yup.object().shape({
  name: ValidationRules.Required(),
  personType: ValidationRules.Required(),
  phone: ValidationRules.Required(),
  cpfOrCnpj: ValidationRules.CpfCnpj(),
  zipCode: ValidationRules.Cep(),
  address: ValidationRules.Required(),
  neighborhood: ValidationRules.Required(),
  city: ValidationRules.Required(),
  state: ValidationRules.Required(),
  companyResponsibleEmail: ValidationRules.CompanyResponsibleEmail(),
  companyResponsibleName: ValidationRules.CompanyResponsibleName(),
});
