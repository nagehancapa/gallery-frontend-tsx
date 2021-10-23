export type Bid = {
  id: number;
  email: string;
  amount: number;
};

export type Artwork = {
  id: number;
  title: string;
  imageUrl: string;
  hearts: number;
  minimumBid?: number;
  bids?: Bid[];
  numberOfBids?: number;
};

export const ARTWORK_DETAILS_FETCHED = "ARTWORK_DETAILS_FETCHED";
export const HEARTS_UPDATED = "HEARTS_UPDATED";
export const BID_POST_SUCCESS = "BID_POST_SUCCESS";
export const ARTWORK_POST_SUCCESS = "ARTWORK_POST_SUCCESS";

type ArtworkDetailsFetchedAction = {
  type: typeof ARTWORK_DETAILS_FETCHED;
  payload: {};
};

type HeartsUpdatedAction = {
  type: typeof HEARTS_UPDATED;
  payload: {};
};

type BidPostSuccessAction = {
  type: typeof BID_POST_SUCCESS;
  payload: number;
};

type ArtworkPostSuccessAction = {
  type: typeof ARTWORK_POST_SUCCESS;
  payload: {};
};

export type ArtworkDetailsAction =
  | ArtworkDetailsFetchedAction
  | HeartsUpdatedAction
  | BidPostSuccessAction
  | ArtworkPostSuccessAction;
