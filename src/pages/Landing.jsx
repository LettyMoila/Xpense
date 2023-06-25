import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/Expense-logo.png'

const Landing = () =>{

    function handleClick(){
        window.location.href = '/Register';
    }
    return(
        <div className="flex h-full">
            <div className="w-1/2 h-full bg-emerald-500">
                <section className="flex w-full h-24 p-1.5">
                    <img src={logo} className="w-10 h-10"/>
                    <h1 className="text-left pl-3 text-3xl">Xpense</h1>
                </section>
                <section className="my-36 w-3/4">
                    <p className="text-left pl-1.5">Get a clear full view of your spendings and know where to save. Xpense
                        is your "tip of a finger away" financial planner.
                    </p>
                </section>
                <button className="my-3 rounded-2xl w-32 hover:ring-blue-500">Get started</button>
            </div>
            <div className="w-1/2 h-full bg-emerald-200">
                <section>
                    <Link to='/Login'>Login</Link>
                    <button onClick={handleClick}>Sign up</button>
                </section>
                <section className="my-28 w-3/4 h-80 bg-white ml-14 rounded-lg rotate-12">
                    healthy spending
                </section>
            </div>
        </div>
    )
}

export default Landing
