const fetchSpotifyData = async () => {
    const url =
      'https://spotify23.p.rapidapi.com/album_tracks/?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0e86196495msh8ee08517b899577p1093fajsnbf3eae91bef4',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data.data.album.tracks.items;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  export default fetchSpotifyData;
  