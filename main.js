import fetchSpotifyData from './DataFetcher.js';
import displayTracks from './TrackList.js';

const main = async () => {
  const tracks = await fetchSpotifyData();
  displayTracks(tracks);
};

main();
