
const ding = new Audio('/mp3/ding.mp3');

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
      console.log("iets")
    }
  });