import { AppBar } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up('md')} {
    .MuiToolbar-root {
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled('img')`
  height: 25px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 47px;
  }
`;
