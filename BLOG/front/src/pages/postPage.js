import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import "./postPage.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostPage = () => {

    const [newpost, setNewpost] = useState({
        title: '',
        content: ''
    })
    const getValue = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        
        const name = e.target.name;
        const value = e.target.value;
        // const[name,value] = e.target;
        setNewpost({
            ...newpost,
            [name]: value
        })
        console.log(newpost)
    }

    const navigate = useNavigate()

    const submit = () => {
        const {title,content} = newpost;
        axios.post('http://localhost:8000/api/createpost',{
            title: title,
            content: content
        }).then(()=>{
            alert('글이 등록되었습니다.')
            navigate(`/`)
        })
    }

    return (
        <div>
            <Header button={false}/>
            <Container className="post-container">
                <Row>
                    <div>
                        <input classname='input-title' type='text' placeholder="제목을 입력하시오" name="title" onChange={getValue}></input>
                    </div>
                    <div>
                        <textarea classname='input-content' placeholder="본문을 작성해주세요" name="content" onChange={getValue}></textarea>
                    </div>
                    <div>
                        <button className="submit-btn" onClick={submit}>글작성</button>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default PostPage;