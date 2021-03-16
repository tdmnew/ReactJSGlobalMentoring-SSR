import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            //Fallback message
            return (
                <h1>Oops, an error has occurred</h1>
            );
        }

        return this.props.children;
    }
}
