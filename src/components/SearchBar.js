import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions'; 

class SearchBar extends Component {
    
    state = { term : ''};

    onInputChange = event => {
        this.setState({ term : event.target.value})
    };

    onFormSubmit = event => {
        console.log("onFormSubmit")
        event.preventDefault();
        this.props.fetchVideos(this.state.term);
    };

    render () {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Search Videos</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { fetchVideos })(SearchBar);