import React from 'react'
import FAQs from '../components/FAQs'

export default function FAQsPage() {
    return (
        <div className="md:px-4  ">
            <div className="container m-auto px-4 md:px-0">
                <div className="heading font-bold text-xl text-neutral-800 pt-6 md:pt-10 md:text-2xl text-center">Frequently asked Questions</div>
                <div className="faqs mt-7 sm:px-10 md:px-16 lg:px-20 xl:px-96 md:mt-10">
                    <FAQs />
                </div>
            </div>
        </div>
    )
}
