import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row} from "react-bootstrap";
import { useParams , useNavigate} from "react-router-dom";
import Header from "../components/Header";

const DetailPage = () => {
    const id = useParams().id
    console.log(useParams().id)
    const [post,setPost] = useState({
        title: '',
        content: ''
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/readpost/${id}`).then((res)=>{
            console.log(res.data[0])
            const title = res.data[0].title
            const content = res.data[0].content
            setPost({
                ...post,
                title: title,
                content: content
            })
        })
    },[])

    const navigate = useNavigate();

    const movetoupdate = () => {
        navigate(`/update/${id}`)
    }

    const deletepost = () =>{
        if(window.confirm('정말로 삭제하시겠습니까?')){
            axios.delete(`http://localhost:8000/api/deletepost/${id}`).then(()=>{
                alert('삭제되었습니다')
                navigate('/')
            })
        }else{
            alert('취소되었습니다.')
        }
    }

    return (
        <div>
            <Header button={true}/>
            <Container className="detail-container">
                <Row>
                  <div>
                    <p>{post.title}</p>
                  </div>
                  <div>
                    <p>{post.content}</p>
                  </div>
                  <div className="btn-container">
                    <button className="update-btn" onClick={movetoupdate}>수정하기</button>
                    <button className="remove-btn" onClick={deletepost}>삭제하기</button>
                  </div>
                </Row>
            </Container>
        </div>
    )
}

export default DetailPage;