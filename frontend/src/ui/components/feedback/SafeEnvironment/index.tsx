import { SafeEnvironmentContainer } from './styles';
import { Container } from '@material-ui/core';

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente 100% Seguro
        <i className="twf-lock"></i>
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
