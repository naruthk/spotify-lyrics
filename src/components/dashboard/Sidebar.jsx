import React, { useContext, useState } from 'react';

import { PlayerContext } from "../player/PlayerContext";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const { activeSong } = useContext(PlayerContext);

  if (!activeSong) return (
    <div className={styles.container}>
      <section>
        <h1>Nothing is being played right now.</h1>
      </section>
    </div>
  );

  const { album, artists, songName } = activeSong;

  return (
    <div className={styles.container}>
      {album && album.images && (
        <img
          className={styles.albumCover}
          src={album.images[0]}
          alt={songName}
        />
      )}
      <div className={styles.artistsInformation}>
        <h1>{songName}</h1>
        <h2>
          {`by artist${artists && artists.length > 1 && "s" || ""}`}
        </h2>
        <ul>
          {artists.map(artist => (
            <li>
              <h3 onClick={() => setSelectedArtist(artist)}>
                {artist.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
