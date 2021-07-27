import React, { Component } from 'react';
class StaffManageNavbarHeadingBtns extends Component {
    state = {}
    highlightColor = () => {
        let color = "flex place-items-center justify-center bg-white w-full mx-3 shadow-xl rounded-xl h-16 px-4";
        return color;
    }
    render() {
        return (
            <div className={this.highlightColor()}>
                {/* <div className="flex items-center justify-center h-8 bg-gray-900 p-3 pb-4 rounded-xl"><div className="text-white  font-semibold">{this.props.btnName}</div></div> */}
                <button className="font-primary">{this.props.btnName}</button>
            </div>
        );
    }
}

export default StaffManageNavbarHeadingBtns;

// import React, { Component } from 'react';
// class StaffManageNavbarHeadingBtns extends Component {
//     state = {
//         count : 0,
//         color:"flex place-items-center justify-center w-full ml-3 mr-3 shadow-2xl rounded-xl h-16  ",
//       }
//     highlightColor=()=>{
//         let color="flex place-items-center justify-center bg-white w-full ml-3 mr-3 shadow-2xl rounded-xl h-16";
//         return color;
//     }
//     // checkNUm(){
//     //     const {count}=this.state;
//     //     return count !==0? count:"ZERO";
//     // }
//     // adjustColor(){
//     //     const {count}=this.state;
//     //     let color="text-xl ";
//     //     return count ===0? color+="bg-red-400":color+="bg-blue-300";


//     // }
//     // clickMe=(id)=>{
//     //     this.state.count=id;
//     //     this.setState({count:this.id})

//     // }
//     render() { 
//         return ( <>
//             <div className={this.state.color}>
//             {/* <div className="flex items-center justify-center h-8 bg-gray-900 p-3 pb-4 rounded-xl"><div className="text-white  font-semibold">{this.props.btnName}</div></div> */}

//             <button className="font-primary" >{this.props.btnName}</button>
//         </div>
//         <div className="">{}</div>
//         </>
//          );
//     }
// }

// export default StaffManageNavbarHeadingBtns;