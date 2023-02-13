/**
 * 프로퍼티 열거
 */

const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	prop4: 'value4',
};

const prop = 'prop';

obj.prop1;
obj[prop + 1];

for (const key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(obj[key]);
	}
}

{
	let val= 1;
	{
		let val = 4;
		{
			let val = 10;
			{
				console.log(val);
			}
		}
	}
}
