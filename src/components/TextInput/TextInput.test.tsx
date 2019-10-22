import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import TextInput from "./TextInput";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
	const props = {
		inputValue: '',
		onChangeValue: jest.fn(),
		onSubmitValue: jest.fn()
	}

	const enzymeWrapper = shallow(<TextInput {...props}/>);

	return {
		props,
		enzymeWrapper
	}
}

describe('TextInput', () => {
	it('should render self and components without crashing', () => {
		const { enzymeWrapper } = setup();
		expect(enzymeWrapper.find('input').hasClass('input')).toBe(true);
		
		const inputProps = enzymeWrapper.find('input').props();
		expect(inputProps.placeholder).toEqual("Type new task");
		expect(inputProps.type).toEqual("text");
	});
})