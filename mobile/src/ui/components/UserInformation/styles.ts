import styled, { css } from '@emotion/native';
import { View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import AppTheme from 'ui/themes';

interface UserInformationProps {
  darker: boolean;
}

export const UserInformationContainer = styled(View, {
  shouldForwardProp: prop => prop !== 'darker',
})<UserInformationProps>`
  flex-flow: row;
  align-items: center;
  background-color: ${({ theme, darker }) =>
    theme.colors.grey[darker ? 100 : 50]};
  padding: ${({ theme }) => theme.spacing(3) + ' ' + theme.spacing(2)};
`;

export const InformationContainer = styled.View`
  flex: 1;
  padding-left: ${({ theme }) => theme.spacing(2)};
`;

export const UserName = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const UserDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const RatingStyled = styled(AirbnbRating)``;

RatingStyled.defaultProps = {
  isDisabled: true,
  showRating: false,
  size: 10,
  count: 5,
  selectedColor: AppTheme.colors.warning,
  //@ts-ignore
  starContainerStyle: css`
    width: 100%;
    justify-content: flex-start;
  `,
};
