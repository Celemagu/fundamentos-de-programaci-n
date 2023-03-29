/**
 * 
 */
let may = -1
 let numbers = [1,6,8,4,2,7,10,3,5];
 
 for (let i=0;i<=numbers.length -1 ; i++ ) {
	 if (numbers[i]>=may) {
		 may = numbers [i]
		 
	 }
 }
 
 console.log(may);