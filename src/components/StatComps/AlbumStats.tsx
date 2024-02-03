import { AlbumStats } from '../../models/Stat';
import { StatContainer } from './TotalStats';


const AlbumStats = ({ albumStats }: {albumStats: AlbumStats[]}) => {
  return (
    <StatContainer>
      <h2>Album Stats</h2>
      <ul>
        {albumStats.map((album) => (
          <li key={album._id}>
            {album._id}: {album.songs.length} songs
          </li>
        ))}
      </ul>
    </StatContainer>
  );
};

export default AlbumStats;
