var repository = [ 0, 1, 2];

repository[0] = {
  name: "Bulbasaur",
  weight: 6.9,
  height: 0.7,
  type: ['grass ','poison ']
};

repository [1] = {
  name: "Ivysaur",
  weight: 13,
  height: 1,
  type: ['grass ','poison ']
};

repository [2]= {
  name: "Venusaur",
  weight: 100,
  height: 2,
  type: ['grass ','poison ']
};

var repository2 = [ 0, 1, 2];

repository2 [0]= {
  name: "Charmander",
  weight:  7,
  height: 1,
  type: ['fire']
}

repository2 [1]= {
  name: "Charmeleon",
  weight: 10,
  height: 1.2,
  type: ['fire']
}

repository2 [2]= {
  name: "Charizard",
  weight: 70,
  height: 2,
  type: ['fire', 'flying']
}

Object.keys(repository, repository2).forEach(function(property) {
  console.log(repository[property], repository2[property]);
});
