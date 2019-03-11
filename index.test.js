import {
	stringify,
	parse
} from './index';

it('stringifies and parses while preserving references', () => {
	const a = {
		name: 'a',
	};
	a.a = a;
	const b = {
		name: 'b',
		a,
	};
	const original = {
		name: 'original',
		a,
		b,
	};
	const stringified = stringify(original);
	expect(stringified).toMatchSnapshot();

	const parsed = parse(stringified);
	expect(parsed.name).toBe(original.name);
	expect(parsed.a.name).toBe(original.a.name);
	expect(parsed.b.name).toBe(original.b.name);
	expect(parsed.a).toBe(parsed.b.a);
	expect(parsed.a).toBe(parsed.a.a.a.a.a);
});

it('passes optional args through to JSON.stringify', () => {
	expect(stringify({
		foo: 'bar',
		a: 'b',
	}, null, 4)).toMatchSnapshot();
});

it('treats `null`, `undefined`, `NaN`, `Infinity`, and `function` as `null`', () => {
	const obj = parse(stringify({
		null: null,
		undefined: undefined,
		NaN: NaN,
		Infinity: Infinity,
		function: () => {},
	}));
	expect(obj.null).toBeNull();
	expect(obj.undefined).toBeNull();
	expect(obj.NaN).toBeNull();
	expect(obj.Infinity).toBeNull();
	expect(obj.function).toBeNull();
});
