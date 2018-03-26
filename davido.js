var sequence = [1,1];
var b = 0;
for (var i = 0; i < sequence.length; i++){
	 b = b+sequence[i];
}
console.log(b);


//first attempt
var a = prompt('Enter the number of times u want to compute');
var count = 0;
while(count<a){
	var b = prompt('Enter your sequence');
	var c = b.split(' ');
	var d = 0;
	for(i = 0; i <= c.length; i++){
		d = d + c[i];
    }
    console.log(d);
    count++;
}

//another attempt
/*var a = prompt('Enter the number of times u want to compute');
var count = 0;
var d = 0;
while(count<a){*/
	var b = prompt('Enter your sequence');
	
	var c = b.split(' ');
	console.log(c);
	for(i = 0; i <= c.length; i++){
		var q = Number(c[i]);
		
    }
console.log(q);
	
/*count ++;
}*/

//another attempt

/*var a = prompt('Enter the number of times u want to compute');
var count = 0;
var d = 0;
while(count<a){*/
	var b = prompt('Enter your sequence');
	var f = [1,3];
	var c = b.split(' ');
	console.log(c);
	for(i = 0; i <= c.length; i++){
		var q = Number(c[i]);
		
		var j = f.push(c[i]);
		
    }
console.log(j);

	
/*count ++;
}*/

	