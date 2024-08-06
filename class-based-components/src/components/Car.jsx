import React from 'react'
import Buttom from './Button'

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: "BMW",
            color: "Blue",
            show: true,
        }
    }
    componentDidMount() {
        console.log("Component did mount")
    }
    shouldComponentUpdate() {
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState.color)
        return null
    }
    componentDidUpdate() {
        console.log(this.state.color)
    }

    handleChangeColor = () => {
        let red = Math.floor(Math.random() * (255 - 0)) + 0;
        let green = Math.floor(Math.random() * (255 - 0)) + 0;
        let blue = Math.floor(Math.random() * (255 - 0)) + 0;
        // console.log()
        this.setState({color: `rgb(${red}, ${green}, ${blue})`})
    }

    handleDeleteBtn = () => {
        this.setState({show:false});
    }

    static getDerivedStateFromProps(props, state) {
        return {brand:"Ford"}
    }

    render() {
        return (
            <div style={{}}>
                <p>I have a car of {this.state.brand} which color..</p>
                <button style={{backgroundColor: this.state.color, color: "white"}} onClick={this.handleChangeColor}>Change color</button>
                <button onClick={this.handleDeleteBtn}>Delete btn</button>
                {this.state.show ? <Buttom /> : <div>Deleted</div> }
            </div>
        )

    }
}

export default Car