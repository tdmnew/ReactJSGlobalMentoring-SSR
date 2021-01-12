import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { ModalStateContext, ModalUpdaterContext } from "../../Context/ModalContext";

import AddMovie from "./AddMovie/AddMovie.js";
import EditMovie from "./EditMovie/EditMovie.js";
import DeleteMovie from "./DeleteMovie/DeleteMovie.js";

import { sagaActions } from "../../Redux/Sagas/sagaActions.js";

export default function Modal() {
    const dispatch = useDispatch();

    const { isOpen, modalProps } = React.useContext(ModalStateContext);
    const setModalOptions = React.useContext(ModalUpdaterContext);

    const genres = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Mystery",
        "Romance",
        "Science Fiction",
        "Thriller",
    ];

    const initialValues = {
        id: modalProps.info?.id,
        title: modalProps.info?.title || "",
        tagline: modalProps.info?.tagline || "No Tagline",
        vote_average: modalProps.info?.vote_average || 0,
        vote_count: modalProps.info?.vote_count || 0,
        genres: modalProps.info?.genres || [],
        release_date: modalProps.info?.release_date || "",
        overview: modalProps.info?.overview || "",
        budget: modalProps.info?.budget || 0,
        revenue: modalProps.info?.revenue || 0,
        runtime: modalProps.info?.runtime || 0,
        url: modalProps.info?.url || "",
        poster_path: modalProps.info?.poster_path || "https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg",
    };

    const validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = "Title Required";
        }
        if (values.genres.length === 0) {
            errors.genres = "Please select at least one genre";
        }
        if (!values.release_date) {
            errors.release_date = "Release Date Required";
        }
        if (!values.overview) {
            errors.overview = "Overview Required";
        }
        if (values.runtime === 0) {
            errors.runtime = "Runtime Required";
        }
        console.log(errors)
        return errors;
    };

    const addForm = useFormik({
        initialValues: {
            ...initialValues,
        },
        validateOnChange: false,
        validate,
        onSubmit: (values) => {
            delete values.id;
            dispatch({ type: sagaActions.ADD_MOVIE, payload: values });
            closeModal();
        },
    });

    const editForm = useFormik({
        enableReinitialize: true,
        initialValues: {
            ...initialValues,
        },
        validateOnChange: false,
        validate,
        onSubmit: (values) => {
            dispatch({ type: sagaActions.EDIT_MOVIE, payload: values });
            closeModal();
        },
    });

    const deleteMovie = (e) => {
        e.preventDefault();
        dispatch({
            type: sagaActions.DELETE_MOVIE,
            payload: modalProps.info.id,
        });
        closeModal();
    };

    const closeModal = () => {
        setModalOptions({ isOpen: false });
    };

    const returnModalType = () => {
        let type = modalProps.type;
        switch (type) {
            case "Add Movie":
                return (
                    <AddMovie
                        formik={addForm}
                        close={closeModal}
                        genres={genres}
                    />
                );
            case "Edit Movie":
                return (
                    <EditMovie
                        formik={editForm}
                        close={closeModal}
                        genres={genres}
                    />
                );
            case "Delete Movie":
                return <DeleteMovie close={closeModal} submit={deleteMovie} />;
            default:
                throw new Error("No case match");
        }
    }

    return <>{isOpen ? returnModalType() : null}</>;
}
