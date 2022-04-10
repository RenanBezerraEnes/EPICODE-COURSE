import { Jumbotron } from "react-bootstrap";

const Welcome = (props) => (
    <Jumbotron className="text-center">
        <h2>{props.subtitle}</h2>
        <h4 className="pt-5">{props.bookSection}</h4>
    </Jumbotron>
)

export default Welcome