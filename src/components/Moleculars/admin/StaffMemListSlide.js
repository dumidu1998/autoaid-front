import React, { Component } from 'react';
import StaffMemListId from '../../Atoms/admin/StaffMemListId';
import StaffMemListManageBtn from '../../Atoms/admin/StaffMemListManageBtn';
import StaffMemListName from '../../Atoms/admin/StaffMemListName';
class StaffMemListSlide extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="flex flex-col bg-white shadow-xl rounded-xl p-2 m-4">
                    <div className="flex justify-between items-center mx-4 w-48">
                        <StaffMemListId idNum={this.props.idNum}/>
                        <StaffMemListManageBtn link={"/"+this.props.idNum}/>
                    </div>
                    <div className="flex justify-start ml-3">
                        <StaffMemListName userName={this.props.userName}/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default StaffMemListSlide;
