import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTotalStatsRequest,
  fetchGenreStatsRequest,
  fetchArtistStatsRequest,
  fetchAlbumStatsRequest,
} from '../redux/actions/statsAction';
import { RootState } from '../redux/store/store';
import TotalStats from '../components/StatComps/TotalStats';
import GenreStats from '../components/StatComps/GenreStats';
import ArtistStats from '../components/StatComps/ArtistStats';
import AlbumStats from '../components/StatComps/AlbumStats';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;



const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTotalStatsRequest());
    dispatch(fetchGenreStatsRequest());
    dispatch(fetchArtistStatsRequest());
    dispatch(fetchAlbumStatsRequest());
  }, [dispatch]);


  const totalStats = useSelector((state: RootState) => state.stats.totalStats);
  const genreStats = useSelector((state: RootState) => state.stats.genreStats);
  const artistStats = useSelector((state: RootState) => state.stats.artistStats);
   const albumStats = useSelector((state: RootState) => state.stats.albumStats);

  return (
    <>
        <DashboardContainer>
      <TotalStats totalStats={totalStats} />
      <GenreStats genreStats={genreStats} />
      <ArtistStats artistStats={artistStats} />
      <AlbumStats albumStats={albumStats} /> {/* Pass album stats to the new component */}
    </DashboardContainer>
    </>

  );
};

export default Dashboard;
