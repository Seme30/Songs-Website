import {  GenreStats } from '../../models/Stat';
import { StatContainer } from './TotalStats';


const GenreStats = ({ genreStats }: {genreStats: GenreStats[]}) => {
  return (
    <StatContainer>
      <h2>Genre Stats</h2>
      <ul>
        {genreStats.map((genre) => (
          <li key={genre._id}>
            {genre._id}: {genre.count}
          </li>
        ))}
      </ul>
    </StatContainer>
  );
};

export default GenreStats;
