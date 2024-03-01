function openOverlay(imageElement) {
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlargedImage');
    
    const imageUrl = imageElement.src;
    enlargedImage.src = imageUrl;
    
    overlay.style.display = 'flex';
  }
  
  
  document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) {
      this.style.display = 'none';
    }
  });
  