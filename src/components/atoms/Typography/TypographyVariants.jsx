import React from 'react';
import styled from 'styled-components';
import { string, node, number } from 'prop-types';
import ds from '../../../designSystem';

const baseTypographyStyle = (props) => `
  color: ${props.color};
  font-family: ${ds.get(`type.fontFamily.${props.fontFamily}`)};
  font-weight: ${ds.get(`type.fontWeight.${props.fontWeight}`)};
  opacity: ${ds.get(`opacity.${props.opacity}`)};
  text-align:  ${ds.get(`typography.textAlign.${props.textAlign}`)};
  line-height:  ${ds.get(`type.lineHeight.${props.lineHeight}`)};
  overflow-wrap: break-word;
  width: 100%;
  `;

const attrs = (id) => ({ 'data-test': `msg_${id}` });

const H1 = styled.h1.attrs(({ id }) => attrs(id))`
  font-size: ${ds.get('typography.size.h1')}px;
  letter-spacing: ${ds.get('typography.letterSpacing.h1')};
  ${(props) => baseTypographyStyle(props)};
`;

const H2 = styled.h2.attrs(({ id }) => attrs(id))`
  font-size: ${ds.get('typography.size.h2')}px;
  letter-spacing: ${ds.get('typography.letterSpacing.h2')};
  ${(props) => baseTypographyStyle(props)};
`;

const H3 = styled.h3.attrs(({ id }) => attrs(id))`
  font-size: ${ds.get('typography.size.h3')}px;
  letter-spacing: ${ds.get('typography.letterSpacing.h3')};
  ${(props) => baseTypographyStyle(props)};
`;

const H4 = styled.h4.attrs(({ id }) => attrs(id))`
  font-size: ${ds.get('typography.size.h4')}px;
  letter-spacing: ${ds.get('typography.letterSpacing.h4')};
  ${(props) => baseTypographyStyle(props)};
`;

const H5 = styled.h5.attrs(({ id }) => attrs(id))`
  font-size: ${ds.get('typography.size.h5')}px;
  letter-spacing: ${ds.get('typography.letterSpacing.h5')};
  ${(props) => baseTypographyStyle(props)};
`;

const H6 = styled.h5.attrs(({ id }) => attrs(id))`
  font-size: ${ds.get('typography.size.h6')}px;
  letter-spacing: ${ds.get('typography.letterSpacing.h6')};
  ${(props) => baseTypographyStyle(props)};
`;

const Paragraph = styled.p.attrs(({ id }) => attrs(id))`
  font-size: ${(props) => ds.get(`typography.size.${props.type}`)}px;
  letter-spacing: ${(props) => ds.get(`typography.letterSpacing.${props.type}`)}rem;
  ${(props) => baseTypographyStyle(props)};
`;

export const TypographyVariants = ({ children, type, ...other }) => {
  switch (type) {
    case 'h1':
      return (
        <H1 {...other} {...other}>
          {children}
        </H1>
      );
    case 'h2':
      return <H2 {...other}>{children}</H2>;
    case 'h3':
      return <H3 {...other}>{children}</H3>;
    case 'h4':
      return <H4 {...other}>{children}</H4>;
    case 'h5':
      return <H5 {...other}>{children}</H5>;
    case 'h6':
      return <H6 {...other}>{children}</H6>;
    default:
      return (
        <Paragraph type={type} {...other}>
          {children}
        </Paragraph>
      );
  }
};

TypographyVariants.propTypes = {
  type: string,
  children: node.isRequired,
  fontWeight: string,
  color: string,
  opacity: number,
  textAlign: string,
  fontFamily: string,
  lineHeight: string,
};

TypographyVariants.defaultProps = {
  type: '',
  fontWeight: 'normal',
  opacity: 100,
  color: ds.color('dark'),
  textAlign: 'left',
  fontFamily: 'helvetica',
  lineHeight: 'normal',
};
