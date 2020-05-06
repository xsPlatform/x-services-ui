import styled from 'styled-components';
import ds from '../../../designSystem';
import { pxToRem } from '../../../helpers/scales/converter';

export const ItemFooter = styled.div`
  display: none;
  flex-direction: column;

  h3 {
    font-size: ${pxToRem(27)};
    font-weight: 600;
    margin-bottom: ${pxToRem(40)};
  }

  a {
    color: #fff;
    cursor: pointer;
    font-size: ${pxToRem(22)};
    text-decoration: none;
  }

  div {
    margin-top: ${pxToRem(40)};
    display: flex;

    img {
      cursor: pointer;
      margin-right: ${pxToRem(7)};

      @media ${ds.get('device.s')} {
        width: 8px;
        height: 8px;
      }

      @media ${ds.get('device.m')} {
        width: 15px;
        height: 15px;
      }

      @media ${ds.get('device.l')} {
        width: 34px;
        height: 34px;
      }
    }
  }
  @media ${ds.get('device.s')} {
    display: flex;
  }
`;

export const Container = styled.div`
  @media ${ds.get('device.s')} {
    display: flex;
    color: #fff;
    background-color: #00909b;
    max-height: ${pxToRem(426)};
    padding: ${pxToRem(104)} ${pxToRem(146)};
    width: 100vw;

    ${ItemFooter}:not(:last-child) {
      margin-right: ${pxToRem(270)};
    }
  }
`;

export const MobileFooter = styled.div`
  background-color: #00909b;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(20)} ${pxToRem(30)};
  width: 100%;

  h3 {
    font-size: ${pxToRem(16)};
    font-weight: 600;
    margin-bottom: ${pxToRem(5)};
  }

  a {
    color: #fff;
    cursor: pointer;
    font-size: ${pxToRem(14)};
    text-decoration: none;
  }

  img {
    cursor: pointer;
    height: 20px;
    margin: ${pxToRem(7)} ${pxToRem(7)} 0 0;
    width: 20px;
  }

  @media ${ds.get('device.s')} {
    display: none;
  }
`;
