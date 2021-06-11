import { Container, Toolbar } from '@material-ui/core';
import { HeaderAppBar, HeaderLogo } from './styles';

const Header = () => {
  return (
    <HeaderAppBar position="sticky">
      <Toolbar component={Container}>
        <HeaderLogo src="/img/logos/logo.svg" alt="logo" />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
