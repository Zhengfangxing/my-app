import {Navigate} from "react-router-dom";
import Samples from "../components/samples";
import SampleDetail from "../components/sampleDetail";
import React from "react";

const routes = [
    {
        path: "samples",
        element: <Samples/>
    },
    {
        path: "sampleDetail",
        element: <SampleDetail/>
    },
    {
        path: "/",
        element: <Navigate to="/index"/>
    }
]

export default routes;
