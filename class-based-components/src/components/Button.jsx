import React from 'react';

class Buttom extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render () {
        return (
            <button>Check {"componentWillUnmount"}</button>
        )
    }
}

export default Buttom