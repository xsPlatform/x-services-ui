import styled from 'styled-components';
import ds from '../../../designSystem';

export const CopyRight = styled.div`
  font-family: ${ds.get('type.fontFamily.yantramanav')};
  font-size: ${ds.fontSize('xs')};
  font-weight: ${ds.get('type.fontWeight.normal')};
  line-height: ${ds.get('type.lineHeight.small')};
  text-align: right;
  width: 80%;
`;
