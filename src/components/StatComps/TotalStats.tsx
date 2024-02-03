import styled from 'styled-components';
import { TotalStats } from '../../models/Stat';

export const StatContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 90%;
  height: 90%;
  background: rgb(187, 201, 203);
`;

const TotalStats = ({ totalStats } : {totalStats : TotalStats}) => {
  return (
    <StatContainer>
      <h2>Total Stats</h2>
      <p>Total Songs: {totalStats.totalSongs}</p>
      <p>Total Artists: {totalStats.totalArtists}</p>
      <p>Total Albums: {totalStats.totalAlbums}</p>
      <p>Total Genres: {totalStats.totalGenres}</p>
    </StatContainer>
  );
};

export default TotalStats;
