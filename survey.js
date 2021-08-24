const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  const profile = {};
  profile.name = name;

  rl.question(`What's your favourite activity to do? `, (hobby) => {
    profile.hobby = hobby;
    rl.question(`What's do you listen to while doing that? `, (music) => {
      profile.music = music;
      rl.question(`Which meal is your favourite? (eg: breakfast, lunch, dinner) `, (favouriteMeal) => {
        profile.favouriteMeal = favouriteMeal;
        rl.question(`What's your favourite thing to eat for that meal? `, (favouriteFood) => {
          profile.favouriteFood = favouriteFood;
          rl.question(`What's your absolute favourite sport? `, favouriteSport => {
            profile.favouriteSport = favouriteSport;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, superpower => {
              profile.superpower = superpower;
              rl.close();
              console.log(`${profile.name} loves listeneing to ${music} while ${profile.hobby}, devouring ${profile.favouriteFood} for ${profile.favouriteMeal}, prefers ${profile.favouriteSport} over any other sport, and is amazing at ${profile.superpower}.`);
            });
          });
        });
      });
    });
  });
});