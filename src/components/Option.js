import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Option extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diff: '1'
        }
    }

    onChangeDiff = (e) => {
        
        const {value} = e.target;
        
        if ((value) ==='') {
            this.props.onUpdateDiff(parseInt(0));
            this.setState({
                diff: 0
            });
            return;    
        }

        this.props.onUpdateDiff(parseInt(value));
        this.setState({
            diff: value
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.diff}
                    onChange={this.onChangeDiff}/>
            </div>
        )
    }
}

let mapDispatchToProps = dispatch => {
    return {
        onUpdateDiff: value => dispatch(setDiff(value))
    }
}

export default connect(undefined, mapDispatchToProps)(Option)