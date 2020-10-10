function getRequestBodyFromForm() {
	let data = new FormData();
	data.append('name', document.getElementById('name').value);
	data.append('mail', document.getElementById('mail').value);
	data.append('message', document.getElementById('message').value);

	return data;
}


function SubmitContactForm() {

	let data = getRequestBodyFromForm();

	Submit(data, function () {
		console.debug('submit callback');
	});

}

/**
 * @param {Document | Blob | ArrayBufferView | ArrayBuffer | FormData | ReadableStream<Uint8Array> | string} data
 * @param {function(): void} callback
 */
function Submit(data, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8000/api/contact', true);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			callback();
		}
	}

	xhr.send(data);
}



