import { ArtworksState, ArtworksAction, FETCH_ARTWORKS_SUCCESS } from "./types";

const initialState: ArtworksState = [];

export default function artworksReducer(
  state = initialState,
  action: ArtworksAction
) {
  console.log("initialstate", state);
  switch (action.type) {
    case FETCH_ARTWORKS_SUCCESS:
      console.log("payload", action.payload);
      return [...action.payload];
    default:
      return state;
  }
}
