function alternatingSums(a) {
	    let weightArray = [0,0];
	    a.forEach((weight, index) => {
		            weightArray[index % 2] += weight;
		        });
	    return weightArray;
}

