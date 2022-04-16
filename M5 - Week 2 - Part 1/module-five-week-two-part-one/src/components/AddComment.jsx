import { Component } from "react";
import { Form, Button} from "react-bootstrap";

class AddComment extends Component {
    state= 
        {
            comment: "",
            rate: "",
            elementId: this.props.elementId,
          }


    render () {
        console.log(this.props.elementId)
        return (
            <Form style={{width: "50%"}} className="text-center ml-auto mr-auto" onSubmit={this.onFeedBack}>
                <Form.Group>
                    <Form.Label>rate</Form.Label>
                    <Form.Control type="number" placeholder="rate the book" onChange={(e) => {
                        this.setState( {
                            rate: e.target.value,
                        } )
                    }}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>FeedBack</Form.Label>
                    <Form.Control type="text" placeholder="feedback" onChange={(e) => {
                        console.log(this.state.comment)
                        this.setState( {
                            comment: e.target.value,
                        })
                    }}/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }

    onFeedBack = async (e) => {
        e.preventDefault()
        console.log("click me")
        const response = await fetch ("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NTAwMzQ2MDcsImV4cCI6MTY1MTI0NDIwN30.q8-1MZ_TDzIXmHqj4QIMnHVpGC0L_YPc-Az587i8PVQ",
          'Content-type': 'application/json',
        },
      })
      if(response.ok) {
        alert("Well Done")
      } else {
          alert("Something went wrong")
      }

    }
}

export default AddComment