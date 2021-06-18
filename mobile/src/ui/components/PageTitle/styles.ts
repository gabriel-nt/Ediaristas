import styled from '@emotion/native';

export const PageTitleContainer = styled.View`
  margin: ${({ theme }) => theme.spacing(5) + ' ' + 0};
`;

export const PageTitleStyled = styled.Text`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PageSubtitleStyled = styled.Text`
  font-size: 14px;
  max-width: 275px;
  text-align: center;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing(1.5) + ' auto'};
`;
