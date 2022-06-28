import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

const UpdatePage = () => {
    const navigate = useNavigate();
    const id = useParams().id
    const [post, setPost] = useState({
        title: '',
        content: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/readpost/${id}`).then((res) => {
            const title = res.data[0].title
            const content = res.data[0].content
            setPost({
                ...post,
                title: title,
                content: content
            })
        })
    }, [])

    const getValue = (e) => {
        // const { name, value } = e.target
        const name = e.target.name;
        const value = e.target.value;
        setPost({
            ...post,
            [name]: value
        })
    }
    const update = () => {
        axios.put(`http://localhost:8000/api/updatepost/${id}`, {
            title: post.title,
            content: post.content
        }).then(() => {
            alert('수정되었습니다')
            navigate(`/post/${id}`)
        })
    }

    return (
        <div>
            <Header button={true}/>
            <Container className="update-container">
                <Row>
                    <div>
                        <input classname='input-title' type='text' name="title" value={post.title} onChange={getValue}></input>
                    </div>
                    <div>
                        <textarea classname='input-content' name="content" value={post.content} onChange={getValue}></textarea>
                    </div>
                    <div>
                        <button className="submit-btn" onClick={update}>수정하기</button>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default UpdatePage;