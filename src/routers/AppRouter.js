import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { authenticate } from '../actions/auth';
import { startLoadingProducts } from '../actions/products';
import { CustomerScreen } from '../components/customers/CustomerScreen';
import { Navbar } from '../components/ui/Navbar';
import { VendorScreen } from '../components/vendors/VendorScreen';
export const AppRouter = () => {

    const dispatch = useDispatch()

    // const product = [{
    //         id:1,
    //         vendorid:1,
    //         name:'Producto fantastico',
    //         sku:'xxxx',
    //         units:20,
    //         price:23.45
    //     },
    //     {
    //         id:2,
    //         vendorid:1,
    //         name:'Coca cola',
    //         sku:'xxxx',
    //         units:20,
    //         price:23.45
    //     },
    //     {
    //         id:3,
    //         vendorid:2,
    //         name:'Producto genial',
    //         sku:'xxxx',
    //         units:20,
    //         price:23.45
    //     }
    // ]
    // localStorage.setItem('products',JSON.stringify(product))

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) || null
        if(user) dispatch(authenticate(user))
        dispatch(startLoadingProducts())
    }, [dispatch])
    
    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route path="/" component={CustomerScreen}/>
                    <Route exact path="/provider" component={VendorScreen}/>
                    {/* <Route exact path="/admin" component={JournalScreen}/> */}

                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
