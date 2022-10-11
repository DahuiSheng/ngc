import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar fixed z-50 bg-white opacity-100">

            {/* タイトル：　NiFT_Blog */}
            <div className="flex-1">
                <Link href={"/"}>
                    <a className="btn btn-ghost normal-case text-md md:text-xl text-red-800">NGC : Nagoya Growth Connection</a>
                </Link>
            </div>
            <div className="flex-none invisible md:visible">
                <ul className="menu menu-horizontal p-0 font-bold text-red-800">
                    <Link href={"/"}>
                        <li><a className="btn btn-ghost">Home</a></li>
                    </Link>
                    <Link href={"/event"}>
                        <li><a className="btn btn-ghost">イベント</a></li>
                    </Link>
                    <Link href={"/inquiry"}>
                        <li><a className="btn btn-ghost">お問い合わせ</a></li>
                    </Link>
                </ul>
            </div>

            {/* ３つの点 */}
            <div className="dropdown dropdown-end flex-none md:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current fill-black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <Link href={"/"}>
                            <a className="btn btn-ghost">Home</a>
                        </Link>
                        <Link href={"/event"}>
                            <a className="btn btn-ghost">イベント</a>
                        </Link>
                        <Link href={"/inquiry"}>
                            <a className="btn btn-ghost">お問い合わせ</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;