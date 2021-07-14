import React from 'react'

export default function BottomNav() {
    return (
        <div>
            <div className=" flex items-center justify-center w-full rounded-t-3xl shadow-xl blur-lg h-16 bottom-0 backdrop-filter backdrop-blur-lg fixed bg-gradient-to-br from-white to-transparent md:hidden">
                <div className=" w-2/3 flex items-center justify-between  h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-Secondary-0 " viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-Secondary-0 " viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>

                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-Secondary-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            
        </div>
    )
}
