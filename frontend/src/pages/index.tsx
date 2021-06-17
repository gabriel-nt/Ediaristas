import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import {
  FormElementsContainer,
  ProfissionalsPaper,
  ProfessionalsContainer,
} from '@styles/pages/home';
import useIndex from 'data/hooks/pages/useIndex.page';
import PageTitle from 'ui/components/data-display/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask';

export default function Home() {
  const {
    cep,
    setCep,
    cepIsValid,
    searchDiarists,
    errorMessage,
    diarists,
    isLoading,
    isSearch,
    countRestDiarists,
  } = useIndex();

  return (
    <div className="container">
      <main>
        <SafeEnvironment />
        <PageTitle
          title="Conheça os profissionais"
          subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
        />

        <Container>
          <FormElementsContainer>
            <TextFieldMask
              label="Digite seu Cep"
              fullWidth
              mask="99999-999"
              variant="outlined"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />

            {errorMessage && (
              <Typography color="error">{errorMessage}</Typography>
            )}

            <Button
              variant="contained"
              color="secondary"
              sx={{ width: 220 }}
              disabled={!cepIsValid || isLoading}
              onClick={() => searchDiarists(cep)}
            >
              {isLoading ? <CircularProgress size={20} /> : 'Buscar'}
            </Button>
          </FormElementsContainer>

          {isSearch && diarists.length > 0 ? (
            <ProfissionalsPaper>
              <ProfessionalsContainer>
                {diarists.map((item, index) => (
                  <UserInformation
                    key={index}
                    name={item.full_name}
                    picture={item.photo}
                    rating={item.rating}
                    description={item.city}
                  />
                ))}
              </ProfessionalsContainer>

              <Container sx={{ textAlign: 'center' }}>
                {countRestDiarists > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {countRestDiarists}
                    {countRestDiarists > 1
                      ? ' profissionais atendem '
                      : ' profissional atende '}
                    ao seu endereço
                  </Typography>
                )}

                <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionalsPaper>
          ) : (
            <Typography align="center" color="textPrimary">
              Ainda não temos nenhuma diarista disponível em sua região
            </Typography>
          )}
        </Container>
      </main>
    </div>
  );
}
