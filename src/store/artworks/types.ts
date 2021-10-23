import { Artwork } from "../artworkDetails/types";

export type ArtworksState = {
  artworks: Artwork[];
};

export const FETCH_ARTWORKS_SUCCESS = "FETCH_ARTWORKS_SUCCESS";

type FetchArtworksSuccessAction = {
  type: typeof FETCH_ARTWORKS_SUCCESS;
  payload: {};
};

export type ArtworksAction = FetchArtworksSuccessAction;
