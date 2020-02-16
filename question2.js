const url = 'https://api.rawg.io/api/games';
const enableUrl = 'https://cors-anywhere.herokuapp.com/' + url;

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		console.log(json);
	})
	.catch(function(error) {
		console.log(error);
	});

function createGames(json) {
	const results = json.results;
	console.dir(results);

	const resultsContainer = document.querySelector('.h2');

	let html = '';

	results.forEach(function(results) {
		html += ` <div class="game">
        <h2>${results.name}</h2>
        <img src="/path/to/image"${results.background_image} alt="Name of game">
    </div>`;
	});
	resultsContainer.innerHTML = html;
}
