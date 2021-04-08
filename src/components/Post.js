import React,{useEffect} from 'react'
import {connect} from "react-redux";
import {getData} from "../js/actions"


function mapStateToProps(state){
    return {articles:state.remoteArticles.slice(0,10)}
}
const Post = ({articles,getData})=>{

    useEffect(() => {
            getData();
    }, []);

    return <ul>
        {articles.map(item=><li key={item.id}>{item.title}</li>)}
    </ul>;
}



export default connect(mapStateToProps,{getData})(Post);
