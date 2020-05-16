export { default as helpers } from './helpers';
export { default as designSystem } from './designSystem';
export { default as components } from './components';

/*
  Components
*/

// Components Atoms

export { default as Button } from './components/atoms/Button';
export { Image } from './components/atoms/Image';
export { default as Input } from './components/atoms/Input';
export { Typography } from './components/atoms/Typography';
export { Col } from './components/atoms/Col';
export { Row } from './components/atoms/Row';
export { Grid } from './components/atoms/Grid';
export { Spinner } from './components/atoms/Spinner';
export { Snackbar } from './components/atoms/Snackbar';
export { Strong } from './components/atoms/Strong';
export { Span } from './components/atoms/Span';
export { IconButton } from './components/atoms/IconButton';

// Material UI
export {
  TextFieldMUI,
  GridMUI,
  LinkMUI,
  ButtonMUI,
  PaperMUI,
  MenuItemMUI,
} from './components/atoms';

// Components Molecules
export { Search } from './components/molecules/Search';
export { default as TextField } from './components/molecules/TextField';
export { ErrorMessageBox } from './components/molecules/ErrorMessageBox';
export { Dialog } from './components/molecules/Dialog';
export { MenuMobile } from './components/molecules/MenuMobile';
export {
  PageHeaderTool,
  PasswordFieldMUI,
  CardMUI,
  CardHelpMUI,
  SearchFieldMUI,
  ItemCardTable,
  AvatarUploadMUI,
  CardSubCategoryMUI,
  CheckBoxMUI,
} from './components/molecules';

// Components Organisms

// Components Templates

export { default as Main } from './components/templates/Main';
export { default as MaterialMain } from './components/templates/MaterialMain';
// Components Pages

/*
  Helpers
*/

// Helpers Format

export { default as formatString } from './helpers/format/string';
export {
  splitAndGetFirst,
  splitAndSliceByIndex,
  clearMask,
  strDataFromBrFormatForAny,
  strDateFromAnyToBr,
  zeroPad,
  formatDouble,
  currencyToDouble,
  formatCpfCnpj,
} from './helpers/format/string';
export { default as formatNumber } from './helpers/format/number';

// Helpers Scales
export { default as pxToRem } from './helpers/scales/converter';

// Helpers Validations

export { validCpf, isEmail } from './helpers/validations';

// Helpers Schemas
export {
  addressDataSchema,
  signupDataSchema,
  resetPasswordDataSchema,
  personalDataSchema,
} from './helpers/schemas';

// Helpers Mask
export { maskCEP } from './helpers/mask';

// Helpers Colors
export { getColor } from './helpers/colors';

// Theme
export { MuiThemeProvider, theme } from './helpers/theme';

// Exeptions
export { handleException } from './helpers/exeptions';
