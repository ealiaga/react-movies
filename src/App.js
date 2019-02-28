import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import './App.css';
import { MovieList } from './components/MoviesList';
import { SearchForm } from './components/SearchForm';
import { Title } from './components/Title';



class App extends Component {
    state = {
        usedSearch: false,
        results: []
    }

    _handleResults = (results) => {
        this.setState({ results: results, usedSearch: true });
    }

    _renderResults = () => {
        return this.state.results.length === 0
                ? <p>Sorry!, results not found</p>
                : <MovieList movies={this.state.results} />
    }

    render() {
        return (
        <div className="App">
            <Title>Movies</Title> 
            <div className="SearchForm-wrapper">
                <SearchForm onResults={this._handleResults} />
            </div>
            {
                this.state.usedSearch 
                ? this._renderResults()
                : <small>Use the formto search a movie</small>
            }
            
        </div>
        );
    }
}

export default App;
