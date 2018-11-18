import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({
            isError:true
        })
    }

    render() {
        if (this.state.isError === true) {
            return (
                <h1>Oops that was not good, let me get back!!</h1>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;