import { Component } from "react";

class NavbarClass extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar">
          <a className="navbar-brand" href="#">
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto align-items-center">
            <div className="d-flex">
            <li className="nav-item active d-flex">
                <img src="https://cdn.dribbble.com/users/826047/avatars/small/250ff13f559303ec0feb6252faabac2d.png?1648034130" alt="nft" 
                className="App-logo rounded-circle"
                style={{height: "40px"}}
                />
                <span className="font-weight-bold align-self-center mr-5 ml-3">NFT MARKET</span>
              </li>
              </div>
              <div className="d-flex">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Auctions
                </a>
              </li>
              <li className="nav-item" href="#">
                <a className="nav-link">Roadmap</a>
              </li>
              <li className="nav-item" href="#">
                <a className="nav-link">Discover</a>
              </li>
              <li className="nav-item" href="#">
                <a className="nav-link">Community</a>
              </li>
              </div>
            </ul>
              
              <button
                className="btn btn-outline-light font-weight-bold mr-4"
                type="submit"
              >
                Contact
              </button>
              <button
                className="btn btn-outline-light font-weight-bold my-2 my-sm-0"
                type="submit"
              >
                My account
              </button>
            
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarClass;
