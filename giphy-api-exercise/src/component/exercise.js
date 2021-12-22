let request = new XMLHttpRequest();

request.open('GET', 'api.giphy.com/v1/gifs/random' )

request.onload = function(){
    let response = request.response;
    
}