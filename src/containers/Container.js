import React, {Component} from 'react';
import * as utils from '../utils/utils.js';
import Favourites from './Favourites.js';
import Search from './Search.js';
import Category from './Category.js';
import FullView from './FullView.js';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                recipes : null,
                selected : null
            },
            count: 0,
            selected : false

        }
        this.playing = false;
    }

    componentDidMount() {
        utils.getData().then((data) => {
            let info = JSON.parse(data);
            this.setState({
                info : info
            });
        })
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleImageClick  = (index) => {
        this.setState({
            selected: this.state.info.recipes[index]
        })
    }

    handleCategoryClick  = (index) => {
        this.setState({
            curCategory: this.state.info.categories[index].name
        })
    }

    handleSearch = (value) => {
        let recipes = this.state.info.recipes;
        let searchList = [];

        if(value.length === 0) {
            this.setState({
                searchList: null
            })
            return;
        }
        for(var i =0; i< recipes.length; i++) {
            if (recipes[i].name.includes(value)) {
                searchList.push(recipes[i]);
            }
        }
        this.setState({
            searchList: searchList
        })
    }

    goBack = () => {
        this.setState({
            selected: false
        })
    }

    renderView = () => {
        if (this.state.selected) {
            return (
                <FullView item={this.state.selected} goBack={this.goBack}></FullView>
            );
        } else {
            return (
                <div>
                <Favourites recipes={this.state.info.recipes} count={this.state.count}></Favourites>
                <Search handleSearch ={this.handleSearch}></Search>
                <Category searchList={this.state.searchList} categories={this.state.info.categories} recipes={this.state.info.recipes} handleClick={this.handleClick} handleImageClick={this.handleImageClick} handleCategoryClick={this.handleCategoryClick} curCategory={this.state.curCategory}></Category>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1 id="title" className="header"> Best Food App</h1>
                {this.renderView()}
            </div>
        );
        
    }
}

export default Container;