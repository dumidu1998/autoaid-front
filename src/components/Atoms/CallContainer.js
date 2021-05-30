import React from 'react'
import {HideBetween} from 'react-hide-on-scroll'

export default function CallContainer() {
    return (
        <div>
            <HideBetween inverse startDivID="start" endDivID="last">
                <div className=" fixed md:bottom-5 md:right-5 bottom-2 right-2">
                    <div className="md:w-14 md:h-14 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="md:w-14 md:h-14 w-9 h-9 rounded-full bg-white shadow-lg mt-5 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        
                    </div>

                </div>
            </HideBetween>

        </div>
    )
}
