import styled from '@emotion/native';
import { Button } from 'react-native-paper';

export const ButtonStyled = styled(Button)`
  width: 100%;
  margin: 0 auto;
  max-width: 300px;
  padding: ${({ theme }) => theme.spacing(0.5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;

ButtonStyled.defaultProps = {
  dark: true,
  uppercase: false,
};
