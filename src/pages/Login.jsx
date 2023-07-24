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

                <div className='p-4 h-4/5'>
                    <form className='grid gap-6 h-full'>
                        <div className=''> 
                            <label>username</label><br/>
                            <input type='text' />
                        </div>
                        <div className=' '>
                            <label>password</label> <br/>
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
                            <hr/>
                        <div>
                            <h1>continue with:</h1>
                        </div>
                    </form>
                </div>
            </section>
            <section className="h-full w-2/5 bg-emerald-500 text-white p-10 grid ">
                <h1>New Here?</h1>
                <hr />
                <p>Sign up and discover great amount of effective spending</p>
                <button onClick={handleOnClick} className="bg-emerald-500 border-2 border-white rounded-2xl">sign up</button>
            </section>
            

        </div>
    )
}

export default Login
