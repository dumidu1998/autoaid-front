import React, { useState } from 'react'
import axios from 'axios';
import { getCookie } from '../../../jsfunctions/cookies';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function RepairListCheckBox(props) {
    const [checkOrNon, setcheckOrNon] = useState(props.entry.serviceEntryStatus == 'COMPLETED' ? true : false);
    const history = useHistory();

    var config = {
        headers: {
            'Authorization': 'Bearer ' + getCookie('token'),
        }
    }

    function checkSubCat() {
        setcheckOrNon(!checkOrNon);
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/technician/complete/subcat`,
            {
                "repairId": props.repairId,
                "subCatId": props.entry.subCatId
            }
            , config)
            .then(function (response) {
                console.log(response.data);
                toast.success('✔ ' + response.data, {
                    onClose: () =>
                        axios.post(`${process.env.REACT_APP_API_BASE_URL}/technician/repair/complete`,
                            {
                                "repairId": props.repairId,
                                "sectionName": props.sectionName
                            }, config)
                            .then(function (responseComplete) {
                                console.log(responseComplete.data);
                                axios.get(`${process.env.REACT_APP_API_BASE_URL}/technician/repair/findnext/${props.repairId}`, config)
                                    .then(function (responseEnd) {
                                        console.log(responseEnd.data);
                                        toast.success('✔ ' + responseEnd.data, { onClose: () => history.push('/technician/dashboard') });

                                    })
                                    .catch(function (error) {
                                        console.log(error.response.data);

                                    })
                                toast.success('✔ ' + responseComplete.data);

                            })
                            .catch(function (error) {
                                console.log(error.response.data);

                            })
                });
            })
    }

    return (
        <div>
            <div className="bg-white p-3 shadow-xl rounded-lg w-96 px-2 mb-5">
                <div className="flex justify-between w-10/12 items-center">
                    <div>
                        <h1 className="font-primary font-semibold text-lg mt-2 ml-7">{props.entry.subCatName}</h1>
                        <span className="font-primary font-medium text-base text-gray-500 ml-7">
                            {props.entry.estimatedTime + "mins"}
                        </span>

                    </div>
                    <label class="inline-flex items-center mt-3">
                        <input type="checkbox" onChange={(e) => { checkSubCat(); }} class="form-checkbox h-6 w-6 text-green-600" checked={checkOrNon} />
                    </label>
                </div>
            </div>

        </div>
    )
}
