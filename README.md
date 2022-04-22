
**Week 1

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

**Het interview

Het eerste interview was vooral informatie krijgen over hoe zij een screenreader gebruikt en hoe zij een schema wilt hebben. Het was heel leuk om met haar kennis te maken. Eerst hadden we het even over het leven van haar en hoe zij omgaat met zon druk leven terwijl je blind bent. Daarna begonnen wij met een vragen lijst die we hadden samengesteld. Hier zijn de aantekeningen die ik heb genomen tijdens het gesprek en tijdens het testen van de projecten van meerdere klasgenoten:

-Kan soort van kleuren zien. Misschien een licht accentje geven
Braile bord niet veel gebruikt
-niet een sierlijk of hakerig font. Maat het onnodig onduidelijk
-6 dagen in de week . soms 2 dagen per dag sport zij
-training peaks wordt nu gebruikt voor schemas.
-1 week tot in detail uitgeschreven.
-Training die ze heeft gedaan uitgeschreven onderaan?
-snel informatie krijgen
-Eerst menu voor baan of weg seizoen
-oranje beste kleur!
-Ze gebruikt jaws. claire
-bovenaan een balk waar je kan zoeken naar balk. En het eerste resultaat dat je krijgt op je home is de dag vandaag
-op h klikken voor koppen en i voor lijsten. p voor paragraphs. t voor tabel.
-testen firefox
-skip link om naar content te gaan

Jammergenoeg hebben we nog niet een schema gekregen die zijn gebruikt. Maar daar ging zij gelukkig naar zoeken. Verder was dit interview heel leerzaam en kan ik zeker verder volgende week.




