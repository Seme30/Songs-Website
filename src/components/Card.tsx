import React from 'react';
import styled from 'styled-components';
import { CardContainer, DetailsContainer } from './styles/CardContainer.styled';
import { Button, ButtonContainer } from './styles/Buttom.styled';
import { Link } from 'react-router-dom';
import { Song } from '../models/Song';
import { useDispatch } from 'react-redux';
import { deleteSongRequest, fetchSongsRequest } from '../redux/actions/songsAction';

interface SongCardProps {
  song: Song;
}

const Title = styled.h3`
  margin-bottom: 8px;
  color: #333;
`;

const Text = styled.p`
  margin-bottom: 4px;
  color: #666;
`;

const SongCard: React.FC<SongCardProps> = ({ song }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this song?');

    if (confirmDelete) {
      dispatch(deleteSongRequest(song._id));
      dispatch(fetchSongsRequest());
    }
  };

  return (
    <CardContainer>
      <DetailsContainer>
        <Title>{song.title}</Title>
        <Text>Artist: {song.artist}</Text>
        <Text>Album: {song.album || 'N/A'}</Text>
        <Text>Genre: {song.genre || 'N/A'}</Text>
      </DetailsContainer>
      <ButtonContainer>
        <Link to={`/songs/edit/${song._id}`}>
        <Button>
          Edit
        </Button>
        </Link>
        <Button onClick={handleDelete}>
          Delete
        </Button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default SongCard;
