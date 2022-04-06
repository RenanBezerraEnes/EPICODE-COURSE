import { Component } from "react";

class SearchBar extends Component {
    render() {
        return (
            
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{width: 500}}/>
            <button class="btn btn-outline-light font-weight-bold my-2 my-sm-0" type="submit">Search</button>
            </form>
            
        )
    }
}

export default SearchBar;