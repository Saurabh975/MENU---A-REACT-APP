import { Navbar, NavbarBrand } from "reactstrap"
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import React, { Component } from 'react';
import DishDetail from "./DishdetailComponent"

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        })
    }
    dishDetail(dishID) {
        // console.log(dishID)
        if (dishID != null) return <DishDetail dish={this.state.dishes.filter((dish) => dishID === dish.id)[0]} />
        else return <div></div>

    }
    render() {

        return (
            <div className="App">
                <Navbar dark color="primary">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                {this.dishDetail(this.state.selectedDish)}
            </div>
        );
    }
}