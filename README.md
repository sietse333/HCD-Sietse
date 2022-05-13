
## Week 1

Eerst begon ik met werken aan de opdracht voor merijn. Ik was bezig met een trein reis planner maken en had al de basis met wat javascript neergezet.

![oud project](https://user-images.githubusercontent.com/43068118/164673914-8ee279fd-48ac-4f9c-9456-390c0223df0c.png)

Maar dat heb ik moeten wegdoen omdat ik de test tijden van merijn niet kon redden. Dus ik heb geswitched met tim en nu doe ik het project met Larissa. Eerst heb ik research gedaan hoe je een screenreader kan gebruiken. Ik bevond dat een table navigeren heel moeilijk was met een screenreader. Dus ik had een stuk javascript geschreven waar je met je pijltjes toetsen door een table heen kan navigeren.

```
function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '87') {
    // up arrow
    var idx = start.cellIndex;
    var nextrow = start.parentElement.previousElementSibling;
    if (nextrow != null) {
      var sibling = nextrow.cells[idx];
      dotheneedful(sibling);
    }
  } else if (e.keyCode == '83') {
    // down arrow
    var idx = start.cellIndex;
    var nextrow = start.parentElement.nextElementSibling;
    if (nextrow != null) {
      var sibling = nextrow.cells[idx];
      dotheneedful(sibling);
    }
  } else if (e.keyCode == '65') {
    // left arrow
    var sibling = start.previousElementSibling;
    dotheneedful(sibling);
  } else if (e.keyCode == '68') {
    // right arrow
    var sibling = start.nextElementSibling;
    dotheneedful(sibling);
  }
}
```

Alleen dit werkte niet met een screenreader want die heeft zijn eigen focus. Toen kwam ik erachter dat een screenreader zijn eigen key commands heeft om door een table heen te navigeren met CTRL + ALT + pijltjes toetsen. Dat vond ik in deze video:
https://www.youtube.com/watch?v=Vsj1MIg-gf8&t=9s&ab_channel=CUBoulderOIT

Door deze video zag ik hoe je goed een table kon gebruiken met een screenreader. Ik heb de code netjes gemaakt voor screenreaders maar de windows screenreader leest een table niet zoals ik wil. Namelijk eerst de header dan de linker header en dan pas de cell voorlezen. Nu leest het gewoon op welke cell nummer het staat. 

**Het interview**

Het eerste interview was vooral informatie krijgen over hoe zij een screenreader gebruikt en hoe zij een schema wilt hebben. Het was heel leuk om met haar kennis te maken. Eerst hadden we het even over het leven van haar en hoe zij omgaat met zon druk leven terwijl je blind bent. Daarna begonnen wij met een vragen lijst die we hadden samengesteld. Hier zijn de aantekeningen die ik heb genomen tijdens het gesprek en tijdens het testen van de projecten van meerdere klasgenoten:

- Kan soort van kleuren zien. Misschien een licht accentje geven
Braile bord niet veel gebruikt
- niet een sierlijk of hakerig font. Maat het onnodig onduidelijk
- 6 dagen in de week . soms 2 dagen per dag sport zij
- training peaks wordt nu gebruikt voor schemas.
- 1 week tot in detail uitgeschreven.
- Training die ze heeft gedaan uitgeschreven onderaan?
- snel informatie krijgen
- Eerst menu voor baan of weg seizoen
- oranje beste kleur!
- Ze gebruikt jaws. claire
- bovenaan een balk waar je kan zoeken naar balk. En het eerste resultaat dat je krijgt op je home is de dag vandaag
- op h klikken voor koppen en i voor lijsten. p voor paragraphs. t voor tabel.
- testen firefox
- skip link om naar content te gaan

Jammergenoeg hebben we nog niet een schema gekregen die zijn gebruikt. Maar daar ging zij gelukkig naar zoeken. Verder was dit interview heel leerzaam en kan ik zeker verder volgende week.

## Week 2

Deze week gewerkt aan mijn pagina en zoveel mogelijk feedback verwerkt van de tests. Ik heb een rooster gemaakt waar alles groot is met oranje focus states. Ook is de achtergrond zwart want dat oogt voor haar fijner. Aangezien zij door de pagina heen tabt heb ik op elk element een focus state gemaakt zodat ze kan zien waar ze op de pagina is. Ze zei ook dat  ze skiplinks heel fijn vond. Een skiplink is een vaak onzichtbare link die boven aan de pagina staat. Al zou je dus tabben door de pagina heen is die link het eerste dat je tegenkomt. Wat een skiplink doet is het verplaatst je meteen naar de main content van de pagina. Dit is heel handig al navigeer je de pagina met alleen tab want dan hoef je niet 100 keer te klikken voordat je bent waar je wilt. Zij wilt ook graag 1 week uitgeschreven hebben in detail en de maanden vaag dus dat heb ik ook toegepast. 

### De test
Testen ging heel goed. Ik heb informatie van mijn eigen tests en die van me medestudenten genoteerd. Larissa was erg positief over mijn website. Ik had haar een beetje laten rond navigeren en heb haar ook de taak gegeven om een bepaalde dag te zoeken en het schema te lezen. Dit ging allemaal erg goed. Wat problemen die ik gevonden heb was dat de link naar vandaag niet helemaal goed werkt met een screenreader. Ook springt het niet helemaal goed dus daar moet ik even naar kijken. 

### notities

Ze wilt graag heel snel de informatie die ze zoekt. En dat is meestal het sportschema van vandaag dus ik heb een link gemaakt die haar direct brengt naar vandaag om haar tijd te besparen. 
![voorbeeld](https://user-images.githubusercontent.com/43068118/167809083-e6dd8f2d-ec64-4aa1-815b-b40fa61278c3.png)

## week 3 

Ik heb dit keer het gesprek met Larissa op de woensdag middag. Voor het gesprek heb ik snel nog wat feedback van de vorige sessie toegevoegd in mijn app. Ik heb nu een knop waar je naar een scherm gestuurd wordt waar je uit de maanden kan kiezen. 

![fsdafsa](https://user-images.githubusercontent.com/43068118/168148602-a027be7e-c844-4765-8447-61cbb7b7aa7d.png)

Ook heb ik nog wat kleine aanpassingen gemaakt zodat mijn screenreader goed tabbbed door te pagina heen gaat want het werkte niet goed bij mijn skiplink. Hierna heb ik met mijn mede studenten getest met larissa samen. 

### De test

Ik vond dat Larissa wel op een punt kwam met veel studenten dat ze er wel tevreden mee is. Er waren wel wat belangrijke punten die ik nog hebt megenomen. Larissa wilt graag een wekelijks overzicht hebben waar je kan zien wat er globaal getrained moet worden MET de tijden erbij. Vervolgens moet je op de dag kunnen klikken en daar een uitgebreid schema zien van wat voor oefeningen zij moet doen. Ook wou ze graag daar zelf oefeningen bij kunnen voegen. Na de tests kreeg ik ook nog te horen dat ze het fijn zou vinden als je bij het maanden schemak de wk`s kan zien die gaan gebeuren. 

### Het toevoegen

Eerst ging ik werken aan iets leuks in de pagina. Larissa liet vaak weten dat ze nooit echt zin had om te trainen. Dus ik heb boven aan de pagina een button neergezet die een voiceclip van shia labeouf afspeeld die just do it roept.  

![aaaaa](https://user-images.githubusercontent.com/43068118/168155274-6c6b9f26-83a1-44aa-861d-b439396ec06b.png)

Daarna ben ik gaan werken aan het uitgebreide rooster. Ik heb een ul gemaakt waar de li`tjes het schema staat. Daarna heb ik een invoerveld gemaakt waar je je eigen oefeningen kan typen en die versturen naar de li. Dat heb ik op deze manier gedaan.

```
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
```

Wanneer je in het invoerveld op enter klikt komt er dus een oefening bij. Maar al ben je blind of extreem slecht ziend in Larissas geval heb je dat helemaal niet door. Dus ik heb een geluidje toegevoegd elke keer al voeg je iets toe zodat zij daar op de hoogte van is. Maar al voeg je te snel iets toe dan zou hij niet twee keer laten weten dat je iets toegevoegd heb. Dat heb ik op deze manier opgelost.
```
 const origAudio = new Audio('/mp3/ding.mp3');
 const newAudio = origAudio.cloneNode()
```
Dit stukje code zorgt ervoor dat het geluid gecloned wordt en over elkaar heen gespeeld mag worden. Ook moest ik ervoor zorgen dat de li`tjes tabbable waren en dat heb ik op deze manier gedaan.
```
liNode.setAttribute("tabIndex", "0")
```

Ook heb ik gewerkt aan de knoppen zodat je door de weken heen kan klikken. Hier had ik helaas geen tijd meer voor om het te fixen dus het werkt niet he.....
```
// vorige knop
document.querySelectorAll(".vorige").forEach(i => i.addEventListener('click', function () {
    if (i < weken.length) {
      weekspan.innerText = weken[i];
      i = (i < 1) ? 11 : i - 1;
    } else {
      i = (weken.length - 1)
      weekspan.innerText = weken[i];
    }
}))

// volgende knop
document.querySelectorAll(".volgende").forEach(i => i.addEventListener('click', function () {
    if (i < weken.length) {
      weekspan.innerText = weken[i];
      i = i + 1;
    } else {
      i = 0
      weekspan.innerText = weken[i];
    }
}))
```


En toen kwam het punt waar het allemaal fout ging. Ik ging het (iets telaat) testen met mijn screenreader. Ik gebruikte al de hele tijd puur mijn keyboard om te navigeren dus ik dacht niet dat het zo snel kon breken maar toch wel. Ik maakte gebruik van sections die zichtbaar werden al kliktje je op een knop. Dit werkt niet met een screenreader want het blijft gefocust op wat er achter de section staat. Niet alleen dat al mijn knoppen werken wel als mijn screenreader uitstaat maar niet al doe je het aan. Het eerste probleem was wel duidelijk waarom het niet werkten. Ik heb dit opgelost door 3 verschillende html bestanden te gebruiken voor de verschillende states. En ik maak gebruik van links die je rond sturen over de pagina. Dit liep me nog wel soepel af maar waar ik echt even op vast zat was de knoppen. 

Ik kon maar niet vinden waar het aan lag en informatie op het internet is heel slecht al gaat het over screenreaders. Uiteindelijk was het probleem dat ik dit gebruik voor knoppen.
```
document.getElementById('de knop').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
```
Het probleem hier is dat een knop niet reageerd op deze manier van enter klikken. Wat je moet doen is de addEventListener op click zetten aangezien een knop standaard al bedient kan worden met enter. Dit heeft het uiteindelijk gefixt en ik heb dit toegepast op al mijn functies.

## Study situations
Ik heb veel getest en gepraat met Lisanne. Hierdoor heb ik een goed beeld gekregen hoe zij een computer gebruikt. Ze gebruikt een screenreader en surft een pagina vooral met de tab toets. Ook kan ze nog wel kleur accentjes zien in de pagina dus als je een groot blok oranje maakt op een zwarte achtergrond zal ze dit zien. Ook zoemt ze soms de pagina heel ver in om tekst te lezen. Dit lukt haar soms maar ik zal er niet van uitgaan.
## ignore conventions 
Aangezien dit een pagina is voor iemand die heel slechtziend is kan je merken dat dit niet door andere echt gebruikt hoort te worden. Dit kan je merken aan de extreem grote elementen en die grote outlines rond elk element. Ook heb ik terug knoppen boven en onder aan elke pagina wat zodat je snel terug kan komen naar de home screen.

## prioritize identity
Door veel met haar te praten weet ik wat zij fijn vind en een paar voorkeuren die ze heeft. Een paar voorbeelden hiervan zijn dat ze de kleur oranje leuk vind en dat ze graag een zwarte background heeft voor haar ogen. Ook vind ze het heel fijn om wk`s te zien bij de maanden. Ik heb ook een geluidje toegevoegd elke keer al add je een oefening aangezien zij heel slecht ziend is.

## add nonsense
Larissa vertelde mij dat ze vaak geen zin heeft om te trainen en ze houd niet van schemas volgen. Dus heb ik een motivational speech van shia labeuof toegevoegd voor als ze het moeilijk heeft. 





