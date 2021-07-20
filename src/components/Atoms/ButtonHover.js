import React from 'react'
import Jump from 'react-reveal/Jump';

export default function ButtonHover(props) {
    return (
        <div>
            <Jump>
                <button type="button" disabled={props.disableBtn} onClick={props.clickaction} className="w-32 h-10 rounded-md font-primary bg-gradient-to-br bg-primary-0 hover:from-primary-0 hover:to-Secondary-0">
                    {props.txt}
                </button>

            </Jump>
        </div>
    )
}
