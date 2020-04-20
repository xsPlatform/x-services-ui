import { getNumCharacterFromString } from '../format/string';
import ds from '../../designSystem';

export const pxToRem = (px) => `${px / getNumCharacterFromString(ds.get('type.baseFontSize'))}em`;

export default pxToRem;
