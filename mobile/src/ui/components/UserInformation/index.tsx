import React from 'react';
import { Avatar } from 'react-native-paper';

import {
  UserInformationContainer,
  InformationContainer,
  UserName,
  UserDescription,
  RatingStyled,
} from './styles';

interface UserInfomationProps {
  name: string;
  picture: string;
  rating: number;
  description?: string;
  darker?: boolean;
}

const UserInformation = ({
  name,
  rating,
  description,
  picture,
  darker,
}: UserInfomationProps) => {
  return (
    <UserInformationContainer darker={!!darker}>
      <Avatar.Image source={{ uri: picture }} />

      <InformationContainer>
        <UserName>{name}</UserName>
        <RatingStyled defaultRating={rating} />
        <UserDescription>{description}</UserDescription>
      </InformationContainer>
    </UserInformationContainer>
  );
};

export default UserInformation;
