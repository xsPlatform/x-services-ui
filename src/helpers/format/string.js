import moment from 'moment';

const numberToReal = (value) => {
  if (value) {
    const formattedValue = value.toFixed(2).split('.');
    formattedValue[0] = formattedValue[0].split(/(?=(?:...)*$)/).join('.');
    return formattedValue.join(',');
  }
  return 0;
};

export const getNumCharacterFromString = (str) => {
  const numb = str.match(/\d/g);
  return parseInt(numb.join(''), 10);
};

export const splitAndGetFirst = (str, separador) => str.slice(0, str.indexOf(separador));

export const splitAndSliceByIndex = (str, separador, sliceIndex) => {
  const strSplitted = str.split(separador);
  return strSplitted.slice(sliceIndex);
};

export const clearMask = (str) => str.replace(/\s+|[^\w\s]/gi, '');

export const strDataFromBrFormatForAny = (strData, format) => moment(strData, 'DD-MM-YYYY').format(format);

export const strDateFromAnyToBr = (strData, format) => moment(strData, 'YYYY-MM-DD').format(format);

export const currencyToDouble = (currency) => {
  let currencyFormat = currency.replace(/\./g, '');
  currencyFormat = currencyFormat.replace('R$ ', '');
  currencyFormat = currencyFormat.replace(',', '.');
  return parseFloat(currencyFormat);
};

export const zeroPad = (str, max) => Array(max - Math.floor(Math.log10(str))).join('0') + str;

export const formatDouble = (double) => numberToReal(double);

export default (params) => params;
