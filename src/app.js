import React, { Component } from "react";
import Head from "./blocks/head/Head";
import Content from "./blocks/content/Content";
import Footer from "./blocks/footer/Footer";

import "./app.styl";

export default class App extends Component {
    render() {
        return (
            <div>
                <Head />
                <Content />
                <Footer />
            </div>
        );
    }
}
