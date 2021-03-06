import React, { Component } from 'react';

import {
 Link, Route, Switch,
} from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';
import { MdOpenInBrowser, SiWindows } from 'react-icons/all';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.setState({
            user: true,
        });
    }

    render() {

        return (
            <>
                <Switch>
                    <Route exact path="/">
                        {/* <Layout */}
                        {/*    id="outer_layout" */}
                        {/*    className="chart-page" */}
                        {/* > */}
                        {/*    <SideBar currentPage={'1'}/> */}

                        {/*    <Layout id="inner_layout_div"> */}
                        {/*        <Header id="top_bar"> */}
                        {/*            /!* <Title level={1}>Home</Title> *!/ */}

                        {/*            <UserInfoCard */}
                        {/*                name="s" */}
                        {/*            /> */}
                        {/*        </Header> */}
                        {/*    </Layout> */}
                        {/* </Layout> */}

                        <div id="home-page-container">
                            <NavBar />
                            <div id="home-page-content">
                                <div id="selling-point-1">
                                    Import it.
                                    <br />
                                    Analyse it.
                                    <br />
                                    Visualise it.
                                    <br />
                                    All in one place.
                                </div>
                                {/*<div id="button-container">*/}
                                    <button id="download-button" onClick={()=> window.open("https://drive.google.com/drive/folders/1ZBkLoIxYXDtDef-m-Q5Z1h0IqXkKKvOQ?usp=sharing", "_blank")}>
                                        <SiWindows id="windows-logo"/>
                                        Download for Windows
                                    </button>

                                    {/*<Link to="/login">*/}
                                    {/*    <button*/}
                                    {/*      id="open-in-browser-button"*/}
                                    {/*    >*/}
                                    {/*        <MdOpenInBrowser id="windows-logo" />*/}
                                    {/*        Open in your browser*/}
                                    {/*    </button>*/}
                                    {/*</Link>*/}
                                {/*</div>*/}
                                <div id="app-image" />
                                <div id="selling-point-2-container">
                                    <div />
                                    <div id="selling-point-2">
                                        Your own Intelligent Data Suite.
                                        <br />
                                        Connect your own data sources.
                                        <br />
                                        Import your own data and visualise it.
                                        <br />
                                        All with a few clicks.
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </Route>
                </Switch>
            </>
        );
    }
}

export default HomePage;
