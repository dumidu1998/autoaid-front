import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import TechniciansDropDown from '../technician/TechniciansDropDown'

import SearchField from 'react-search-field';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)
  const [value, onChange] = useState(new Date());

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

 
  const [selected, setSelected] = useState(people[0])

  return (
    
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="w-40 h-14 rounded-lg shadow-lg bg-gradient-to-br from-primary-0 to-Secondary-0 m-5 flex items-center justify-center text-white font-bold text-xl">
          Book Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 w-screen z-40 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-lg"
          onClose={closeModal}
        >
          <div className=" h-5/6 w-9/12 px-4 mb-32">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
           
            
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex flex-col w-full  p-5 my-10 overflow-hidden text-center items-center transition-all transform bg-white shadow-xl rounded-2xl ">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-primary-0 font-primary text-center"
                >
                   Request Items
                </Dialog.Title>
                <div className="my-5 text-left">
                    <div >
                        <form>
                          <div className="mt-5 flex items-center justify-between">
                            <div>
                              
                                <SearchField
                                    placeholder='Search item'
                                    onChange={onChange}
                                    className="w-52"
                                    />
                                    {/* search bar */}

                                    <table class="table-auto">
                                                <thead>
                                                    <tr>
                                                    <th>Title</th>
                                                    <th>Author</th>
                                                    <th>Views</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>Intro to CSS</td>
                                                    <td>Adam</td>
                                                    <td>858</td>
                                                    </tr>
                                                    <tr class="bg-emerald-200">
                                                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                                    <td>Adam</td>
                                                    <td>112</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Intro to JavaScript</td>
                                                    <td>Chris</td>
                                                    <td>1,280</td>
                                                    </tr>
                                                </tbody>
                                                </table>
                             
                            </div>
                            <div>
                            <table class="table-auto">
                                                <thead>
                                                    <tr>
                                                    <th>Title</th>
                                                    <th>Author</th>
                                                    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>Intro to CSS</td>
                                                    <td>Adam</td>
                                                    
                                                    </tr>
                                                    <tr class="bg-emerald-200">
                                                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                                    <td>Adam</td>
                                                    
                                                    </tr>
                                                    <tr>
                                                    <td>Intro to JavaScript</td>
                                                    <td>Chris</td>
                                                    
                                                    </tr>
                                                </tbody>
                                                </table>
                            </div>

                          </div>
                        </form>
                    </div>
                    
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}