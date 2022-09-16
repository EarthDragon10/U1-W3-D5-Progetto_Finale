const writeToDisplay = (number) => {
	// let inputValue = document.getElementById("display").value;
	// inputValue += number;  PERCHÉ NON FUNZIONA? CHIEDERE A LIDIA
	document.getElementById("display").style.color = "rgb(12, 104, 158)";
	document.getElementById("display").value += number;
};

// Funzione che stampa qualunque input numerico elevato alla seconda

const exponentResultDisplay = () => {
	let value = document.getElementById("display").value;
	document.getElementById("display").value = Math.pow(value, 2);
};

// Funzione che stampa qualunque radice dell'input numerico

const sqrtResultDisplay = () => {
	let value = document.getElementById("display").value;
	document.getElementById("display").value = Math.sqrt(value);
};

// Funzione che cancella un numero alla volta

const deleteNumber = () => {
	document.getElementById("display").value = document
		.getElementById("display")
		.value.slice(0, -1);
};

// Funzione che stampa il risultato di tutte le operazioni digitate tramite la 'conversione' usando Function() al posto di eval()

const showNumberToDisplay = () => {
	let value = document.getElementById("display").value;

	if (value) {
		let inputValue = Function(
			"return " + document.getElementById("display").value
		)();

		console.log(inputValue, typeof inputValue);

		// Al posto del NaN, faccio uscire il messaggio di errore in rosso
		if (String(inputValue) === String(NaN)) {
			document.getElementById("display").value = "Error!";
			document.getElementById("display").style.color = "red";
		} else {
			document.getElementById("display").value = inputValue;
			document.getElementById("display").style.color =
				"rgb(12, 104, 158)";
		}
	} else {
		// Cosí sistemo anche il bug che a volte esce 'undefined' pigiando sul pulsante =
		document.getElementById("display").value = "";
	}
};

const deleteDisplay = () => {
	document.getElementById("display").value = "";
};
