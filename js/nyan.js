console.log('for da lulz')


function replicateSparks (_sparksRow) {
	const numberOfRowsToCoverEntireScreen = Math.ceil(document.body.offsetHeight / _sparksRow.offsetHeight)
	const newSparksRows = document.createElement('div')
	const newCat = document.createElement('img')

	for (let a = 0; a < numberOfRowsToCoverEntireScreen-1; a++) {
		newSparksRows.append(_sparksRow.cloneNode(true))
	}

	document.body.prepend(newSparksRows)
}

(function () {
	replicateSparks(document.getElementsByClassName('sparks-combo')[0])

})()
