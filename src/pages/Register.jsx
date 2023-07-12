import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Register = () =>{
    const navi = useNavigate();

    const create =(()=>{
        navi('/Home');
    })

    return(
        <div className="bg-emerald-200 h-screen w-screen">
            <section className="h-full p-4 grid items-center">
                <h1 className="text-9xl">signup here</h1>
                <div className="grid grid-rows-4 h-4/5 pt-6">
                    <section>
                        <label>Fullname</label><br/>
                        <input type="text"/>
                    </section>
                    <section>
                        <label>Email</label><br/>
                        <input type="email"/>
                    </section>
                    <section>
                        <label>Password</label><br/>
                        <input type="password"/>
                    </section>
                    <section>
                        <label>Confirm password</label><br/>
                        <input type="password"/>
                    </section>
                    <section>
                        <button onClick={create}>signup</button>
                        <div>
                            <label>Already have an account?</label>
                            <Link to={'/Login'}>Login</Link>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Register
