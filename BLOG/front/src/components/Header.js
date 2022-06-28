import React, { useEffect } from "react";
import { Navbar, Container,Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



const Header = ({button}) => {


    const navigate= useNavigate();
    const [showBtn,setBtn] = React.useState(true);
    
    useEffect(()=>{setBtn(button)},[])
    
    const postBtn = () =>{
        console.log("버튼이 눌림");
        navigate('/post');
    }

    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Container fluid>
                    <Navbar.Brand href="/">Jaewon's Blog</Navbar.Brand>
                    <div className="post-btn">
                        {showBtn ? <Button variant="dark" onClick={postBtn}>Post</Button> :null}
                    </div>
                </Container>
            </Navbar>
        </div >

    )
}

export default Header;