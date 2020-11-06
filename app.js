window.onload = function() {
const searchButton = document.getElementsByClassName('btn')[0]
const displayResults = document.getElementById('result')
const userData = document.getElementById('user-data')
searchButton.addEventListener('click',getHeroes)



function getHeroes() {
    const userDataValue = userData.value
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
       if(xhr.readyState == 4 && xhr.status == 200) {
          var results = xhr.responseText
          
        displayResults.innerHTML = results;
          
   }
   }

   xhr.open("GET","superheroes.php?q="+userDataValue, true)
   
   xhr.send()

}


}