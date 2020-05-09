import { COLOR, STYLED } from 'const';
import styled from 'styled-components';
import { Button, Input as _Input, Textarea as _Textarea } from 'ui-kit';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
`;

export const Input = styled(_Input)`
  color: ${COLOR.BLACK};
`;

export const Textarea = styled(_Textarea)`
  color: ${COLOR.BLACK};
  margin-top: 10px;
  textarea {
    height: 150px;
  }
`;

export const AddImage = styled(Button).attrs({ styled: STYLED.PRIMARY })`
  margin: 10px 0 10px auto;
`;

export const DemoImg = styled.img`
  width: 100%;
`;

export const ImagePreview = styled.div`
  display: block;
  margin: 0 auto;
  width: 300px;
`;
