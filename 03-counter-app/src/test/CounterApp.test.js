import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import "../setupTests";

describe("CounterApp", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CounterApp value={ 10 } />);
    });

    test("should shows the CounterApp correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should start counter with the given value", () => {
        const wrapper = shallow(<CounterApp value={ 0 } />);
        const expectedValue = "0";
        const actualValue = wrapper.find("#counterValue").text();
        expect(actualValue).toBe(expectedValue);
    });

    test("should increments the counter value when buttom to increment is pressed", () => {
        const expectedValue = "11";
        wrapper.find("button").at(0).simulate("click");
        const actualValue = wrapper.find("#counterValue").text();
        expect(actualValue).toBe(expectedValue);
    });
    test("should decrements the counter value when buttom to drecement is pressed", () => {
        const expectedValue = "9";
        wrapper.find("button").at(2).simulate("click");
        const actualValue = wrapper.find("#counterValue").text();
        expect(actualValue).toBe(expectedValue);
    });

    test("should reset the counter value when buttom to reset is pressed", () => {
        const expectedValue = "10";

        // First increment the counter.
        wrapper.find("button").at(0).simulate("click");

        wrapper.find("button").at(1).simulate("click");
        const actualValue = wrapper.find("#counterValue").text();
        expect(actualValue).toBe(expectedValue);
    });
});