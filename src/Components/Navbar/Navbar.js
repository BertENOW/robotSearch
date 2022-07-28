import React, {Component} from "react";
import ReactDOM from 'react-dom/client';
import './Navbar.css'
import logo from '../../Assets/Images/logo_s.png'
import {Modal, Form, Button} from "react-bootstrap"

class Navbar extends Component{
    constructor(props){
        super(props)  
        this.state={
            register:false,
            login:false,
            reset_password:false
        } 
        this.props = props 
    } 
    openRegisterModal(){
        this.setState({register: true});
        
    }

    openLoginModal(){
        this.setState({login: true});
        
    }

    openResetModal(){
        this.setState({reset_password:true})
    }

    closeRegisterModal(){
        this.setState({register:false});
    };

    closeLoginModal(){
        this.setState({login:false});
    };

    closeResetModal(){
        this.setState({reset_password:false})
    }

    render(){
        const {register, login, reset_password} = this.state;
        return (
        <>
            <nav >
           <div className="flex items-center w-100">
                <div className="logo w-third" >
                    <a href="#home"><img alt='logo'src={logo} /></a>
                    
                </div>
                <div className="search w-third f3">
                    <input className="search br2 pv2" type="search" onChange={this.props.search_change}></input>
                </div>
                <div className="flex button w-third">
                    <button className="bg-green ma3 pv3 ph4 grow br2 f3" onClick={()=>this.openRegisterModal()}>Sign Up</button>
                    <button className="bg-blue ma3 pv3 ph4 grow br2 f3" onClick={()=>this.openLoginModal()}>Log In</button>    
                </div>
           </div>
        </nav>

        <Modal show={register} onHide={()=>this.closeRegisterModal()}>
            <Modal.Header closeButton>
                <h2>Register</h2>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="input" placeholder="First Name" autoFocus/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="input" placeholder="Last Name" autoFocus/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email ddress</Form.Label>
                        <Form.Control type="email" placeholder="example@xmail.com" required=""/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="m-foot">
                <p>Already have an account? <a href="#hi" onClick={()=>{this.closeRegisterModal(); this.openLoginModal()}}>Login</a></p>
                <Button variant = "primary">Register</Button>
            </Modal.Footer>

        </Modal>

        {/* login modal */}

        <Modal show={login} onHide={()=>this.closeLoginModal()}>
            <Modal.Header closeButton>
                <h2>Login</h2>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="example@type.com" required=""/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required=""/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <p>Forgot your password? <a href="#h" onClick={()=>{this.closeLoginModal(); this.openResetModal()}}>Reset Password</a></p>
                <Button variant="primary">Login</Button>
            </Modal.Footer>
        </Modal>
        
        {/* modal to reset password  */}
        <Modal show={reset_password} onHide={()=>this.closeResetModal()}>
            <Modal.Header closeButton>
                <h2>Reset Password</h2>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" required="" placeholder="example@prov.com"/>
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <p><a href="##" onClick={()=>{this.closeResetModal(); this.openRegisterModal()}}>Register </a></p>
                    <p><a href="##" onClick={()=>{this.closeResetModal(); this.openLoginModal()}}>Login</a></p>
                    <Button>Reset Password</Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
        </>
                 
    )}
}

export default Navbar 