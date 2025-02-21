import React from 'react';
import IconSwitch from "./IconSwitch.jsx";
import CardsView from "./CardsView.jsx";
import { useState } from 'react';
import ListView from './ListView.jsx';



function Store() {
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    const [state, setState] = useState("view_list");
    const icons = ["view_list", "view_module"];


    const thing = products.map((el, id) => {
        console.log(el);
        return (
            <>{state === "view_list" ? (<ListView product={el} key={id} />) : (<CardsView product={el} key={id} />)}</>
        );
    }
    );
    
    return (
        <>
            <IconSwitch icon={state} onSwitch={() => icons.forEach((el) => { el !== state && setState(el)})} />
            <div className={state}>
            {thing}
            </div>
            
        </>

    );

};


export default Store;