import { useCallback, useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [cep, setCep] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [countRestDiarists, setCountRestDiarists] = useState(0);
  const [diarists, setDiarists] = useState<UserShortInterface[]>([]);

  const cepIsValid = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);

  const searchDiarists = useCallback(async (cep: string) => {
    setIsSearch(false);
    setIsLoading(true);
    setErrorMessage('');

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>(`api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);

      setIsSearch(true);
      setIsLoading(false);
      setDiarists(data.diaristas);
      setCountRestDiarists(data.quantidade_diaristas);
    } catch (e) {
      setIsLoading(false);
      setErrorMessage('CEP não encontrado');
    }
  }, []);

  return {
    cep,
    setCep,
    cepIsValid,
    searchDiarists,
    errorMessage,
    isLoading,
    diarists,
    isSearch,
    countRestDiarists,
  };
}
