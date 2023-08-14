import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/_style.scss';

export default function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
}