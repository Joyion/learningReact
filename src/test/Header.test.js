import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import Header from "../components/Header"
import {shallow} from 'enzyme';





test("test header", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    
    // enzyme test
 //   expect(wrapper.find('h2').length).toBe(1);

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});