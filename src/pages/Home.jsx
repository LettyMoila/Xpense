import { useNavigate } from "react-router-dom"
import Header from "../layouts/header";

const Home = () =>{
    const navi = useNavigate();

    const status = (()=>{
        navi('/Stats')
    });

    const add=(()=>{
        navi('/Add')
    });

    const search=(()=>{
        navi('/Search')
    });

    return(
        <div className="h-screen w-screen bg-emerald-200">
            <Header/>
            <section className="flex gap-16 p-10 justify-center items-center h-4/5 ">
                <div onClick={add} className="h-80 w-80 bg-emerald-100 rounded-md shadow-2xl">add</div>
                <div onClick={status} className="h-80 w-80 bg-emerald-100 rounded-md shadow-2xl">view</div>
                <div onClick={search} className="h-80 w-80 bg-emerald-100 rounded-md shadow-2xl">search</div>
            </section>
            
        </div>
    )
}

export default Home
