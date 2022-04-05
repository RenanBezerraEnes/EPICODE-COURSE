const AnotherComponent = (props) => (
    // props is a object, if there is no props it will be a empty object
    <div>
        <h1>{props.title}</h1>
        <h3>{props.subTitle}</h3>
    </div>
)

export default AnotherComponent