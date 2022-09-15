import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";
import {TopCars} from "./TopCars";

function App() {
    const students = [
        {id: 1, name: "Ann", age: 18},
        {id: 2, name: "Donald", age: 20},
        {id: 1, name: "Ann", age: 18},
        {id: 2, name: "Donald", age: 20},
    ]

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            {/*<Header title={'New body'}/>
            <Body titleForBody={'New body'}/>
            <NewComponent students={students}/>*/}
            <TopCars topCars={topCars}/>
            {/*<Footer titleForFooter={'New footer'}/>*/}
        </>

    )
        ;
}

export default App;
