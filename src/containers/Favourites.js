import React, {Component} from 'react';
import * as utils from '../utils/utils.js';
import PlayCards from './Playcards.js';
import TopBar from './Topbar.js';
import style from "../css/style.css";

class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }


    renderTopBar = () => {
        const style = {color: "red"};
        return (
            <div>
                <h4>FAVOURITES</h4>
                <div style={style} className="cart">{this.props.count}</div>
                <div>Enjoy What you Have Been Doing</div>
                
            </div>
        );

    }
    renderFavourites = () => {

        if(this.props.recipes) {
            let list =  this.props.recipes.filter((recipe) => recipe.isFavourite);
            return (list.map((item, index) => (
                <div key={index} item={item} className="linkInfoOverlay">
                    <img src={item.image}></img>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button>REORDER</button>
                </div>
              )));
        }
    }
    render() {
        return (
            <div>
                {this.renderTopBar()}
                <div className="horizontalScroll">
                    {this.renderFavourites()}
                </div>
            </div>
        ) ;
    }
}

export default Favourites;