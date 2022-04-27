import {useEffect, useState} from 'react'
import {Status, Wrapper} from "@googlemaps/react-wrapper";
import MapComponent from "../map";


import {Col, Row, Container, Button, Input, Label, Table} from "reactstrap";
import styles from "./typePage.module.css"

const TypePage = () => {

    const items = [
        {
            type: "Waste Paper",
            img: ["/typeimage/news.jpg", "/typeimage/paper.jpg", "/typeimage/box.jpg"],
            guideline: "Remove plastic coated pages, plastic tape and other non-paper materials, and keep the waste paper dry."
        }, {
            type: "Metals",
            img: [],
            guideline: ""
        }, {
            type: "Plastics",
            img: ["/typeimage/bag.jpg"],
            guideline: ""
        }, {
            type: "Glass",
            img: ["/typeimage/bottles.jpg"],
            guideline: ""
        }, {
            type: "Regulated Electrical Equipments (REE)",
            img: [],
            guideline: ""
        }, {
            type: "Small Electrical Appliances",
            img: [],
            guideline: ""
        }, {
            type: "Fluorescent Lamps and Tubes",
            img: [],
            guideline: ""
        }, {
            type: "Rechargeable Batteries",
            img: [],
            guideline: ""
        }, {
            type: "Tetra Pak",
            img: [],
            guideline: ""
        }, {
            type: "Clothes",
            img: [],
            guideline: ""
        }, {
            type: "Furniture",
            img: [],
            guideline: ""
        }, {
            type: "Food",
            img: [],
            guideline: ""
        }, {
            type: "Others",
            img: [],
            guideline: ""
        }
    ]


    const genTable = () => {
        const body = []
        items.map(i => {
            body.push(
                <tr>
                    <td>{i.type}</td>
                    <td>{i.img.map((a, x) => <img key={x} src={a} width="180" height="150"/>)}</td>
                    <td>{i.guideline}</td>
                </tr>
            )
        })
        return <tbody>{body}</tbody>
    }

    return (
        <div className={`page-container ${styles.container}`}>
            <Table bordered striped className={styles.table}>
                <thead>
                <tr>
                    <th scope="col">Material Type</th>
                    <th scope="col">Recyclable Materials</th>
                    <th scope="col">Guideline</th>
                </tr>
                </thead>
                {genTable()}
            </Table>
        </div>
    )
}


export default TypePage