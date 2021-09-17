import React from 'react'

export default function SearchBarVehicle() {
    return (
        <div className="w-full flex justify-center mt-8">
            <div class="bg-white shadow p-4 flex w-8/12 lg:w-9/12 xl:w-8/12 rounded-lg">
                <input class="focus:bg-Background-0 focus-border-none rounded w-9/12  p-2 font-primary py-2 px-12 border-0 border-b-2" type="text" placeholder="Vehicle Number (PC-4078)" />
                <button class="bg-gradient-to-r from-red-400 to-yellow-500 rounded text-white p-2 pl-4 pr-4 ml-8 w-20 md:w-32 lg:w-40 xl:w-56">
                <p class=" font-primary font-semibold lg:text-lg">Search</p>
                </button>
            </div>
        </div>
    )
}
