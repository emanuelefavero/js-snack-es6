# JS Snack ES6

Esercizi su array e oggetti in JavaScript dal mio corso Web Dev.

## Come eseguire gli esercizi

Aprire `index.html` nel browser e controllare il risultato in console.

In alternativa, eseguire il file JavaScript con Node:

> Nota: assicurarsi di avere Node.js installato e di essere nella directory del progetto prima di eseguire il comando.

```bash
node script.js
```

## Descrizione

Il progetto contiene due snack:

### Snack 1

- Creare un array di oggetti:
- Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
- Stampare a schermo la bici con peso minore.

### Snack 2

- Creare un array di oggetti di squadre di calcio.
- Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
- Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
- Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
- Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

## Struttura del progetto

```txt
js-snack-es6/
├── index.html
└── script.js
```

## Decisioni Tecniche

- Ho separato i due snack in blocchi `{}` per mantenere lo scope delle variabili isolato.
- Ho usato array di oggetti con proprietà in inglese, mantenendo l'output in italiano.
- Nello Snack 1 ho separato la ricerca della bici più leggera dalla creazione del messaggio da stampare.
- Nello Snack 2 ho inizializzato punti e falli subiti a `0`, poi li ho aggiornati con numeri random usando un ciclo `for...of`.
- Ho creato un nuovo array, sempre con un ciclo `for...of`, per estrarre solo nome squadra e falli subiti, e alla fine ho stampato il risultato in console.

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#js-snack-es6)
