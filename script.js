const maandsection = document.getElementById("maandsection");
const dagsection = document.getElementById("dagsection");
const shia = new Audio('/mp3/shia.mp3');
const ding = new Audio('/mp3/ding.mp3');
shia.volume = 0.3;
const vandaagarticle = document.getElementById("vandaagarticle")
const maanden = ["januari", "februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
const maandtag = document.getElementById("maandtag")
const weken = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
const weekspan = document.getElementById("weekspan")
const oefeninginput = document.getElementById("oefeninginput")
var a = 0
weekspan.innerText = weken[a];
var i = parseInt(weekspan.innerText)


document.getElementById('txtVal').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    var txtVal = document.getElementById('txtVal').value,
    listNode = document.getElementById('list')
    liNode = document.createElement("LI")
    liNode.setAttribute("tabIndex", "0")
    txtNode = document.createTextNode(txtVal);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
    const origAudio = new Audio('/mp3/ding.mp3');
    const newAudio = origAudio.cloneNode()
    newAudio.volume = 0.3;
    newAudio.play()


  }
});


// vorige knop
document.querySelectorAll(".vorige").forEach(i => i.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (i < weken.length) {
      weekspan.innerText = weken[i];
      i = (i < 1) ? 11 : i - 1;
    } else {
      i = (weken.length - 1)
      weekspan.innerText = weken[i];
    }
  }
}))

// volgende knop
document.querySelectorAll(".volgende").forEach(i => i.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (i < weken.length) {
      weekspan.innerText = weken[i];
      i = i + 1;
    } else {
      i = 0
      weekspan.innerText = weken[i];
    }
  }
}))

// open uitgebreid vandaag scherm
document.getElementById('vandaag').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    dagsection.classList.add('zichtbaar')
    dagsection.classList.remove('onzichtbaar')
    document.getElementById('terugknop2').focus()

  }
});

document.getElementById('terugknop2').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    dagsection.classList.add('onzichtbaar')
    dagsection.classList.remove('zichtbaar')
  }
  document.getElementById('skiplink').focus()
});

document.getElementById('terugknop3').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    dagsection.classList.add('onzichtbaar')
    dagsection.classList.remove('zichtbaar')
  }
  document.getElementById('skiplink').focus()
});

// Open maand menu
document.getElementById('maandlink').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    maandsection.classList.add('zichtbaar')
    maandsection.classList.remove('onzichtbaar')
    document.getElementById('terugknop').focus()
  }
});

// terugknop voor maand menu
document.getElementById('terugknop').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    maandsection.classList.add('onzichtbaar')
    maandsection.classList.remove('zichtbaar')
  }
  document.getElementById('skiplink').focus()
});

// Knop om shia te laten praten
document.getElementById('shialink').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    shia.play();

  }
});