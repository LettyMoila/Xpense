import { useNavigate } from "react-router-dom"
import Header from "../layouts/header";

const Home = () =>{
    const navi = useNavigate();

    const status = (()=>{
        navi('/Stats')
    });

    const add=(()=>{});

    return(
        <div className="h-screen w-screen bg-emerald-200">
            <Header/>
            <section className="flex gap-16 p-10 justify-center items-center h-4/5">
                <div className="h-80 w-80 bg-emerald-100 rounded-md">add</div>
                <div onClick={status} className="h-80 w-80 bg-emerald-100 rounded-md">view</div>
                <div className="h-80 w-80 bg-emerald-100 rounded-md">search</div>
            </section>
            
        </div>
    )
}

export default Home
