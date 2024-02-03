import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AddSong from './pages/AddSong'
import EditSong from './pages/EditSong'
import ShowSongs from './pages/ShowSongs'

function App() {

  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/songs' element = { <ShowSongs />}/>
        <Route path='/songs/create' element={<AddSong />}/>
        <Route path='/songs/edit/:id' element={<EditSong />}/>
    </Routes>
  )
}

export default App