import React from 'react';
import ApiService from "../../Services";
import HomeView from "./homeView";
import Header from "../Header";


export default class Home extends React.Component{
    service = new ApiService();
    state = {
        user: null
    }


}

