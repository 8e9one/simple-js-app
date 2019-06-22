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

/*for (var i = 0; i<= 2; i++) {
  document.write(repository[i].name)
}
*/
for (var i = 0; i <= 2; i++) {
  document.write(repository[i].name + '\'s <br> ( height: ' + repository[i].height + ' m,)<br>' + '( weight: ' + repository[i].weight + ' kg,)<br>' + '( type: ' + repository[i].type + ' )<br><br>' )
}
