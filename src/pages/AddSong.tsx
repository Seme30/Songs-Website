import AddSongForm from "../components/AddSongForm";
import { Container } from "../components/styles/Container.styled"
import GlobalStyles from "../components/styles/Global"
import { Logo, Nav, StyledHeader } from "../components/styles/Header.styled"
import logo from '../assets/favicon.png'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSongRequest, fetchSongsRequest } from "../redux/actions/songsAction";
import { NewSong } from "../models/Song";


const AddSong: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addHandler = (newSong: NewSong) => {
      dispatch(addSongRequest(newSong));
      console.log("Song added successfully!");
      dispatch(fetchSongsRequest())
      navigate('/songs')
  }
    return (
      <StyledHeader>
        <GlobalStyles />
        <Container>
        <Nav>
          <Link to='/'><Logo src={logo}>
          </Logo></Link>
        </Nav>
            <AddSongForm onAddSong={addHandler}/>
        </Container>
      </StyledHeader>
    );
  }
  
  export default AddSong;

