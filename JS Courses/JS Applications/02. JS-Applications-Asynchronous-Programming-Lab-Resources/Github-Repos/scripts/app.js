function loadRepos() {
	let username = document.getElementById('username').value;
	fetch(`https://api.github.com/users/${username}/repos`)
	.then(res => {
		if(!res.ok) {
			throw new Error(`${res.status} ${res.statusText}`);
		}

		return res.json();
	})
	.then(data => {
		if (data.length === 0) {
			throw new Error('No Content');
		}

		let list = document.getElementById('repos');

		const items = data.map(x => {
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.href = x.html_url;
			a.textContent = x.full_name;
			li.appendChild(a);

			return li;
		});

		list.replaceChildren(...items);
	})
	.catch(error => {
		const list = document.getElementById('repos');

		const p = document.createElement('p');
		p.textContent = error;

		list.replaceChildren(p);
	});
}