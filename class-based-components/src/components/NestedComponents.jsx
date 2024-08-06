import React from 'react'

class NestedComponents extends React.Component {
    render() {
        return (
            <div style={{border:"1px solid red", margin:"10px", padding:"5px"}}>
                <h3>Hi, I'm Nested component</h3>

            </div>
        )

    }
}

class OuterComponent extends React.Component {
    render() {
        return (
            <div className='' style={{border:"2px solid blue"}}>
                <h2>I'm Outer Component</h2>
                <NestedComponents />
            </div>
        )
    }
}

export default OuterComponent;