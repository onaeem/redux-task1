import React, {Component} from 'react';
import Child1 from './Child1';
import Child2 from './Child2';



export default class Parent extends Component{
    render() {
        return(
            <div
                className="container"
                style={{display: 'center', padding: '50px'}}
            >
                <Child1/>
                <Child2/>
            </div>
        )
    }
}