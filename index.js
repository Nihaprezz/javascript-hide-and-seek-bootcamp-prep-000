function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div div div div.target');
}

function deepestChild(){
  return document.getElementById('grand-node').querySelector('div div div div div');
}


function increaseRankBy(number){
  var ranks1 = document.getElementById('app').querySelectorAll('ul.rankedList li');
  
  for(let i = 0; i < ranks1.length; i++){
   ranks1[i].innerHTML = parseInt(ranks1[i].innerHTML)+ number;
  }
}

