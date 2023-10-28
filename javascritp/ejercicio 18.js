window.addEventListener('mousedown', function(event) {
    switch (event.type) {
      case 'mousedown':
        document.getElementById('info').style.backgroundColor = '#FFFFCC';
        break;
      case 'keydown':
        document.getElementById('info').style.backgroundColor = '#CCE6FF';
        break;
    }
  });
  