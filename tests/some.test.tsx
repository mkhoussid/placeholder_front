import * as React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/components/ui/Button';

function toJson(component: renderer.ReactTestRenderer) {
	const result = component.toJSON();
	expect(result).toBeDefined();
	expect(result).not.toBeInstanceOf(Array);
	return result as renderer.ReactTestRendererJSON;
}

test('Link changes the class when hovered', () => {
	const component = renderer.create(<Button>Hello</Button>);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
