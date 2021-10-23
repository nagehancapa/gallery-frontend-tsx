import { ArtworksState, ArtworksAction, FETCH_ARTWORKS_SUCCESS } from "./types";

const initialState: ArtworksState = [];

export default function artworksReducer(
  state = initialState,
  action: ArtworksAction
) {
  switch (action.type) {
    case FETCH_ARTWORKS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}
