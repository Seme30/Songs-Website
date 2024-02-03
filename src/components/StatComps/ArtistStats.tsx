import { ArtistStats } from '../../models/Stat';
import { StatContainer } from './TotalStats';

const ArtistStats = ({ artistStats }: {artistStats: ArtistStats[]}) => {
  return (
    <StatContainer>
      <h2>Artist Stats</h2>
      <ul>
        {artistStats.map((artist) => (
          <li key={artist.artist}>
            {artist.artist}: {artist.totalSongs} songs in {artist.totalAlbums} albums
          </li>
        ))}
      </ul>
    </StatContainer>
  );
};

export default ArtistStats;
