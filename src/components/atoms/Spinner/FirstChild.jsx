import { Children } from 'react';

export const FirstChild = ({ children }) => Children.toArray(children)[0] || null;
