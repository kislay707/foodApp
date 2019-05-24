import React, {Component} from 'react';
import * as utils from '../utils/utils.js';
import PlayCards from './Playcards.js';
import TopBar from './Topbar.js';
import style from "../css/style.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : "Search for a particular dish or ingredient"
        }
    }

    componentDidMount() {
    }

    handleChange = (evt) => {
        this.setState({
            value : ""
        });
        this.setState({
            value : evt.target.value
        });
        this.props.handleSearch(evt.target.value);
    }

    renderSearchBox = () => {

        return (
            <div>
                <input value={this.state.value} className="inputBox" onChange={this.handleChange}></input>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.renderSearchBox()}
            </div>
        ) ;
    }
}

export default Search;