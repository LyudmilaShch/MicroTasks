import React from 'react';
import {NewComponent} from "../NewComponent";

type BodyType = {
    titleForBody: string

}

export const Body = (props: BodyType) => {
    return (
        <div>{props.titleForBody}</div>
    );
}