import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetail from './DishdetailComponent';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }

        console.log("Main component : constructor called");


    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }


    componentDidMount() {
        console.log("Main component : Did Mount called");

    }

    componentDidUpdate() {
        console.log("Main component : Did Update called")
    }

    render() {
        console.log("Main component : render called");
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></DishDetail>
            </div>
        );
    }



}

export default Main;