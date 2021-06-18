import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import PageTitle from 'ui/components/PageTitle';
import TextInput from 'ui/components/TextInput';
import Button from 'ui/components/Button';
import UserInformation from 'ui/components/UserInformation';

import {
  ErrorText,
  FormContainer,
  TextContainer,
  ResponseContainer,
} from '@styles/pages/search-diarist';

import { useTheme } from '@emotion/react';
import useIndex from 'data/hooks/pages/useIndex.page';
import useSearchDiarist from 'data/hooks/pages/useSearchDiarist';

const SearchDiarist = () => {
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

  const { colors } = useTheme();
  const { zipCode } = useSearchDiarist();

  useEffect(() => {
    if (zipCode && !cep) {
      setCep(zipCode);
      searchDiarists(zipCode);
    }
  }, [zipCode]);

  return (
    <ScrollView>
      <PageTitle
        title="Conheça as profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua cidade"
      />

      <FormContainer>
        <TextInputMask
          value={cep}
          onChangeText={value => setCep(value)}
          type="custom"
          options={{ mask: '99.999-999' }}
          customTextInput={TextInput}
          customTextInputProps={{
            label: 'Digite seu CEP',
          }}
        />

        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}

        <Button
          mode="contained"
          style={{ marginTop: 32 }}
          color={colors.accent}
          disabled={!cepIsValid || isLoading}
          onPress={() => searchDiarists(cep)}
          loading={isLoading}
        >
          Buscar
        </Button>
      </FormContainer>

      {isSearch &&
        (diarists.length > 0 ? (
          <ResponseContainer>
            {diarists.map((item, index) => (
              <UserInformation
                key={index}
                name={item.full_name}
                picture={item.photo || ''}
                rating={item.rating || 0}
                description={item.city}
                darker={index % 2 === 1}
              />
            ))}

            {countRestDiarists > 0 && (
              <TextContainer>
                ... e mais {countRestDiarists}
                {countRestDiarists > 1
                  ? ' profissionais atendem '
                  : ' profissional atende '}
                ao seu endereço
              </TextContainer>
            )}

            <Button mode="contained" color={colors.accent}>
              Contratar um profissional
            </Button>
          </ResponseContainer>
        ) : (
          <TextContainer>
            Ainda não temos nenhuma diarista disponível em sua região
          </TextContainer>
        ))}
    </ScrollView>
  );
};

export default SearchDiarist;
