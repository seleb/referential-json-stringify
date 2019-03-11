function stringify(object, ...stringifyArgs) {
	const objectsRaw = [];
	const objects = [];
	function convertReferences(obj) {
		if (!obj) {
			return;
		}
		const result = {};
		Object.entries(obj).forEach(([key, val]) => {
			const index = objectsRaw.findIndex(i => i === val);
			if (index !== -1) {
				result[key] = index;
				return;
			}
			const newIndex = objectsRaw.push(val) - 1;
			result[key] = newIndex;
			objects[newIndex] = (val !== null && typeof val !== 'object') ? val : convertReferences(val);
		});
		return result;
	}
	const root = convertReferences(object);
	return JSON.stringify(objects.concat(root), ...stringifyArgs);
}

function parse(string, ...parseArgs) {
	const objects = JSON.parse(string, ...parseArgs);
	objects
		.filter(obj => obj && typeof obj === 'object')
		.forEach(obj => {
			Object.entries(obj).forEach(([key, val]) => {
				obj[key] = objects[val];
			});
		});
	return objects[objects.length-1];
}
