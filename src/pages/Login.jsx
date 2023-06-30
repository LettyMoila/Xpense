import React from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/Expense-logo.png'

const Login = () =>{

    function handleOnClick(){
        window.location.href = '/Register';
    }

    return(
        <div className="h-screen w-screen flex">
            <section className="h-full w-3/5 bg-emerald-200">
                <div className='p-4'>
                    <Link to="/"><img src={logo} className="w-10 h-10"/> </Link>
                </div>

                <div className='p-4'>
                    <form className='grid gap-4'>
                        <div className='grid grid-rows-2'>
                            <label>username</label>
                            <input type='text' />
                        </div>
                        <div className='grid grid-rows-2'>
                            <label>password</label>
                            <input type='password' />
                        </div>
                        <div>
                            <Link>forgot password?</Link>
                            
                        </div>
                        <div>
                            <Link to="/Home">
                                <button className='bg-emerald-500 w-40 rounded-2xl'>sign in</button>
                            </Link>
                        </div>
                        <div>
                         <hr/>
                        </div>
                        <div>
                            <h1>continue with:</h1>
                        </div>
                    </form>
                </div>
            </section>
            <section className="h-full w-2/5 bg-emerald-500 text-white p-9">
                <h1>New Here?</h1>
                <hr />
                <p>Sign up and discover great amount of effective spending</p>
                <button onClick={handleOnClick} className="bg-emerald-500 border-2 border-white rounded-2xl">sign up</button>
            </section>
            

        </div>
    )
}

export default Login
