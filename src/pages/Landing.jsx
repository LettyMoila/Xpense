import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/Expense-logo.png'

const Landing = () => {

    function handleClick(){
        window.location.href = '/Register';
    }
    return(
        <div className="flex h-screen w-screen">
            <div className="w-2/5 h-full bg-emerald-500 grid gap-4">
                <section className="flex w-full h-24 p-1.5">
                    <img src={logo} className="w-10 h-10"/>
                    <h1 className="text-left pl-3 text-3xl">Xpense</h1>
                </section>
                <section className="my-36 w-4/5 p-8 text-left">
                    <h1 className='text-5xl'>HAVE MORE MONEY! WHEN YOU BUDGET SMART</h1>
                    <p className="text-xl pt-4">Get a clear full view of your spendings and know where to save. Xpense
                        is the new "at the tip of your finger" financial planner.
                    </p>
                </section>
                <section>
                <button className="my-3 rounded-2xl w-32 hover:ring-blue-500">Get started</button>
                </section>
            </div>

            <div className="w-3/5 h-full bg-emerald-200 ">
                <section className="flex justify-between p-6">
                    <section>
                        <button className='rounded-full w-36 bg-emerald-200 border-2 border-emerald-500'> Hi there!</button>
                    </section>
                    <section className='flex gap-3'>
                        <Link to='/Login'>Login</Link>
                        <button className='rounded-full bg-emerald-500 w-24' onClick={handleClick} >Sign up</button>
                    </section>  
                </section>
                <section className='flex items-center justify-center h-5/6'>
                    <div className=" w-2/3 h-5/6 bg-white rounded-2xl rotate-12 p-4 grid gap-4">
                        <div className='flex justify-between'>
                            <h1 className='text-gray-300 text-lg'>your conversion</h1>
                            <h1 className='text-red-500 text-lg'>Xpense</h1>
                        </div>
                        <div className='text-4xl'>
                            <p>We do not promise this figure,
                                but we promise you 45%</p>
                        </div>
                        <div className='h-80 bg-[url("/src/assets/lineGraph.svg")] bg-cover bg-no-repeat'></div>
                        <div className=''>
                            <h1 className='text-4xl text-left pl-6'>+99,9%</h1>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Landing
