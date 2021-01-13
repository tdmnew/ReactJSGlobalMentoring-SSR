import React from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../redux/sagas/sagaActions";
import { sortMovies } from "../../redux/slices/movies.js";

export default function Nav() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const [genres, setGenres] = React.useState([]);

    React.useEffect(() => {
        if (movies !== undefined) {
            const genres = movies
                .map((movie) => movie.genres)
                .flat()
                .filter((v, i, s) => s.indexOf(v) === i);
            setGenres(genres);
        }
    }, [movies]);

    const sort = (e) => {
        dispatch(sortMovies(e.target.value));
    };

    const filter = (e) => {
        const genre = e.target.getAttribute("href").slice(1);
        if (genre === "All") {
            dispatch({ type: sagaActions.FETCH_MOVIES });
        } else {
            dispatch({ type: sagaActions.FILTER_MOVIES, payload: genre });
        }
    };

    return (
        <div className="nav">
            <ul className="nav__links">
                <li>
                    <a href="#All" onClick={filter}>
                        ALL
                    </a>
                </li>
                {genres.slice(0, 6).map((genre) => {
                    return (
                        <li key={genre}>
                            <a href={`#${genre}`} onClick={filter}>
                                {genre}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div className="dropdown">
                <span className="dropdown__heading">SORT BY</span>
                <select className="dropdown__options" onChange={sort}>
                    <option value="release_date">RELEASE DATE</option>
                    <option value="title">TITLE</option>
                    <option value="genres">GENRE</option>
                    <option value="vote_average">RATING</option>
                </select>
            </div>
        </div>
    );
}
