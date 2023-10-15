import React from 'react'

const PracticeArea = () => {
    const list = [
        { num: "01", title: "Personal Injury" },
        { num: "02", title: "Offshore Injury" },
        { num: "03", title: "Product Liability" },
        { num: "04", title: "Industrial Injury" },
        { num: "05", title: "Medical Injury" },

    ]
    return (
        <div className=' mt-4 mb-4 lg:mt-20 p-4 lg:p-10 w-full'>
            <p className='text-center font-medium text-xl py-10 border-b-2'>OUR PRACTICE AREA</p>
            <ul>
                {list.map((item) => (
                    <li className='flex items-center justify-between py-8 lg:py-10 border-b-2 cursor-pointer list'>
                        <span className='text-4xl text-gray-400'>{item.num}</span>
                        <span className='font-semibold uppercase text-xl lg:text-7xl'>{item.title}</span>
                        <span className=''>
                        <i className="fa-solid fa-arrow-up rotate-45 text-gray-400 text-4xl"></i>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PracticeArea