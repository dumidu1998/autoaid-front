import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import TechniciansDropDown from '../technician/TechniciansDropDown'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

  function click(e) {
    console.log(e.getMonth() + 1)
    console.log(e.getDate())
    console.log(e.getFullYear())
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
          <div className="min-h-screen w-1/3 px-4">
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
                  Book Now
                </Dialog.Title>
                <div className="my-5 text-left">
                  <div >
                    <form>
                      <div className="mt-5">
                        <div>
                          <Calendar
                            onChange={onChange}
                            value={value}
                            onClickDay={click}
                            minDate={new Date()}
                            className="shadow-lg border-0 rounded-lg border-white"
                          />
                        </div>

                      </div>
                      <div className="mt-5">
                        <h1 className="font-primary  text-md font-semibold"> Time</h1>
                        <input type="time" name="name" className=" rounded-lg shadow-lg h-10 w-60" value="a" />

                      </div>
                      <div className="mt-5">
                        <h1 className="font-primary  text-md font-semibold "> Vehicle No</h1>
                        <TechniciansDropDown />


                      </div>

                      <div className="mt-5">
                        <h1 className="font-primary  text-md font-semibold"> Service Advisor</h1>
                        <TechniciansDropDown />

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