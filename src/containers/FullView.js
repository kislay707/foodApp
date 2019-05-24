import React, {Component} from 'react';
import * as utils from '../utils/utils.js';
import PlayCards from './Playcards.js';
import TopBar from './Topbar.js';

class FullView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }


    renderImage = () => {
        //const style = {color: "red"};
        const item = this.props.item
        if(item) {
            return (
                <div>
                    <img src={this.props.item.image}></img>
                </div>
            );
        }

    }
    renderNamePrice = () => {
        const item = this.props.item
        if(item) {
            return (
                <div>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button>Add</button>
                </div>
              );
        }
    }

    renderCategory = () => {
        const item = this.props.item
        if(item) {
            return (
                <div>
                    <div>{item.category}</div>
                    <div>{item.rating}</div>
                    <div>DETAILS</div>
                    <div>{item.details}</div>
                </div>
              );
        }
    }

    render() {
        return (
            <div>
                <div onClick={this.props.goBack}>Go Back</div>
                {this.renderImage()}
                {this.renderNamePrice()}
                {this.renderCategory()}
            </div>
        ) ;
    }
}

export default FullView;