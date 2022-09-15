import React from 'react';
import {type} from "os";

type NewComponentType = {
    //students?: Array<StudentsType>
    students: StudentsType[]
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    const topCars = [
            {manufacturer: 'BMW', model: 'm5cs'},
            {manufacturer: 'Mercedes', model: 'e63s'},
            {manufacturer: 'Audi', model: 'rs6'}
        ]


    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}

        </ul>
    )
}