import React, {Component} from 'react';
import { connect } from 'react-redux';

export class Child2 extends Component{
    render() {
        const { values } = this.props;
        return(
            <ul className="list-group col-sm-4">
                {
                    values.map((value) => {
                        return (
                            <li className="list-group-item">
                                <div className="list-item">
                                    <strong>{this.props.values.indexOf(value)+1}.   {value.text}</strong>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        values: state
    }
}

export default connect(mapStateToProps, null)(Child2)
