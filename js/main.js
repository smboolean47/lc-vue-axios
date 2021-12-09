const app = new Vue({
	el: '#root',
	data: {
		numero: null,
		numeroCpu: null,
		personaggio: null
	},
	methods: {

	},
	created() {
		// ASINCRONA
		// Numero giocatore
		axios.get('https://flynn.boolean.careers/exercises/api/random/int')
		.then((response) => {
			// handle success
			this.numero = response.data.response;
		})
		.catch(function (error) {
			// handle error
			//console.log(error);
			alert("il programma non funziona");
		});
		// Numero Cpu
		axios.get('https://flynn.boolean.careers/exercises/api/random/int')
		.then((response) => {
			// handle success
			this.numeroCpu = response.data.response;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});

		axios.get('https://swapi.dev/api/people/1')
		.then((response) => {
			// handle success
			this.personaggio = response.data;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});

	}
});