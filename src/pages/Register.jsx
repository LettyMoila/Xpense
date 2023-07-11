const Register = () =>{
    return(
        <div className="bg-emerald-200 h-screen w-screen">
            <section>
                <h1 className="text-4xl">signup here</h1>
                <div className="grid grid-cols-4">
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
                </div>
            </section>
        </div>
    )
}

export default Register
