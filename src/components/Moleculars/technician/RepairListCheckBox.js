import React from 'react'

export default function RepairListCheckBox(props) {
    return (
        <div>
            <div className="bg-white p-3 shadow-xl rounded-lg w-96 px-2 mb-5">
                <div className="flex justify-between w-10/12 items-center">
                    <div>
                        <h1 className="font-primary font-semibold text-lg mt-2 ml-7">{props.title}</h1>
                        <span className="font-primary font-medium text-base text-gray-500 ml-7">
                            {props.time}
                        </span>

                    </div>
                    <label class="inline-flex items-center mt-3">
                        <input type="checkbox" class="form-checkbox h-6 w-6 text-green-600" />
                    </label>
                </div>
            </div>
        </div>
    )
}
