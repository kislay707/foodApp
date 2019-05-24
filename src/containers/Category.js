import React, {Component} from 'react';
import * as utils from '../utils/utils.js';
import PlayCards from './Playcards.js';
import TopBar from './Topbar.js';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curCategory : "Dessert"
        }
    }

    componentDidMount() {
    }

    handleRecipeClick = (evt) => {
        let id = evt.currentTarget.id;
        var elemIndex;
        name = this.list[id].name;
        for (var i =0; i< this.props.recipes.length; i++) {

            if (name === this.props.recipes[i].name) {
                elemIndex = i;
            }
        }
        this.props.handleImageClick(elemIndex);
    }

    handleCategoryClick = (evt) => {
        let id = evt.currentTarget.id;
        var elemIndex;
        let list = this.props.categories;
        name = list[id].name;
        for (var i =0; i< this.props.categories.length; i++) {

            if (name === this.props.categories[i].name) {
                elemIndex = i;
            }
        }
        this.props.handleCategoryClick(elemIndex);
    }

    renderDishes = () => {
        if(this.props.recipes) {
            let list =  this.props.searchList ? this.props.searchList : this.props.recipes.filter((recipe) => recipe.category === this.props.curCategory);
            this.list = list;
            return (list.map((item, index) => (
                <div key={index} item={item}>
                    <img src={item.image} id={index} onClick={this.handleRecipeClick}></img>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button onClick={this.props.handleClick}>ADD TO BAG</button>
                </div>
              )));
        }

    }

    renderCategories = () => {

        if(this.props.categories) {
            let list =  this.props.categories;
            return (list.map((item, index) => (
                <div key={index} item={item} className="linkInfoOverlay" >
                    <img src={item.image} className="imageCat" id={index} onClick={this.handleCategoryClick}></img>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                </div>
              )));
        }
    }
    render() {
        return (
            <div>
                <div>SELECT CATEGORIES</div>
                <div className="horizontalScroll">
                    {this.renderCategories()}
                </div>
                {this.renderDishes()}
            </div>
        ) ;
    }
}

export default Category;