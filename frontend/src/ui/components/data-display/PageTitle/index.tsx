import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from './styles';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
