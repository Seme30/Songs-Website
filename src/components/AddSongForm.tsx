import { useState } from 'react';
import { ErrorMessage, FormContainer, Input, Label } from './styles/Form.styled';
import { Button } from './styles/Buttom.styled';

interface AddSongFormProps {
  onAddSong: (newSong: any) => void;
}



const AddSongForm: React.FC<AddSongFormProps> = ({ onAddSong }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [album, setAlbum] = useState('');
  const [error, setError] = useState('');

  const handleAddSong = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !artist) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    onAddSong({
      title,
      artist,
      album,
      genre,
    });

    setTitle('');
    setAlbum('');
    setArtist('');
    setGenre('');
  };

  return (
    <FormContainer onSubmit={handleAddSong}>
      <Label>Title:*</Label>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the title"
      />

      <Label>Artist:*</Label>
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

      <Button type="submit">Add Song</Button>
    </FormContainer>
  );
};

export default AddSongForm;
