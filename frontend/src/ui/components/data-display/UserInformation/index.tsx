import { Container, Toolbar } from '@material-ui/core';

import {
  AvatarStyled,
  UserInformationContainer,
  UserDescription,
  UserName,
  RatingStyled,
} from './styles';

interface UserInfomationProps {
  name: string;
  picture: string;
  rating: number;
  description?: string;
}

const UserInformation = ({
  picture,
  name,
  rating,
  description,
}: UserInfomationProps) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
