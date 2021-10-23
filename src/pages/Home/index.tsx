import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchArtworks } from "../../store/artworks/actions";
import { selectArtworks } from "../../store/artworks/selectors";
import ArtworkCard from "../../components/ArtworkCard";
import { ArtworksState } from "../../store/artworks/types";
import { Artwork } from "../../store/artworkDetails/types";

export default function HomePage() {
  const dispatch = useDispatch();
  const artworkState: ArtworksState = useSelector(selectArtworks);

  useEffect(() => {
    console.log("homepage useeffect");
    if (!artworkState.artworks.length) {
      console.log("homepage if", artworkState.artworks.length);
      dispatch(fetchArtworks());
    }
  }, [dispatch, artworkState.artworks]);

  console.log("type of artworkState", typeof artworkState);
  console.log("artworkState[0]", artworkState[0]);

  return (
    <Container>
      <Jumbotron>
        <h1>Artworks</h1>
      </Jumbotron>

      {artworkState.artworks.map((artwork: Artwork) => {
        return (
          <ArtworkCard
            key={artwork.id}
            id={artwork.id}
            imageUrl={artwork.imageUrl}
            title={artwork.title}
            hearts={artwork.hearts}
            numberOfBids={artwork.bids!.length}
          />
        );
      })}
    </Container>
  );
}
