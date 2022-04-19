import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from './CommentsList'


export default class CommentArea extends Component {
    render () {
        return (
            
            <>
            <h5>FeedBacks:</h5>
            <AddComment elementId={this.props.asin}/>
            
            <ul>
                {this.props.comments &&  this.props.comments.map(comment => <CommentList  comment={comment} />)}
                {/* {this.props.comments && this.props.comments.map(comment => {
                    console.log('oia eu aqui')
               return <CommentList comment={comment} />
                })} */}
                {/* It is really important to console.log everything to understand, and in the second case using map with curly braces, make possible to console.log
                otherwise it's not possible to console.log because it will return automatically
                */}
            </ul>
            </>
        )
    }
    
}

