import { useState } from "react"
import Header from "../layouts/header"
import data from "../data/data.json"

const Add = ()=>{
    const [expenses, setXpense] = useState(data);
    const [item, setItem] = useState('');
    const [cost, setCost] = useState('');
    const [theDate, setDate] = useState('')

    const save = (e) => {
        e.preventDefault();

        const newX = {
            item: item,
            theDate: theDate,
            cost: cost
        } 
        setXpense([...expenses, newX])
    }
  

    return(
        
        <div className="h-screen w-screen bg-emerald-200">  
            <Header/>
            <div className="flex gap-4 p-6 justify-center">
                <section>
                    <label>Item</label>
                    <input type="text" onChange={(e) => setItem(e.target.value)}/>
                </section>
                <section>
                    <label>Cost</label>
                    <input type="" onChange={(e) => setCost(e.target.value)}/>
                </section>
                <section>
                    <label>Date</label>
                    <input type="date" onChange={(e) => setDate(e.target.value)}/>
                </section>
                <button onClick={save}>save</button>
            </div>
            <div className="flex gap-4 p-6 justify-center">
                <ol className="grid gap-4">
                    {expenses.map((saved) =>
                        <li className="flex justify-between">
                            {saved.item}
                            {saved.cost}
                            {saved.date}
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Add