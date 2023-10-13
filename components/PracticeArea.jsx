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
        <div className='mt-20 p-10'>
            <p className='text-center font-medium text-xl py-10 border-b-2'>OUR PRACTICE AREA</p>
            <ul>
                {list.map((item) => (
                    <li className='flex items-center justify-between py-10 border-b-2 cursor-pointer'>
                        <span className='text-4xl'>{item.num}</span>
                        <span className='font-semibold uppercase text-7xl'>{item.title}</span>
                        <span className=''>
                        <img width="25" height="25" className='rotate-45 fill-slate-400' src="/arrB.svg" alt="long-arrow-up" />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PracticeArea