import React from 'react';

class ClassBasedComponent extends React.Component {
    constructor(props) {
        super(props)
        let first = this.props.name2.split(" ") [0]
        this.state = {
            firstName: first,
        }
    }
    render() {
        return (
            <>
                <h1>Hello {this.props.name}!</h1>
                <h3>Welcome to {this.state.firstName}'s Empire </h3>
            </>

        )
    }
}

export default ClassBasedComponent