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
  const artworkCollection: ArtworksState = useSelector(selectArtworks);

  useEffect(() => {
    if (!artworkCollection.length) {
      dispatch(fetchArtworks());
    }
  }, [dispatch, artworkCollection.length]);

  return (
    <Container>
      <Jumbotron>
        <h1>Artworks</h1>
      </Jumbotron>
      {artworkCollection.map((artwork: Artwork) => {
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
