var url = 'https://api.rawg.io/api/games/4200';

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		createGameDetails(json);
	});

function createGameDetails(json) {
	console.dir(json);

	const description = document.querySelector('.description');
	description.innerHTML = json.description;

	const name = document.querySelector('.name');
	name.innerHTML = json.name;

	const image = document.querySelector('img.image');
	image.src = json.background_image_additional;
}
