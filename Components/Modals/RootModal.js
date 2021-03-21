import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  ModalStateContext,
  ModalUpdaterContext,
} from '../../HOCs/Context/ModalContext.js';
import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from '../../Core/Constants';
import { sagaActions as actions } from '../../redux/sagas/sagaActions';

import AddMovie from './AddMovie/AddMovie.js';
import EditMovie from './EditMovie/EditMovie.js';
import DeleteMovie from './DeleteMovie/DeleteMovie.js';

export default function Modal() {
  const dispatch = useDispatch();

  const { isOpen, modalProps } = useContext(ModalStateContext);
  const setModalOptions = useContext(ModalUpdaterContext);

  const initialValues = {
    id: modalProps.info?.id,
    title: modalProps.info?.title || '',
    tagline: modalProps.info?.tagline || 'No Tagline',
    vote_average: modalProps.info?.vote_average || 0,
    vote_count: modalProps.info?.vote_count || 0,
    genres: modalProps.info?.genres || [],
    release_date: modalProps.info?.release_date || '',
    overview: modalProps.info?.overview || '',
    budget: modalProps.info?.budget || 0,
    revenue: modalProps.info?.revenue || 0,
    runtime: modalProps.info?.runtime || 0,
    url: modalProps.info?.url || '',
    poster_path:
            modalProps.info?.poster_path
            || 'https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg',
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Title Required';
    }
    if (values.genres.length === 0) {
      errors.genres = 'Please select at least one genre';
    }
    if (!values.release_date) {
      errors.release_date = 'Release Date Required';
    }
    if (!values.overview) {
      errors.overview = 'Overview Required';
    }
    if (values.runtime === 0) {
      errors.runtime = 'Runtime Required';
    }
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
      dispatch({ type: actions.ADD_MOVIE, payload: values });
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
      dispatch({ type: actions.EDIT_MOVIE, payload: values });
      closeModal();
    },
  });

  const deleteMovie = (e) => {
    e.preventDefault();
    dispatch({
      type: actions.DELETE_MOVIE,
      payload: modalProps.info.id,
    });
    closeModal();
  };

  const closeModal = () => {
    setModalOptions({ isOpen: false });
  };

  const returnModalType = () => {
    const { type } = modalProps;
    switch (type) {
      case ADD_MOVIE:
        return <AddMovie formik={addForm} close={closeModal} />;
      case EDIT_MOVIE:
        return <EditMovie formik={editForm} close={closeModal} />;
      case DELETE_MOVIE:
        return <DeleteMovie close={closeModal} submit={deleteMovie} />;
      default:
        throw new Error('No case match');
    }
  };

  return <>{isOpen ? returnModalType() : null}</>;
}
