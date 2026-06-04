{
  // Snack 1
  const bikes = [
    { name: 'Colnago', weight: 6.8 },
    { name: 'Tarmac', weight: 6.6 },
    { name: 'Wilier', weight: 6.9 },
    { name: 'Pinarello', weight: 7 },
  ];

  const getLightestBike = (bikes) => {
    if (!bikes.length) return null;

    let lightestBike = bikes[0];

    for (const bike of bikes) {
      const { weight } = bike;
      if (weight < lightestBike.weight) lightestBike = bike;
    }

    return lightestBike;
  };

  const getLightestBikeMessage = (bike) => {
    if (!bike) return 'Nessuna bici trovata.';
    const { name, weight } = bike;
    return `${name} è la bici più leggera, con un peso di ${weight} kg.`;
  };

  const lightestBike = getLightestBike(bikes);
  console.log(getLightestBikeMessage(lightestBike));
  // Output: "Tarmac è la bici più leggera, con un peso di 6.6 kg."
}

{
  // Snack 2
  /*
  Creare un array di oggetti di squadre di calcio.
  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
  Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
  Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
  */
}
