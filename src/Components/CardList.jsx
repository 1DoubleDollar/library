import './cardList.css'
import { useState } from 'react'
const CardList = ({name,author,pages,onRemove}) =>{
    const [read, setRead] = useState('Unread')
    const [color, setColor] = useState('yellow')
    const [text, setText] = useState('black')
    
    function setAction(action) {
        
        if(action==='Readed'){
            setRead('Unread')
            setColor('yellow')
            setText('black')
        }
        else{
            setRead('Readed')
            setColor('green')
            setText('white')
        }
           
    }

    return(
        <div className="card">
            
                <div> Name = {name}</div>
                <div>Author = {author}</div>
                <div>Pages = {pages}</div>
                <div className="button" >
                    <button className= "removeButton" onClick={()=>{onRemove(name)}}>Remove</button>
                    <button className = "readButton" onClick = {()=>{setAction(read) }} style={{backgroundColor: color, color : text}}>{read}</button>
                </div>
                
        </div>

    )
}

export default CardList