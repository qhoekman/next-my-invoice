import styled from '@emotion/styled';

import { CompanyInfo } from './company';
import { CustomerInfo } from './customer';
import { Details } from './details';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

const Info = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
}));

const LogoWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

const Logo = styled('img')(({ theme }) => ({
  padding: theme.padding[3],
  width: theme.width[16],
  height: theme.height[16],
  display: 'block'
}));

export const Header = ({ children }) => (
  <Container>
    <LogoWrapper>
      <Logo src="http://localhost:3000/static/logo.png" />
      <CompanyInfo />
    </LogoWrapper>
    <Info>
      <CustomerInfo />
      <Details />
    </Info>
  </Container>
);
