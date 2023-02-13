function func(params) {
	params = params + 10;

	return params;
}

const result = func(1);

console.log(result);



function func2(p1, p2, p3, p4) {
	console.log(p2, p4);

	console.log(p1);
}

func2(undefined, 'p2', undefined, 'p4');



function func3(objP) {
	const p1 = objP.p1;
	const p2 = objP.p2;
	const p3 = objP.p3;
	const p4 = objP.p4;

	console.log(p2, p4);
}

func3({ p2: 'P2', p4: 'P4' });



function func4({ p1, p2, p3, p4 }) {

	console.log(p2, p4);
}

func4({p2: 'P2', p4: 'P4'});
