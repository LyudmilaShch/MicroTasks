import React from 'react';

type TopCarsType = {
    topCars: TopCars[]
}

type TopCars = {
    manufacturer: string,
    model: string
}

export const TopCars = (props: TopCarsType) => {
    return (
        <table>
            <tbody>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                return (
                    <tr key={index}>

                        <th>{objectFromTopCarsArray.manufacturer}</th>
                        <td>{objectFromTopCarsArray.model}</td>

                    </tr>)
            })}
            </tbody>
        </table>
    )
}
