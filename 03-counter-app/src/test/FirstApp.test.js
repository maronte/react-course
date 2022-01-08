import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import FirstApp from "../FirstApp";
import "../setupTests";

describe("FirstApp component", () => {
    /*test("should shows a message with greeting", () => {
        const greeting = "Hello John";

        const view = render(<FirstApp name="John" />);

        expect(view.getByText(greeting)).toBeInTheDocument();
    });*/

    test("should show the component", () => {
        const wrapper = shallow(<FirstApp name="John" />);
        expect(wrapper).toMatchSnapshot();
    });

    test("should show the component with a greeting", () => {
        const expectedGreeting = "Hello John";
        const wrapper = shallow(<FirstApp name="John" />);
        const greeting = wrapper.find("h1").text();
        expect(greeting).toBe(expectedGreeting);
    });
});