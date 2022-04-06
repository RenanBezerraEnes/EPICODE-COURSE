const Footer = () => {
    return (
        <div className="d-flex justify-content-center navbar">
        <div className="container d-flex justify-content-center">
        <img src="https://nfthours.com/wp-content/uploads/2021/11/visa-nft-1.jpg"
            className="App-logo rounded-circle"
            style={{height:"50px"}}
             alt="" 
             />
        <div className="col-3 first_bar_footer">
          <ul className="list-unstyled">
            <li className="nav-item">
              <a className="nav-link disabled">Get to Know Us</a>
            </li>
            <a href="#" target="_blank"
            className="text-decoration-none"
            ><li>Careers</li></a
            >
            <a href="#" target="_blank"
            className="text-decoration-none"
            ><li>Blog</li></a
            >
            <a href="#" target="_blank"
            className="text-decoration-none"
            ><li>Press Releases</li></a
            >
          </ul>
        </div>   

         <div className="col-3 first_bar_footer">
          <ul className="list-unstyled">
            <li className="nav-item">
              <a className="nav-link disabled">HELPFUL LINKS</a>
            </li>
            <a href="#" target="_blank"
            className="text-decoration-none"
            ><li>About</li></a
            >
            <a href="#" target="_blank"
            className="text-decoration-none"
            ><li>Press & Media</li></a
            >
            <a href="#" target="_blank"
            className="text-decoration-none"
            ><li>Customer Services</li></a
            >
          </ul>
        </div> 

         <div className="col-3 first_bar_footer">
          <ul className="list-unstyled">
            <li className="nav-item">
              <a className="nav-link disabled">Get in Touch</a>
            </li>
            <a href="#" target="_blank"
            className="text-decoration-none"
            ><li>NFTMarket@gmail.com</li></a>
            <a href="#" target="_blank"
            className="text-decoration-none"
            ><li>+33(0)4 590 105</li></a>
            <a href="#" target="_blank"
            className="text-decoration-none"
            ><li>Contact us</li></a>
          </ul>
        </div>   
      </div>
    </div>

    )
}

export default Footer

{/*I can omit the return statement and curly braces when I am using arrow function */}