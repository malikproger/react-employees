import { Header } from '../';
import { LayoutContentStyled, LayoutMainStyled } from './styled';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <LayoutMainStyled>
      <Header />
      <LayoutContentStyled>{children}</LayoutContentStyled>
    </LayoutMainStyled>
  );
};
