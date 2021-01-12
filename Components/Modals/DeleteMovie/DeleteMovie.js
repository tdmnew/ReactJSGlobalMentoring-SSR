import React from "react";

export default function DeleteMovie({ close, submit }) {
    return (
        <div className="message-modal">
            <div className="message-modal container">
                <button className="container__close-btn" onClick={close}>
                    X
                </button>
                <form onSubmit={submit}>
                    <h2>DELETE MOVIE</h2>
                    <p>Are you sure you want to delete this movie?</p>
                    <div className="container buttons">
                        <button
                            className="container buttons__confirm"
                            type="submit"
                        >
                            CONFIRM
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
