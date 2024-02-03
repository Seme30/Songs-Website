import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { fetchSongsRequest } from '../redux/actions/songsAction';
import { Logo, Nav, StyledHeader } from '../components/styles/Header.styled';
import GlobalStyles from '../components/styles/Global';
import logo from '../assets/favicon.png'
import { Link } from 'react-router-dom';
import { Container } from '../components/styles/Container.styled';
import { Button } from '../components/styles/Buttom.styled';
import SongCard from '../components/Card';
import Spinner from '../components/Spinner';
import { StatContainer } from '../components/StatComps/TotalStats';

const ShowSongs: React.FC = () => {

    const dispatch = useDispatch();
    const songsState = useSelector((state: RootState) => state.songs);
    const songs = songsState.data.data;
    const loading = songsState.loading;
    const error = songsState.error;
  
    useEffect(() => {
      dispatch(fetchSongsRequest(
      ));
    }, [dispatch]);
    
  return (
    <StyledHeader>
      <GlobalStyles />
      <Container>
        <Nav>
          <Link to='/'>
          <Logo src={logo}>
          </Logo>
          </Link>
        
          <Link to='/songs/create'>
          <Button>
              Add Song</Button>
          </Link>
        </Nav>
        {loading && <Spinner />}
        {error && <p>Error: {error}</p>}
        { songs && (songs.length > 0) &&
        <StatContainer>
          {songs.map((item, index) => {
            return (
                <SongCard song={item} key={index} />
            )
          }
          )}
        </StatContainer>    
        }
        {
          songs && (songs.length == 0) &&
          <h1>No Songs</h1>
        }
      </Container>
    </StyledHeader>
  )
}

export default ShowSongs