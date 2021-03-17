import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';

import { ModalStateContext } from '../../../../HOCs/Context/ModalContext';
import store from '../../../../Store';

import MovieCard from '../MovieCard.js';

describe('Movie Card', () => {
    afterEach(cleanup);

    const modalOptions = {
        isOpen: false,
    };

    const movie = {
        id: 1,
        title: 'Blade Runner',
        tagline: '',
        vote_average: 4.3,
        vote_count: 100,
        genres: ['Sci-Fi'],
        release_date: '1982-01-01',
        overview: '',
        budget: 100000,
        revenue: 200000,
        runtime: 120,
        poster_path:
            'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg',
    };

    it('Renders with default props', () => {
        const tree = render(
            <Provider store={store}>
                <MemoryRouter>
                    <ModalStateContext.Provider value={modalOptions}>
                        <MovieCard movie={movie} />
                    </ModalStateContext.Provider>
                </MemoryRouter>
            </Provider>
        );

        expect(tree).toMatchSnapshot();
    });

    it('Accepts clicks to menu button', async () => {
        const tree = render(
            <Provider store={store}>
                <MemoryRouter>
                    <ModalStateContext.Provider value={modalOptions}>
                        <MovieCard movie={movie} />
                    </ModalStateContext.Provider>
                </MemoryRouter>
            </Provider>
        );

        const menuButton = screen.getByTitle(/menu/i);
        await waitFor(() => userEvent.click(menuButton));

        expect(screen.getByTitle(/Edit/i)).toBeInTheDocument();
        expect(screen.getByTitle(/Delete/i)).toBeInTheDocument();
    });
});
