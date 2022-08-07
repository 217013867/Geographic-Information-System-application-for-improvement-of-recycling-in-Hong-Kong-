import {Table} from "reactstrap";
import styles from "./typePage.module.css"
import {genItem} from "../../utils";

/**
 * For rendering frontend component - Guideline page
 * @returns {JSX.Element}
 */
const TypePage = () => {

    const items = genItem()

/**
 * Table
 * @returns body
 */
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
                    <th scope="col">Guideline</th>
                </tr>
                </thead>
                {genTable()}
            </Table>
        </div>
    )
}


export default TypePage