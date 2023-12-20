import CardList from "./CardList.jsx"
import {useState} from 'react'
import './section.css'

function Section(){
    const [showForm, setShowForm] = useState(false)
    const [input, setInput] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [cards,setCards] = useState([])
    const handleForm =()=>{
        
        setShowForm(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input == '' || author=='' || pages=='') {alert("Please enter");}
        else{
        setCards([...cards, {input, author, pages}]);
        setInput('');
        setAuthor('');
        setPages('');
        setShowForm(false);
        }
    };
    const handleCancel = ()=>{
        setShowForm(false);
    }

    const handleRemove =(name)=>{
        setCards(cards.filter(card =>card.input != name))
    }
    
    return(
        <div className="section">
        
            <button onClick={handleForm}>+ Add Book</button>
            {
                showForm && 
                (
                    <div className="cardForm">
                    
                    <label > Name: 
                    <input type = "text" value = {input} onChange={(e)=>setInput(e.target.value)}/>
                    </label>
                    <label> Author:
                        <input type = "text" value = {author} onChange={(e)=>setAuthor(e.target.value)}/>
                    </label>
                    <label> Pages:
                        <input type = "text" value = {pages} onChange={(e)=>setPages(e.target.value)}/>
                    </label>                        
                        <div className="formButton">
                        <button id="button" className="submitButton" type = "submit" onClick={handleSubmit}>Submit</button>
                        <button id="button" className="cancelButton" onClick={handleCancel} >Cancel</button>
                        </div>
                    </div>
                )

            }
            <div className="sectionCard">
            {cards.map((card,key)=> <CardList key = {key} name = {card.input} author = {card.author} pages = {card.pages} onRemove = {handleRemove} />)}
            </div>
        </div>
    )
}
export default Section