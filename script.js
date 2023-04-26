// TODO: add code here
window.addEventListener('load', function () {
   const container = document.getElementById("container");

   fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function (response) {
    response.json().then (function(jsonData){
        
        console.log(jsonData);

        jsonData.sort(function(a, b){
            return a.hoursInSpace < b.hoursInSpace ? 1:-1;
        });
        for(let i = 0; i<jsonData.length; i++){
            let astronaut = jsonData[i];
            container.innerHTML +=
        `<div class="astronaut">
        <div class="bio">
           <h3>${astronaut.firstName} ${astronaut.lastName})</h3>
           <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li>Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills.join(", ")}</li>
           </ul>
        </div>
        <img class="avatar" src="${astronaut.picture}">
     </div>
        `
        }
         
    });
    
   })
});