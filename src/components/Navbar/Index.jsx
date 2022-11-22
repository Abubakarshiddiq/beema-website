import React from 'react';

import styled from 'styled-components';
import { Logo } from '../Logo/Logo';
import { Button } from '../../components/Button/Index';
import { Marginer } from '../marginer';

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(199, 199, 199);
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Button small>Get Started</Button>
        <Marginer direction="horizontal" margin="row" />
        <LoginButton small>Login</LoginButton>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
