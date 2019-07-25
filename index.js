function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div div div div.target');
}

function deepestChild(){
  return document.getElementById('grand-node').querySelector('div div div div div');
}

function increaseRankBy(n){
  var rankedList = 
}

console.log(increaseRankBy(2));