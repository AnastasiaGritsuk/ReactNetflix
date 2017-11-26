import React from 'react';
import SearchContainer from '../../src/containers/searchContainer/searchContainer';
import {shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

let props;

beforeEach(() => {
    props = {
        page: {
            films: []
        },
        match: {params: {}},
        pageActions: {
            searchFilms: jest.fn(),
            changeSort: jest.fn(),
            sort: jest.fn(),
            changeQuery: jest.fn(),
            changeSource: jest.fn()
        },
        history: []
    };
});

it('Should add history item from query string parameter', () => {
    let match = {
        params: {
            searchQuery: '123'
        }
    };
    props = {...props, match};
    shallow(<SearchContainer {...props}/>);
    expect(props.history).toContain('/search/123');
});

it('should change source', () => {
    const wrapper = shallow(<SearchContainer {...props}/>);
    const realComponentInstance = wrapper.instance();
    realComponentInstance.changeSort('value');
    expect(props.pageActions.changeSort).toHaveBeenCalledWith('value');
});