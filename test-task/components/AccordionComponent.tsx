import React from "react";
import { Accordion } from 'react-bootstrap';
import CustomGrid from './CustomGrid';

export default function AccordionComponent(props: {
    header: string;
    data: {
        columns: string[];
        rows: Array<string[]>;
    };
}) {
    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    {props.header}
                </Accordion.Header>
                <Accordion.Body>
                    <CustomGrid data={props.data} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
