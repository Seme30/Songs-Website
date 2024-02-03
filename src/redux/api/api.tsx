import axios, { AxiosResponse } from 'axios';
import { NewSong, Song, SongResponse } from '../../models/Song';


const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  adapter: [
    "xhr",
    "http"
  ]
});


export const api = {
  fetchSongs: async (): Promise<SongResponse[]> => {
    try {
      const response: AxiosResponse<SongResponse[]> = await instance.get('/songs');
      // console.log("api", response.data);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
  },

  getSong: async (id: string): Promise<Song> => {
    try {
      const response: AxiosResponse<Song> = await instance.get(`/songs/${id}`);
      // console.log("api", response.data);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
  },

  addSong: async (newSong: { title: string; artist: string; album?: string; genre?: string }): Promise<void> => {
    try {
      const response = await instance.post('/songs', newSong);
      // console.log("api", response.data);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  updateSong: async (id: string, updatedSong: NewSong): Promise<SongResponse> => {
    try {
      const response: AxiosResponse<SongResponse> = await instance.put(`/songs/${id}`, updatedSong);
      // console.log("api", response.data);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  deleteSong: async (id: string): Promise<Song> => {
    try {
      const response: AxiosResponse<Song> = await instance.delete(`/songs/${id}`);
      // console.log("api", response.data);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
  },


  

};


