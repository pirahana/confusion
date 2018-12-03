import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';



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

        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></DishDetail> */}
                <Footer></Footer>
            </div>
        );
    }



}

export default Main;