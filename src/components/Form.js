import React, {useState} from 'react'
import {connect} from "react-redux";
import {addArticle} from "../js/actions/index"


const mapDispatchToProps = (dispatch)=>{
    return {
        addArticle: article=>dispatch(addArticle(article))
    }
}


const ConnectedForm = ({addArticle})=>{

    const [title, setTitle] = useState('');

    const handleChange = (e)=>{
        setTitle(e.target.value)
    }

    const handleSubmit = (e)=>{
        debugger;
        e.preventDefault();
        addArticle({title})
        setTitle("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>   
                 <input type="text" id="title" value={title} onChange={handleChange}/>
            </div> 
            <button type="submit">SAVE</button>
        </form>
    )
}

const Form = connect(null,mapDispatchToProps)(ConnectedForm);

export default Form;