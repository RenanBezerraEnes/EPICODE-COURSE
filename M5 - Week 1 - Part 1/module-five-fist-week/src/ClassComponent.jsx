import {Component} from 'react'

class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.classTitle}</h1>
            </div>
        )
    }
}

export default ClassComponent