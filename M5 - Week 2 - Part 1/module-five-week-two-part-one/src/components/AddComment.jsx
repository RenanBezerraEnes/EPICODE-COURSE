import { Component } from "react";
import { Form, Button} from "react-bootstrap";
import Loading from "./Loading";

class AddComment extends Component {
    state= 
        {
            comment: "",
            rate: "",
            elementId: this.props.elementId,
            isLoading: false,
          }


    render () {
        console.log(this.props.elementId)
        return (
            <Form style={{width: "50%"}} className="text-center ml-auto mr-auto" onSubmit={this.onFeedBack}>
                <Form.Group>
                    <Form.Label>Rate</Form.Label>
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
                {
                this.state.isLoading && <Loading />
                } 
            </Form>
            
        )
    }

    onFeedBack = async (e) => {
        this.setState({
            isLoading: true,
        })
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
        this.setState({
            isLoading: false,
        })
        alert("Well Done")
      } else {
        this.setState({
            isLoading: false,
        })
          alert("Something went wrong")
      }

    }
}

export default AddComment