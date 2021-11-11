import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchArtworks } from "../../store/artworks/actions";
import { selectArtworks } from "../../store/artworks/selectors";
import ArtworkCard from "../../components/ArtworkCard";
import { ArtworksState } from "../../store/artworks/types";
import { Artwork } from "../../store/artworkDetails/types";

import "./home.scss";

export default function HomePage() {
  const dispatch = useDispatch();
  const artworkCollection: ArtworksState = useSelector(selectArtworks);

  useEffect(() => {
    if (!artworkCollection.length) {
      dispatch(fetchArtworks());
    }
  }, [dispatch, artworkCollection.length]);

  return (
    <Container className="ArtworkList">
      <Jumbotron>
        <h1>Artworks</h1>
      </Jumbotron>
      <ul className="Artworks">
        {artworkCollection.map((artwork: Artwork) => {
          return (
            <li className="Artwork" key={artwork.id}>
              <ArtworkCard
                key={artwork.id}
                id={artwork.id}
                imageUrl={artwork.imageUrl}
                title={artwork.title}
                hearts={artwork.hearts}
                numberOfBids={artwork.bids!.length}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
