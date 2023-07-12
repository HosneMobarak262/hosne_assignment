import React from 'react';
import Footer from "./HomePage/Footer.jsx";
import Header from "./HomePage/Header.jsx";
import Content from "./HomePage/Content.jsx";

const HomePage = (props) => {
    return (
        <div>
            <Header header={props.header}></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;