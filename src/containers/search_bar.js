import React, { Component } from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hightlightHero } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        var term = event.target.value;
        this.setState({ term });
        this.props.hightlightHero(term);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.hightlightHero('');
        this.setState({
            term: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="">
                <input
                    placeholder="type in hero name"
                    className=""
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                <span className="">
                    <button type="submit" className="">Clear</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ hightlightHero }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);