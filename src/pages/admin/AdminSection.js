import React from 'react'
import GoBtn from '../../components/Atoms/GoBtn'
import SectionCardsHeadings from '../../components/Atoms/serviceStation/SectionCardsHeadings'
import SectionsCardsTechnisianInchage from '../../components/Atoms/serviceStation/SectionsCardsTechnisianInchage'
import AdminSideBar from '../../components/Moleculars/admin/AdminSideBar'

export default function AdminSection() {
    return (
        <div className="relative bg-Background-0">
            <AdminSideBar name="DashBoard " roleName="Admin"/>
            <div className="w-10/12 absolute top-40 right-10">
                <div className="font-primary text-2xl font-medium ml-6">Section</div>
                <div className="flex justify-between mt-6">
                    <div className="bg-white w-5/12 rounded-lg shadow-2xl p-6">
                        <div className="text-xl font-primary font-medium flex justify-center items-center">General Repair </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <SectionCardsHeadings heading="Total No of Slots" count="5" class="font-medium ml-12    "/>
                                <SectionCardsHeadings heading="Free Slots" count="5" class="font-bold text-green-500"/>
                                <SectionCardsHeadings heading="Occupied Slots" count="5" class="font-bold text-red-600"/>
                            </div>
                            <div>
                                <SectionsCardsTechnisianInchage technician="Amod Pathi"/>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-center items-center"><GoBtn btnName="Go"/></div>
                    </div>
                    <div className="bg-white w-5/12 rounded-lg shadow-2xl p-6">
                        <div className="text-xl font-primary font-medium flex justify-center items-center">Engine Repair </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <SectionCardsHeadings heading="Total No of Slots" count="5" class="font-medium ml-12    "/>
                                <SectionCardsHeadings heading="Free Slots" count="5" class="font-bold text-green-500"/>
                                <SectionCardsHeadings heading="Occupied Slots" count="5" class="font-bold text-red-600"/>
                            </div>
                            <div>
                                <SectionsCardsTechnisianInchage technician="Amod Pathi"/>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-center items-center"><GoBtn btnName="Go"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
