import { useEffect, useState } from 'react';
import { ErrorMessage, FormContainer, Input, Label } from './styles/Form.styled';
import { Button } from './styles/Buttom.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { getSongRequest } from '../redux/actions/songsAction';

interface EditSongFormProps {
  id: string | undefined,
  onEditSong: (newSong: any) => void;
}



const EditSongForm: React.FC<EditSongFormProps> = ({id, onEditSong }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [album, setAlbum] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const song = useSelector((state: RootState) => state.songs.data.data[0]);

  useEffect(() => {
    if (id) {
      dispatch(getSongRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    // Update local state with song data when it changes
    if (song) {
      setTitle(song.title);
      setArtist(song.artist);
      setGenre(song.genre? song.genre :"");
      setAlbum(song.album? song.album: "")
    }
  }, [song]);

  const handleEditSong = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !artist) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    onEditSong({
      title,
      artist,
      genre,
      album
    });

    setTitle('');
    setArtist('');
    setGenre('');
    setAlbum('');
  };

  return (
    <FormContainer onSubmit={handleEditSong}>
      <Label>Title:</Label>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the title"
      />

      <Label>Artist:</Label>
      <Input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Enter the artist"
      />

    <Label>Album:</Label>
      <Input
        type="text"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        placeholder="Enter the album"
      />

      <Label>Genre:</Label>
      <Input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Enter the genre"
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Button type="submit">Update Song</Button>
    </FormContainer>
  );
};

export default EditSongForm;
