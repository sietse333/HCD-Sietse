
const maandsection = document.getElementById("maandsection")


 document.getElementById('maandlink').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        maandsection.classList.add('zichtbaar')
        maandsection.classList.remove('onzichtbaar')
        document.getElementById('terugknop').focus()
    }
  });
  
  document.getElementById('terugknop').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        maandsection.classList.add('onzichtbaar')
        maandsection.classList.remove('zichtbaar')
    }
  });

//   Functions maken voor maanden