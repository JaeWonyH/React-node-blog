import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../components/Header';
import {Link} from 'react-router-dom';


const Home = () => {
    const [postlist,setPostlist] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/readpostlist').then((res)=>{
            setPostlist(postlist.concat(res.data))
            // console.log(res);
        })
    },[])

    return (
        <div className='main'>
            <Header button={true}/>
            <div className='post-list'>
                <Row>
                    <ul>
                        {postlist.map(post =><Link to={{pathname:`/post/${post.id}`}} key={post.id}><li>{post.title}</li></Link>)}
                    </ul>
                </Row>
            </div>
        </div>
    )
}

export default Home;