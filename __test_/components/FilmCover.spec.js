import React from 'react';
import { FilmCover } from '../../src/components/film/FilmCover';
import renderer from 'react-test-renderer';

it('Should show movie info', () => {
    let props = {
        film: {
            id: 1, title: 'Film test',
            releaseYear: 2017,
            genre: 'name test',
            director: 'director test',
            rating: '5',
            duration: 120
        }
    };
    const component = renderer.create(
        <FilmCover {...props}></FilmCover>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});