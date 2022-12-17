import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'
import { CiLocationOn } from 'react-icons/ci'
const SearchItem = () => {
    const [num,setNum] = useState(0)
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <div className=' rounded-xl lg:p-5 p-1'>
                <div>
                    <h1 className='text-center mt-2 flex gap-x-2 justify-center items-center lg:text-3xl text-2xl  font-bold'>Select Tests <BsArrowRight></BsArrowRight></h1>
                    <div className='flex gap-x-1 items-center justify-center my-1'>
                        <CiLocationOn className='w-6 h-6 text-primary font-semibold'></CiLocationOn>
                        <h1 className='lg:text-xl text-md'><span className='text-primary font-semibold'>Delhi</span> | Lab timing: 8 AM to 12 AM</h1>
                    </div>
                    <div className='lg:w-3/4 w-11/12 mx-auto relative'>
                        <input type="text" placeholder='Search here' className='lg:py-2 py-1 px-4 text-lg text-gray-700 rounded-lg w-full border border-gray-400 my-2' />
                        <GoSearch className='absolute w-6 h-6 right-5 lg:top-5 top-4'></GoSearch>
                    </div>
                </div>
                <div className=' lg:my-10 my-5 rounded-xl p-3'>
                    <h1 className='lg:text-2xl text-xl font-semibold'>Frequently booked tests</h1>
                    <div className='grid lg:grid-cols-2 gap-5 my-5'>
                        {
                            items.map(item => <div key={item.name} className="p-5 border rounded-xl  hover:shadow-xl hover:shadow-gray-300 hover:scale-105 shadow-md  duration-300 flex flex-col gap-y-2">
                                <div className='flex justify-between'>
                                    <h1 className='lg:text-xl text-lg font-semibold'>{item.name}</h1>
                                    <div className="form-control">

                                        <input type="checkbox" onClick={()=>setNum(num + 1)} onDoubleClick={()=>setNum(num-1)} className="checkbox checkbox-primary border-gray-400 checkbox-sm rounded-md" />

                                    </div>
                                </div>
                                <p >Panel type: <span className='font-semibold'>{item.type}</span></p>
                                <p >Report within: <span className='font-semibold'>{item.duration}</span></p>
                                {
                                    item.required && <p className='bg-secondary py-1 lg:px-3 px-1 rounded-lg lg:font-semibold font-normal lg:w-3/4 w-full'>{item.required}</p>
                                }
                                <div>
                                    <p>Name & no. of parameters: <span className='font-semibold'>{item.parameters}</span></p>
                                    <ul className='list-disc pl-7'>
                                        {
                                            item.tests.map(x => <li>{x}</li>)
                                        }
                                    </ul>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-primary'>View All Parameters</p>
                                        <p className='font-bold'>Rs. <span className='lg:text-3xl text-2xl'>{item.price}</span></p>
                                    </div>
                                </div>
                                <button className='lg:py-2 py-1 lg:px-5 px-2 bg-primary text-white font-semibold rounded-3xl lg:w-1/3 w-2/4 mx-auto hover:scale-105 hover:shadow-xl hover:shadow-gray-300 duration-300'>Book Now</button>
                            </div>)
                        }

                    </div>
                    <div className='lg:w-1/4 w-11/12 mx-auto '>
                        <button className='bg-primary text-white font-semibold py-2 px-6 text-lg rounded-3xl mt-5'>Add tests ({num} selected)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;