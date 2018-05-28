var txt = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period";
  console.log(txt.length);

var dinosaur ="triceratops";
 dinosaur = dinosaur.toUpperCase("triceratops");
  console.log(dinosaur);
  txt = txt.replace('Velociraptor', dinosaur);
  console.log(txt);
  console.log(txt.length);
  console.log(typeof txt);
var partOfTxt = txt.slice(0,72);

console.log(partOfTxt);
document.write("<br>" + partOfTxt);
