import axios from "axios";
import { apiUrl } from "../../config/constants";
import { fetchArtworks } from "../artworks/actions";
import { selectUser } from "../user/selectors";
import { showMessageWithTimeout } from "../appState/actions";
import { AppThunk } from "../types";
import {
  Artwork,
  ArtworkDetailsAction,
  ARTWORK_DETAILS_FETCHED,
  HEARTS_UPDATED,
  BID_POST_SUCCESS,
  ARTWORK_POST_SUCCESS,
} from "./types";

const artworkDetailsFetched = (artwork: Artwork): ArtworkDetailsAction => ({
  type: ARTWORK_DETAILS_FETCHED,
  payload: artwork,
});

const heartsUpdated = (artwork: Artwork): ArtworkDetailsAction => ({
  type: HEARTS_UPDATED,
  payload: artwork,
});

const bidPostSuccess = (bid: number): ArtworkDetailsAction => ({
  type: BID_POST_SUCCESS,
  payload: bid,
});

const artworkPostSuccess = (artwork: Artwork): ArtworkDetailsAction => ({
  type: ARTWORK_POST_SUCCESS,
  payload: artwork,
});

export const fetchArtworkById = (id: number): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/artworks/${id}`);
      dispatch(artworkDetailsFetched(response.data.artwork));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
};

export const updateNumberOfHearts = (id: number): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.patch(`${apiUrl}/artworks/${id}`);
      dispatch(heartsUpdated(response.data.artwork));
      dispatch(fetchArtworks());
    } catch (error) {
      console.log((error as Error).message);
    }
  };
};

export const postBid = (id: number, amount: number): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const user = selectUser(getState());
      const response = await axios.post(
        `${apiUrl}/artworks/${id}/bids`,
        {
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch(bidPostSuccess(response.data.newBid));
      dispatch(fetchArtworks());
    } catch (error) {
      console.log((error as Error).message);
    }
  };
};

export const postArtwork = (
  title: string,
  imageUrl: string,
  minimumBid: number
): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const user = selectUser(getState());
      const response = await axios.post(
        `${apiUrl}/artworks/`,
        {
          title,
          imageUrl,
          minimumBid,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch(artworkPostSuccess(response.data.artwork));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Artwork posted successfully",
          3000
        )
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };
};
