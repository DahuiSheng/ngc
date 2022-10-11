import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar fixed z-50 bg-white opacity-100">

            {/* タイトル：　NiFT_Blog */}
            <div className="flex-1">
                <Link href={"/"}>
                    <a className="btn btn-ghost normal-case text-xl xl:text-3xl text-red-800">NGC : Nagoya Growth Connection</a>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><a>Item 1</a></li>
                <li tabIndex={0}>
                    <a>
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2 bg-base-100">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <li><a>Item 3</a></li>
                </ul>
            </div>

            {/* ハンバーガーメニュー */}
            {/* <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div> */}
        </div>
    )
};

export default Navbar;