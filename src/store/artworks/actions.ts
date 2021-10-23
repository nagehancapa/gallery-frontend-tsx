import { apiUrl } from "../../config/constants";
import axios from "axios";
import { ArtworksState, ArtworksAction, FETCH_ARTWORKS_SUCCESS } from "./types";
import { AppThunk } from "../types";

const fetchArtworksSuccess = (artworks: ArtworksState): ArtworksAction => ({
  type: FETCH_ARTWORKS_SUCCESS,
  payload: artworks,
});

export const fetchArtworks = (): AppThunk => {
  return async (dispatch, getState) => {
    try {
      console.log("inside artwork actions fetch artworks");
      const response = await axios.get(`${apiUrl}/artworks`);
      console.log("response", response);
      dispatch(fetchArtworksSuccess(response.data.artworks));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
};
