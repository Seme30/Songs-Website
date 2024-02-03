import axios, { AxiosResponse } from 'axios';
import { TotalStats, GenreStats, ArtistStats, AlbumStats } from '../../models/Stat';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  adapter: [
    "xhr",
    "http"
  ]
});


export const statsApi = {
  fetchTotalStats: async (): Promise<TotalStats> => {
    try {
      const response: AxiosResponse<TotalStats> = await instance.get('/stats/total');
      // console.log("total")
      // console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  fetchGenreStats: async (): Promise<GenreStats[]> => {
    try {
      const response: AxiosResponse<GenreStats[]> = await instance.get('/stats/genre');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  fetchArtistStats: async (): Promise<ArtistStats[]> => {
    try {
      const response: AxiosResponse<ArtistStats[]> = await instance.get('/stats/artist');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  fetchAlbumStats: async (): Promise<AlbumStats[]> => {
    try {
      const response: AxiosResponse<AlbumStats[]> = await instance.get('/stats/album');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
