import React from 'react'
import { Formik, Field, Form } from 'formik';
export default function AddSlotBtn() {
    return (
        <div>
            <Formik>
                <Form>
                    <div className="flex flex-col lg:flex-row justify-center items-center sm:mt-10">
                        <button className="text-white font-medium  bg-gradient-to-r from-red-400 to-yellow-500 px-4 py-2 rounded-lg w-64 md:w-32 lg:text-lg">Add Slots</button>
                        <div className="">
                            <div className="mt-2 lg:mt-0 lg:ml-6">
                                <Field id="soltName" name="slotName" placeholder="Slot Name" className="  rounded-lg shadow-lg w-64 h-10 pl-5" />
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>                
        </div>
    )
}
          