import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";
import { Logo, Nav, StyledHeader } from "../components/styles/Header.styled";
import logo from '../assets/favicon.png'
import EditSongForm from "../components/EditSongForm";
import { useDispatch } from "react-redux";
import { fetchSongsRequest, updateSongRequest } from "../redux/actions/songsAction";

const EditSong: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const editHandler = (updatedSong: { title: string; artist: string; genre: string }) => {
    if(id){
      dispatch(updateSongRequest(id, updatedSong));
      console.log("Song edited successfully!");
      dispatch(fetchSongsRequest())
      navigate('/songs')
    }
  };


  return (
    <StyledHeader>
      <GlobalStyles />
      <Container>
        <Nav>
          <Link to='/'>
            <Logo src={logo} />
          </Link>
        </Nav>
        <EditSongForm onEditSong={editHandler} id={id} />
      </Container>
    </StyledHeader>
  );
}

export default EditSong;
