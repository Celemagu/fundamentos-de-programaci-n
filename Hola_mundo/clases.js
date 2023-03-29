/**
 * 
 */

 class Car {
	 
	 brand;
	 doors;
	 fueltank;
	 isRunning;
	 type;
	 
	 createDat;
	 
	 constructor (brand, type){
		 this.brand = brand;
		 this.doors= 0;
		 this.fueltank= 50;
		 this.isRunning= false;
		 this.type= type;
		 
		 
		 this.createDat = 123456789;
		 
	 }
	 
	 
	 turnOn() {
		 
		if (this.isRunning) {
			console.log ("El carro ya estaba encendido, se daño arranque")
			return;
			
			}
			
			if (this.fueltank<=0) {
			 console.log ("El carro no tiene gasolina")	;
			 return;
			}	
			this.isRunning =true;
			console.log("el carro está encendido")
		
		
	 }
	filltank (gas) {
		
		if (gas<=0) {
			console.log ("el carro continua con gasolina al: " + this.fueltank);
			return;
			}
		
		if (this.fueltank== 100) {
			console.log ("El carro está full");
			return;
		}
		if (this.fueltank<100 && this.fueltank>0) {
			this.fueltank= this.fueltank+gas;
			if(this.fueltank>100){
				this.fueltank=100;
				console.log ("El carro quedó Full" );
			}else {
				console.log ("Al carro se le agregó " + gas + " de gasolina, y quedó con " + this.fueltank);
			}
		}
		
	}
	
		
	}
 
 
 
 let myRenault = new Car("Nissan", "Camioneta");
 
 console.log (myRenault)
 myRenault.filltank(10);
 myRenault.turnOn ();
 //console.log (myRenault.isRunning)

 
 
 
 
 