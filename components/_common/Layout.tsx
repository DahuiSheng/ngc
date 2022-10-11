import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
// import Menu from "./Menu";
import Seo from "./Seo";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Seo />
            <Navbar />
            {/* <Menu /> */}
            <main className="p-4">{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
