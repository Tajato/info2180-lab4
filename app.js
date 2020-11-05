window.onload = function() {
const searchButton = document.getElementsByClassName('btn')[0]

searchButton.addEventListener('click',getHeroes)

function getHeroes() {
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
       if(xhr.readyState == 4 && xhr.status == 200) {
          return alert(xhr.responseText)
       }
   }

   xhr.open("GET",'superheroes.php',true)
   xhr.send()


}

}