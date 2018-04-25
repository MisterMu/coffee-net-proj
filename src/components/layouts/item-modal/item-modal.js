import React from 'react';
import './item-modal.scss';

export class ItemModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    render(){
        if(this.props.detail){
            console.log(this.props.detail)
             return (
                <div clssName='item-modal'>
                <h3>{this.props.detail.name}</h3>
                <p>{this.props.detail.price}</p>
                </div>
            );
        }
        else return null;
    }
}