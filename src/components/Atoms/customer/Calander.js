import React from 'react'
// import 'moment/locale/it.js';
// import DateBirth from '@bit/upsideodev-ui.test.date-birth';

export default function Calander() {
    const date = '2015-06-26' // or Date or Moment.js
    let onChange = (jsDate, dateString) => {
        // ...
      }
    return (
        <div>
        {/* <div>
            <DatePickerInput
            onChange={onChange}
            value={date}
            className='my-custom-datepicker-component'
            
            />
            <DatePicker onChange={onChange} value={date} />
        </div> */}
        {/* <DateBirth date="1 july 2011"/> */}
        </div>
    )
}



