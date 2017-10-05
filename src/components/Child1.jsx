import React, { Component } from 'react';
import { addValue } from "../actions";
import { connect } from 'react-redux';

export class Child1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    add(){
        this.props.addValue(this.state.text);
    }

    render() {
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input
                        style={{marginRight: '20px', width: '550px'}}
                        id="input-field"
                        type="text"
                        placeholder="Title"
                        className="form-control"
                        onChange={(event) => {this.setState({text: event.target.value})}}
                    />
                    <button
                        className="btn btn-success"
                        onClick={() => {this.add()}}
                    >
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, { addValue })(Child1);
