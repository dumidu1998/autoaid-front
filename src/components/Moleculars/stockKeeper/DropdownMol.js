import axios from 'axios';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react';
import SectionSelectNavbar from '../../Atoms/stockKeeper/SectionSelectNavbar';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function DropdownMol(props) {

    const [list, setList] = useState([
        { categoryId: 0, categoryName: "All" },
        { categoryId: 1, categoryName: "A/C" },
    ])

    const [highBtn, setHighBtn] = useState(list[0].categoryId);
    useEffect(()=>{props.setitemCategory(highBtn) }, [highBtn]);
    // console.log("Child-"+highBtn);
    

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/inventory/categories`)
        .then(res => {
            // setshow("hidden");
            // window.document.getElementById("name")=res.data.itemName;
            setList(res.data);
           console.log(list);
        }
        ).catch(err => {
            console.log(err);
        })
    }, [])


    return (
        <div>

            
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Options
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-100 scale-95"
                >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* {list.map(btn => <SectionSelectNavbar setHighBtn={setHighBtn} highBtn={highBtn} key={btn.categoryId} name={btn.categoryName} id={btn.categoryId} /> )} */}
                    <div className="py-1">
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                            {/* {list.map(btn => <SectionSelectNavbar setHighBtn={setHighBtn} highBtn={highBtn} key={btn.categoryId} name={btn.categoryName} id={btn.categoryId} /> )} */}
                            </a>
                        )}
                        </Menu.Item> 
                        {/* <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                            Support
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                            License
                            </a>
                        )}
                        </Menu.Item>
                        <form method="POST" action="#">
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                type="submit"
                                className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block w-full text-left px-4 py-2 text-sm'
                                )}
                            >
                                Sign out
                            </button>
                            )}
                        </Menu.Item>
                        </form> */}
                    </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            
        </div>
    )
}
