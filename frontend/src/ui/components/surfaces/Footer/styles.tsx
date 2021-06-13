import { Container, Typography } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';

export const FooterStyled = styled('footer')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const AppList = styled('ul')`
  list-style: none;
  display: flex;
  padding: 0;
  gap: ${({ theme }) => theme.spacing()};

  img {
    width: 122px;
  }
`;

export const FooterTitle = styled(props => (
  <Typography component={'h2'} variant={'body2'} {...props} />
))`
  font-weight: bold;
`;
