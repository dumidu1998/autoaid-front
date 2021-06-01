import React from 'react'
import RoundContainer from './RoundContainer'

export default function TestominialContainer(props) {
    return (
        <div>
            <div className="w-72 h-80 bg-forth-0 p-7 rounded-lg">
                <div className="text-white">

                    <RoundContainer heading={props.heading} paragraph={props.paragraph} img="/imgs/icons/diognize.png" />
                </div>
            </div>
        </div>
    )
}
