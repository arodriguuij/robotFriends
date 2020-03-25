import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(()=>{
    const mockProps = {
        onRequestRobotsHandler: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
});

it('rendersMainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobotsHandler: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)

    expect(wrapper2.instance().filteredRobots()).toEqual( [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }])
})


it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobotsHandler: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = []
    const wrapper3 = shallow(<MainPage {...mockProps3} />)
    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots)
})