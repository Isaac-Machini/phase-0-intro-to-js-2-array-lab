 const cats = ["Milo","Otis", "Garfield"];

 function destructivelyAppendCat() {
    return cats.push('Ralph')
 }  
 
 function  destructivelyPrependCat() {
    return cats.unshift('Bob')
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(){
    var newArray = cats.slice();
   newArray.push('Broom')
    return newArray
  }
    
  function prependCat(){
    var newArray = cats.slice();
newArray. unshift('Arnold')
return newArray
  }

  function removeLastCat(){
    var newArray = cats.slice();
    newArray.pop()
    return newArray
  }


  function removeFirstCat(){
    var newArray = cats.slice();
    newArray.shift()
    return newArray
    }
  
