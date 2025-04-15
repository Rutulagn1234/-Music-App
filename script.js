const playlistLinks = {
    happy: 'https://www.youtube.com/embed/ZbZSe6N_BXs',
    sad: 'https://www.youtube.com/embed/uelHwf8o7_U',
    chill: 'https://www.youtube.com/embed/5qap5aO4i9A',
    energetic: 'https://www.youtube.com/embed/fLexgOxsZu0'
  };
  
  const buttons = document.querySelectorAll('button[data-mood]');
  const playerContainer = document.getElementById('player-container');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mood = button.dataset.mood;
      document.body.className = mood; // changes background color
      playerContainer.innerHTML = `
        <iframe width="560" height="315"
          src="${playlistLinks[mood]}"
          title="${mood} playlist"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      `;
    });
  });
  