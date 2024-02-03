import React from 'react';
import { Container } from '../components/styles/Container.styled';
import GlobalStyles from '../components/styles/Global';
import { Logo, Nav, StyledHeader } from '../components/styles/Header.styled';
import { Button } from '../components/styles/Buttom.styled';
import logo from '../assets/favicon.png'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

const Home : React.FC = () => {

  return (
    <StyledHeader>
      <GlobalStyles />
      <Container>
        <Nav>
          <Logo src={logo}>
          </Logo>

          <div>
          <Link to='/songs'>
          <Button>Available Songs</Button>
          </Link>
        
          <Link to='/songs/create'>
          <Button>Add Song</Button>
          </Link>
          </div>
        </Nav>

        <Dashboard />

        
      </Container>
    </StyledHeader>
  );
}


export default Home

