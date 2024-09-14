class Estudiante{
	constructor(nombre, calificaciones){
		this.nombre=nombre;
		this.calificaciones=calificaciones;
	}

	obtenerPromedio(){
		const suma = this.calificaciones.reduce((acc, calificacion)=>acc+calificacion,0);
		return suma / this.calificaciones.length;
	}
}

let estudiantes=[
	new Estudiante('Ana', [8,9,7,6]),
	new Estudiante('Luis',[5,6,7,8]),
	new Estudiante('María',[9,10,10,8]),
	new Estudiante('Juan',[4,5,6,7]),

	//5 nuevos estudiantes:
	new Estudiante('Gonzalo', [6,8,9,5]),
	new Estudiante('Jessica',[8,7,6,9]),
	new Estudiante('Manuel',[10,9,8,8]),
	new Estudiante('Sebastian',[4,7,5,7]),
	new Estudiante('Alex',[7,4,6,8])
];

function calcularPromedioGeneral(estudiantes){
	const sumaPromedios=estudiantes.reduce((acc, estudiante)=>acc+estudiante.obtenerPromedio(),0);
	return sumaPromedios / estudiantes.length;
}

function obtenerEstudiantesPorEncimaDelPromedio(estudiantes, promedioGeneral){
	return estudiantes.filter(estudiante=>estudiante.obtenerPromedio()>promedioGeneral);
}

function encontrarEstudianteConMayorNota(estudiantes) {
	return estudiantes.reduce((max, estudiante) => 
		(estudiante.obtenerPromedio() > max.obtenerPromedio()) ? estudiante : max
	);
}

function encontrarEstudianteConMenorNota(estudiantes) {
	return estudiantes.reduce((min, estudiante) => 
		(estudiante.obtenerPromedio() < min.obtenerPromedio()) ? estudiante : min
	);
}

let promedioGeneral=calcularPromedioGeneral(estudiantes);
console.log("Promedio general de todos los estudiantes:", promedioGeneral.toFixed(2));

let estudiantesDestacados=obtenerEstudiantesPorEncimaDelPromedio(estudiantes, promedioGeneral);
console.log("Estudiantes con promedio superior al promedio general:");
estudiantesDestacados.forEach(estudiante=>{
	console.log(`${estudiante.nombre} - Promedio: ${estudiante.obtenerPromedio().toFixed(2)}`);
});

let estudianteConMayorNota = encontrarEstudianteConMayorNota(estudiantes);
console.log("Estudiante con mayor nota al promedio:");
console.log(`${estudianteConMayorNota.nombre} - Promedio: ${estudianteConMayorNota.obtenerPromedio().toFixed(2)}`);

let estudianteConMenorNota = encontrarEstudianteConMenorNota(estudiantes);
console.log("Estudiante con menor nota al promedio:");
console.log(`${estudianteConMenorNota.nombre} - Promedio: ${estudianteConMenorNota.obtenerPromedio().toFixed(2)}`);