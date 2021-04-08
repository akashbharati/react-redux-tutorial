import React from 'react'
import Form from './Form.js';
import List from "./List.js";
import Post from './Post.js';

const App = ()=>{
    return <>
    <div>
        <h2>Articles</h2>
        <List/>
    </div>
    <div>
        <h2>Add a new article</h2>
        <Form/>
    </div>
    <div>
        <h2>Api Posts</h2>
        <Post/>
    </div>
    </>

}


export default App;