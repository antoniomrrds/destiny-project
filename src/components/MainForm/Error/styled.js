import styled, { css } from 'styled-components';

export const Span = styled.span`
  align-items: flex-start;
  align-self: flex-start;
  color:red;
  .icons{
      vertical-align:sub;
      color: red;
      font-weight: bolder;
      margin: 8px 5px 2px;
  }
`;
export const SpanSelected = styled.span`
  color: red;
  align-items: center;
  align-self: flex-start;
  margin:8px 5px;
  .icons{
      vertical-align:text-bottom;
      color: red;
      font-weight: bolder;
      margin-right: 5px;
  }
`;
