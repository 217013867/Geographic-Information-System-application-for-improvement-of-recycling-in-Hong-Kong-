import {useEffect, useState} from "react";
import Link from "next/link";

/**
 * For rendering frontend component - header
 * @returns {JSX.Element}
 */
const Header = () => {
    const [animateHeader, setAnimateHeader] = useState(false);

    // useEffect(() => {
    //     const listener = () => {
    //         console.log(window.scrollY)
    //         if (window.scrollY > 100) {
    //             setAnimateHeader('header-scrolled');
    //         } else setAnimateHeader('');
    //     };
    //     window.addEventListener("scroll", listener);
    //     return () => {
    //         window.removeEventListener("scroll", listener);
    //     };
    // }, []);

    return (
        <header id="header" className={`fixed-top d-flex align-items-center header-scrolled`}>
            <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                    <h1><Link href="/"><a>Recycling</a></Link></h1>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/map"><a>Recycling Map</a></Link></li>
                        <li><Link href="/type-page"><a>Recycling Items and Guideline</a></Link></li>
                        <li><Link href={'/millionaire'}><a>Millionaire</a></Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}

export default Header