import Header from './header'

/**
 * For rendering frontend component - layout
 * @param {*} param0 
 * @returns {JSX.Element}
 */
export default function Layout({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}