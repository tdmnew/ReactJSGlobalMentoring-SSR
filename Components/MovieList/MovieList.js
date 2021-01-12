import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "../MovieCard/MovieCard.js";

export default function MovieList() {

    const movies = useSelector((state) => state.movies);

    return (
        <>
            <div className="total">
                <span className="total__number">{movies?.length}</span>
                <span className="total__text"> movies found</span>
            </div>
            <div className="movielist">
                {movies?.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />;
                })}
            </div>
        </>
    );
}
