//selecting the button:
const btn = document.querySelector('button');

//adding events:
btn.addEventListener('mouseover', function () {
	console.log('MOUSED OVER ME!');
	//calculating movement:
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

btn.addEventListener('click', function () {
	//changing text & background:
	btn.innerText = 'YOU GOT ME! :D';
	document.body.style.backgroundColor = 'yellow';
});
