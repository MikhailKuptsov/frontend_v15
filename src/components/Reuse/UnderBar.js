import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container } from "react-bootstrap";

import { Admin_info_connect } from "../../constans/information/admin_info";

export default function UnderBar(){
    const background_color_main="#1c3572";
    return(
        <>
        <Navbar collapseOnSelect expand="md"
        style={{backgroundColor:background_color_main}}
         variant="dark">
                <Container >
                    <div style={{marginTop:"5px"}}>
                        <strong><p style={{color:"white"}}>Контактная информация:</p></strong>
                        <p style={{color:"white"}}>{Admin_info_connect.Fixer_FIO}</p>
                        <p style={{color:"white"}}>Email: {Admin_info_connect.Fixer_email}</p>
                        <p style={{color:"white"}}>Телефон: {Admin_info_connect.Fixer_phone}</p>
                        <p style={{color:"white"}}>Техническая поддержка:</p>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}