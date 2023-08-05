import createTrackCard from './TrackCard.js';

const displayTracks = (tracks) => {
  const trackContainer = document.querySelector('.tracks');
  trackContainer.innerHTML = '';

  tracks.forEach((track) => {
    const trackCard = createTrackCard(track);
    trackContainer.appendChild(trackCard);
  });
};

export default displayTracks;
