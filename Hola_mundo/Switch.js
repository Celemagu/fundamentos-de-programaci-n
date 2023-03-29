/**
 * 
 */

 let weekDay =-5; // 1 =Lunes, 2= martes, 3 = miercoles
 
 if (weekDay <= 0){
	 //console.log("Dia de la semana no permitido");
	 throw new Error ("Día de la semana no permitido");
 }
 
 switch(weekDay){
	 case 1:
		 console.log("Es lunes");
		 break;
	case 2:
		 console.log("Es martes");
		 break;
	case 3:
		 console.log("Es miercoles");
		 break;
		 
	default:
		console.log("No es lunes, ni martes, ni miercoles");
 }