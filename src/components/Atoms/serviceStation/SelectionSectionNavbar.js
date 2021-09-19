import React, { Component } from 'react';
class SelectionSectionNavbar extends Component {
    state = {}
    highlightColor = () => {
        let color = "flex place-items-center justify-center bg-black w-full ml-3 mr-3 shadow-2xl rounded-xl h-16 text-sm font-semibold text-white";
        
        return color;
    }
    
    normalColor = () => {
        let color = "flex place-items-center justify-center bg-white w-full mx-3 shadow-xl rounded-xl h-16 px-4 text-sm font-semibold";
        return color;
    }
    render() { 
        return ( 
            <div className={this.props.highBtn === this.props.id ? this.highlightColor() : this.normalColor()}>
            {/* <div className="flex items-center justify-center h-8 bg-gray-900 p-3 pb-4 rounded-xl"><div className="text-white  font-semibold">{this.props.btnName}</div></div> */}
            <button onClick={() => this.props.setHighBtn(this.props.id)} className="font-primary">{this.props.name}</button>

        </div>
         );
    }
}
 
export default SelectionSectionNavbar;