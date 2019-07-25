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
  var rankedList = document.getElementById('app').querySelectorAll('ul.rankedList li');
  
  for(let i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML)
  }
}

console.log(increaseRankBy(2));