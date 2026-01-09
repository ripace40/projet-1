function searchOnGoogle(){
    var searchQuerry = document.getElementById('searchInput').value;
    var searchURL ='https://www.google.co.uk/search?q=' + searchQuerry;
    window.open(searchURL, '_self');
}
