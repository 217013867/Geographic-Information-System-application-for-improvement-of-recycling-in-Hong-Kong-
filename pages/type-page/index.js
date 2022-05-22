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
            guideline:
                <ol>
                    <li>Remove plastic coated pages, plastic tape and other non-paper materials</li>
                    <li>Keep the waste paper dry</li>
                </ol>
        }, {
            type: "Metals",
            img: ["/typeimage/metal.jpg","/typeimage/can.jpg"],
            guideline:
                <ol>
                    <li>Empty metal cans for easy cleaning </li>
                    <li>Queeze the aluminum beverage can as flat as possible</li>
                    <li>Place properly disposed metal cans in metal recycling bins</li>
                </ol>
        }, {
            type: "Plastics",
            img: ["/typeimage/bag.jpg","/typeimage/pbottles.jpg","/typeimage/Yakult.jpg","/typeimage/shampoo.jpg"],
            guideline:
                <ol>
                    <li>Remove the bottle cap first</li>
                    <li>Pour out the liquid in the plastic bottle and do a simple cleaning</li>
                    <li>Remove the poster</li>
                    <li>Sort and recycle the plastic bottle caps, paper and bottle bodies and put them in the plastic recycling bin</li>
                </ol>
        }, {
            type: "Glass",
            img: ["/typeimage/bottles.jpg","/typeimage/glabot.jpg"],
            guideline:
                <ol>
                    <li>Remove the caps.</li>
                    <li>Rinse the containers before recycling.</li>
                </ol>
        }, {
            type: "Regulated Electrical Equipments (REE)",
            img: ["/typeimage/mon.jpg","/typeimage/washing.jpg","/typeimage/air.jpg","/typeimage/printer.jpg"],
            guideline:
                <ol>
                    <li>Request the seller to deliver the new item and remove the old item of the same class on the same day for no additional cost.</li>
                </ol>
        }, {
            type: "Small Electrical Appliances",
            img: ["/typeimage/rice.jpg","/typeimage/hair.jpg","/typeimage/camera.jpg"],
            guideline:
            <ol>
                <li>Call the Government's recycling hotline (2676 8888).</li>
                <li>Make an appointment with Tuen Mun Environmental Park WEEE·PARK for free on-site recycling.</li>
            </ol>
        }, {
            type: "Fluorescent Lamps and Tubes",
            img: ["/typeimage/Lamps.jpg","/typeimage/tube.jpg"],
            guideline:
            <ol>
                <li>Before placing used lamps in the collection box for recycling, place them in the packaging that comes with new lamps.</li>
                <li>Broken lamps should be sealed in a plastic bag.</li>
            </ol>
        }, {
            type: "Rechargeable Batteries",
            img: ["/typeimage/battery.jpg", "/typeimage/mobile.jpg","/typeimage/powerbank.jpg"],
            guideline:
            <ol>
                <li>Remove the rechargeable battery from the equipment.</li>
                <li>Cover the battery terminal with masking tape.</li>
                <li>Do not put damaged rechargeable batteries into the collection boxes.</li>
                <li> For batteries that are vulnerable to damage, put them in plastic bag and seal them with adhesive tape before deposit.</li>
                <li>Bring the battery to a Collection Point for recycling.</li>
            </ol>
        }, {
            type: "Tetra Pak",
            img: ["/typeimage/pak.jpg","/typeimage/tea.jpg"],
            guideline:
            <ol>
                <li>Removing straw, sleeve and cap. </li>
                <li>Rinsing and cleaning the beverage carton.</li>
                <li>Flattening the beverage carton.</li>
                <li>Bring tetra pak to Collection Point for recycling.</li>
            </ol>
        }, {
            type: "Clothes",
            img: ["/typeimage/clothes.jpg","/typeimage/637808029647630000.jpg","/typeimage/shoes.jpg"],
            guideline:
            <ol>
                <li>Clean the items before recycling</li>
            </ol>
        }, {
            type: "Furniture",
            img: ["/typeimage/table.jpg","/typeimage/so.jpg","/typeimage/office.jpg"],
            guideline:
            <ol>
                <li>Relatively new and clean on the outside</li>
                <li>Reusable</li>
                <li>Structurally safe</li>
            </ol>
        }, {
            type: "Food",
            img: ["/typeimage/food.jpg","/typeimage/food2.jpg"],
            guideline:
            <ol>
                <li>2 weeks or more before expiry date.</li>
                <li>Dry food and drinks with intact package.</li>
                <li>Fresh food (fruits and vegetables)</li>
                <li>Oils & seasonings</li>
                <li>Frozen/ chilled food</li>
                <li>Bakery items </li>
                <li>Cooked food</li>
            </ol>
        }, {
            type: "Others",
            img: ["/typeimage/foodwaste.jpg","/typeimage/wood.jpg","/typeimage/banner.jpg","/typeimage/tyre.jpg"],
            guideline:
            <ol>
                <li>Toner Cartridge</li>
                <li>Wood</li>
                <li>PVC Banner</li>
                <li>Rubber Tyre</li>
                <li>Food Waste</li>
                <li>Restaurant Waste (Oil, Grease Trap)</li>
            </ol>
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
        <div className={`page-container  ${styles.container}`}>
            <Table bordered striped className={styles.table}>
                <thead>
                <tr>
                    <th scope="col">Material Type</th>
                    <th scope="col">Recyclable Materials</th>
                    <th scope="col" >Guideline</th>
                </tr>
                </thead>
                {genTable()}
            </Table>
        </div>
    )
}


export default TypePage