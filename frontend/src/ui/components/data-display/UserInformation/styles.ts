import { Avatar, Rating } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';

export const UserInformationContainer = styled('div')`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'avatar name'
    'avatar rating'
    'avatar description';
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + ' ' + theme.spacing(2)};
  align-items: center;
  background-color: ${({ theme }) => theme.palette.grey[50]};
`;

export const UserName = styled('div')`
  font-weight: bold;
  grid-area: name;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserDescription = styled('div')`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const RatingStyled = styled(Rating)`
  font-size: 14px;
  grid-area: rating;
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;
