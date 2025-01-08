const players = [
  { name: "Messi", goals: 30 },
  undefined,
  { name: "Ronaldo", goals: 28 },
  { name: "Neymar", goals: 22 },
  { goals: 2 },
  { name: "Mbappé", goals: 25 },
  { name: "Pele", goals: null },
];

const validRule = ({ name, goals } = {}) => {
  return !!name && !!goals;
};

const results = players.filter(validRule);

const goatPlayer = results.reduce(function (acc, value) {
  return acc.goals > value.goals ? acc : value;
});

console.log(goatPlayer);
