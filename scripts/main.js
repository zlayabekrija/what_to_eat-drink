
let starter = ['soup','salad'];
let main = ['meat steak','fish steak','vegeterian'];
let outputStarter = starter[Math.floor(Math.random()*starter.length)];
let outputMain = main[Math.floor(Math.random()*main.length)];
let checkTime = new Date().getHours();



window.addEventListener('load', time(checkTime));

function time (hours){
    
    if(hours === 22){
        makeRequest()
    }
}

function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert(`Can't create request`);
        return false;
    } else {
        httpRequest.onreadystatechange = alertAnswer;
        httpRequest.open('GET','https://api.edamam.com/search?q='+outputMain+'&app_id=842f9ed1&app_key=13f969406a60ccfe8ca51e76ddeb2625&from=0&to=1')
        httpRequest.send();
    }
    
    function alertAnswer() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
           console.log(httpRequest.responseText);
          } else {
            alert('There was a problem with the request.');
          }
        }
      }

}



