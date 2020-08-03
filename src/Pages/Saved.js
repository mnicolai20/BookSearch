import React, { Component } from "react";
import API from "../utils/API";
import Card from "../Components/Card";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.savedBooks();
    };

    savedBooks() {
        API.savedBooks()
        .then( res => this.setState({
            books: res.data
        }))
        .catch(err => console.log(err));
    };

    render() {
        return(
            <Card />
        )
    }
}

export default Saved;