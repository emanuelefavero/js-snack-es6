// Snack 1
console.log('SNACK 1:');

{
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

// --------------------------------------------------

// Snack 2
console.log('SNACK 2:');

{
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const POINTS = { min: 50, max: 85 };
  const FOULS_DRAWN = { min: 50, max: 100 };

  const teams = [
    { name: 'Arsenal', points: 0, foulsDrawn: 0 },
    { name: 'Chelsea', points: 0, foulsDrawn: 0 },
    { name: 'Liverpool', points: 0, foulsDrawn: 0 },
    { name: 'Manchester United', points: 0, foulsDrawn: 0 },
  ];

  for (const team of teams) {
    team.points = getRandomInt(POINTS.min, POINTS.max);
    team.foulsDrawn = getRandomInt(FOULS_DRAWN.min, FOULS_DRAWN.max);
  }

  const getTeamsFoulsDrawn = (teams) => {
    const result = [];

    for (const team of teams) {
      const { name, foulsDrawn } = team;
      result.push({ name, foulsDrawn });
    }

    return result;
  };

  const teamsFoulsDrawn = getTeamsFoulsDrawn(teams);
  console.log('Squadre e falli subiti:', teamsFoulsDrawn);
  /*
  Output:
  Squadre e falli subiti: [
    { name: 'Arsenal', foulsDrawn: ... },
    { name: 'Chelsea', foulsDrawn: ... },
    { name: 'Liverpool', foulsDrawn: ... },
    { name: 'Manchester United', foulsDrawn: ... }
  ]
  */
}
