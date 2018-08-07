var socketIOClient = require('socket.io-client');
var sailsIOClient = require('sails.io.js');

var io = sailsIOClient(socketIOClient);
io.sails.url = 'http://192.168.137.221:1337';


var sensor = require('ds18b20');
var sensorId = [];
var sensorDatos = [];
var intervalo = 2000;
var date = new Date();

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var ledSen11 = new Gpio(20, 'out'); //use GPIO pin 20, and specify that it is output
var ledSen12 = new Gpio(21, 'out'); //use GPIO pin 21, and specify that it is output
var ledSen21 = new Gpio(26, 'out'); //use GPIO pin 26, and specify that it is output
var ledSen22 = new Gpio(19, 'out'); //use GPIO pin 19, and specify that it is output

ledSen11.writeSync(1);
ledSen12.writeSync(1);
ledSen21.writeSync(1);
ledSen22.writeSync(1);

sensor.sensors(
        function(err, id, temp){ 
                sensorId = id;
                sensorTemp = temp;
                //console.log(sensorId[]);
		sensorId.forEach(
			function(value){
				agregarDispositivo(value);
			}
		);
			
        }
);

function agregarDispositivo(sensor){
	//console.log('Entro ', sensor);
	encontrado=0;	
	io.socket.get('/dispositivo', function(resData, jwres){
		resData.forEach(function(value){
			if(sensor===value.nombre){
				console.log("Encontrado");
				encontrado=1;
			}
		});
		//console.log(encontrado);
		if(encontrado !== 1){
			var dispositivo ={
				"nombre": sensor
			}
			console.log(dispositivo);
			io.socket.post('/dispositivo',
				dispositivo,
       				function() {
                			//response.statusCode;
					//io.socket.disconnect();
				}	
			);
		}
	});
}

setInterval(
        function(){
                sensorId.forEach(
                        function(id){
                                sensor.temperature(
                                        id,
                                        function (err, value) {
                                                date = new Date();
                                                if (value >= 30) { //check the pin state, if the state is 0 (or off){
                                                        if(id==='28-000003065e30'){
								ledSen12.writeSync(0);
                                                        	ledSen11.writeSync(1);
							}
							if(id==='28-000003062c7d'){
								ledSen22.writeSync(0);
                                                        	ledSen21.writeSync(1);
							}
                                                }

                                                if (value < 30) { //check the pin state, if the state is 0 (or off) {
                                                        if(id==='28-000003065e30'){
								ledSen11.writeSync(0);
                                                        	ledSen12.writeSync(1);
							}
							if(id==='28-000003062c7d'){
								ledSen21.writeSync(0);
                                                        	ledSen22.writeSync(1);
							}
                                                }

						var idSensor=0;	
                                                io.socket.get('/dispositivoLugar', function(resData, jwres){
							resData.forEach(function(value2){
								if(id===value2.id_dispositivo.nombre){
									var datos = {
                								fecha: date,
                								valorTemperatura: value,
                								id_dispositivoLugar: value2.id
        								};
									console.log(datos);	
									io.socket.post('/temperatura',
										datos,
       										function() {}	
									);	
										 
								}
                        				}); 
						});
                                        }
                                );
                        }
                );
        }, intervalo
);

function guardar(id, temperatura, fechaHora){
        var datos = {
                fecha: fechaHora,
                valorTemperatura: temperatura,
                idDispositivolugar: id
        };
	io.socket.post('/temperatura',
			datos,
       		function(data, response) { 
			io.socket.disconnect();
		}

	);

}
