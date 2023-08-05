const createTrackCard = (track) => {
    const card = document.createElement('div');
    card.classList.add('track-card');
  
    const imageUrl =
      track?.track?.album?.images?.length > 0
        ? track.track.album.images[0].url
        : 'placeholder.jpg';
  
    const artists =
      track?.track?.artists?.items.map((artist) => artist.profile.name).join(', ') ||
      'Unknown Artist';
  
    const album = track?.name || 'Unknown Album';
  
    const trackName = track?.track?.name || 'Unknown Track';
  
    const spotifyLink = track?.track?.uri || '#';
  
    const duration = document.createElement('p');
    const totalMilliseconds = track.track.duration.totalMilliseconds;
    const minutes = Math.floor(totalMilliseconds / 60000);
    const seconds = ((totalMilliseconds % 60000) / 1000).toFixed(0);
    duration.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = trackName;
  
    const name = document.createElement('h2');
    name.textContent = trackName;
  
    const artistElement = document.createElement('p');
    artistElement.textContent = `Artists: ${artists}`;
  
    const albumElement = document.createElement('p');
    albumElement.textContent = `Album: ${album}`;
  
    const spotifyLinkElement = document.createElement('a');
    spotifyLinkElement.href = spotifyLink;
    spotifyLinkElement.target = '_blank';
    spotifyLinkElement.textContent = 'Listen on Spotify';
  
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(artistElement);
    card.appendChild(albumElement);
    card.appendChild(duration);
    card.appendChild(spotifyLinkElement);
  
    return card;
  };
  
  export default createTrackCard;
  