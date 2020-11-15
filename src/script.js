let APIKEY = "TY1hhMQJDvNIQx27SAvCHxzGhbOD3wZ9";
let searchButton = document.getElementById("searchButton");
let imageToChange = document.getElementById("changeImage");
let searchTermGlobal = document.getElementById('searchTerm');

searchButton.addEventListener("click", submitSearch => {
	let searchTerm = document.getElementById("searchTerm").value;
	let apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${APIKEY}`;
	
	fetch(apiUrl)
	.then(response => response.json())
	.then(content => {
		imageToChange.src = content.data[0].images.downsized.url;
		imageToChange.alt = content.data[0].title;
	})
	.catch(err => {
		console.log(err);
	})
});