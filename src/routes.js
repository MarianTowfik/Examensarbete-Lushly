import React from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import OmMig from "./sidor/omMig.jsx"
import PageNotFound from "./sidor/PageNotFound.jsx";
import Landningssida from "./sidor/landningssida.jsx";
import Nails from "./sidor/Nailiesbyemsis.jsx"
import Hejsan from "./sidor/bokatid.jsx"
import Omdöme from "./sidor/Recensioner.jsx"


const Routes = () => {
    return (

    <Router>
        <Switch>
        <Route exact path="/Nailiesbyemsis" component={Landningssida} />
        <Route exact path="/" component={Landningssida} />

            <Route exact path="/omMig" component={OmMig} />
            <Route exact path="/bilder" component={Nails} />
            <Route exact path="/boka-tid" component={Hejsan} />
            <Route exact path="/recensioner" component={Omdöme} />
            <Route component={PageNotFound} />


        </Switch>
    </Router> 



    );
 
};


export default Routes; 