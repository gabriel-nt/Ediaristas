import { TextField } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutlineInput-notchedOutiline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
