import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Container> */}
                <Row>
                    <Col lg="3" className='bg-primary'>
                     <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="9">
                    <Outlet></Outlet>
                    </Col>
                </Row>
            {/* </Container> */}
        </div>
    );
};

export default Main;