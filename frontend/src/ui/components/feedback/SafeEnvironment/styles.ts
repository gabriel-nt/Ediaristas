import { experimentalStyled as styled } from '@material-ui/core/styles';

export const SafeEnvironmentContainer = styled('div')`
  font-size: 12px;
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
`;
