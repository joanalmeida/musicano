(function() {
	new Vue({
		el: '#bandstable',

		data: {
			error: false,
			genero: "",
			nombreBanda: "",
			bandas: [
				{
					"genero": "Rock",
					"nombre": "The Who",
					"integrantes": [
						"Roger Daltrey",
						"Pete Townshend",
						"John Entwistle",
						"Keith Moon"
					],
					"cantante": {
						"nombre": "Roger Daltrey",
						"foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Roger_Daltrey_%282008%29.jpg/250px-Roger_Daltrey_%282008%29.jpg"
					},
					"discos": 11
				},
				{
					"genero": "Rock",
					"nombre": "The Who",
					"integrantes": [
						"Roger Daltrey",
						"Pete Townshend",
						"John Entwistle",
						"Keith Moon"
					],
					"cantante": {
						"nombre": "Roger Daltrey",
						"foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Roger_Daltrey_%282008%29.jpg/250px-Roger_Daltrey_%282008%29.jpg"
					},
					"discos": 11
				}
			],

			/*
			generos: [
				"Rock",
				"Indie",
				"Electronica"
			]
			*/

			generos: []
		},

		methods: {
			filterBands: function(){
				if(!this.genero || !this.nombreBanda){
					this.error = true;
					return;
				}
				this.error = false;
				axios.post('/filtrar', {
					genero: this.genero,
					nombre: this.nombreBanda
				})
				.then(function(response){
					// Esto debe reemplazar las bandas, no los generos, es solo una prueba de concepto
					// Por ahora no hice funcionar el post en laravel, en el archivo web.php
					this.generos = response.data;
				})
				.catch(function(error){
					console.log(error);
				});
			}
		},

		mounted() {
			/*
			 * Esta funcion se ejecuta cuando se inicializa, por lo cual aca hay que hacer la pegada a donde
			 * corresponda, y asignarle los datos al array de bandas.
			 * El formato del json deberia ser:

			 {
				"bandas": [
					{
						"genero": "Rock",
						"nombre": "The Who",
						"integrantes": [
							"Roger Daltrey",
							"Pete Townshend",
							"John Entwistle",
							"Keith Moon"
						],
						"cantante": {
							"nombre": "Roger Daltrey",
							"foto": "upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Roger_Daltrey_%282008%29.jpg/250px-Roger_Daltrey_%282008%29.jpg"
						},
						"discos": 11   -> Con esto solo no habria modal, es solo la cantidad
					},
					{
						
					}
				]
			 }

			* Las imagenes estan como una url de wikipedia, por lo cual sin inet no funcionan
			* Hay que modificar eso si se quiere laburar offline
			
			* La pegada se realiza asi:
			axios.get('/bandas').then(response => this.bandas = response.data.bandas);

			* La pegada para los generos es asi:
			axios.get('/generos').then(response => this.generos = response.data.generos);
			*/
			axios.get('/generos').then(response => this.generos = response.data);
		}
	});
})();