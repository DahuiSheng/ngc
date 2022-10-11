import Link from "next/link";

const Menu = () => {
    return (
        <>
            {/* <div className="h-16 bg-black">
            </div> */}
            <div className="grid grid-cols-2 bg-red-800 md:grid-cols-4 pt-16">
                <Link href={"/"}>
                    <button className="btn btn-block bg-red-800 border-none rounded-none text-xs h-2 no-animation text-white">ホーム</button>
                </Link>
                <Link href={"/event"}>
                    <button className="btn btn-block bg-red-800 border-none rounded-none text-xs h-2 no-animation text-white">イベント</button>
                </Link>
                <Link href={"/inquiry"}>
                    <button className="btn btn-block bg-red-800 border-none rounded-none text-xs h-2 no-animation text-white">お問い合わせ</button>
                </Link>
                <Link href={"/aboutus"}>
                    <button className="btn btn-block bg-red-800 border-none rounded-none text-xs h-2 no-animation text-white">About US</button>
                </Link>
            </div>
        </>
    );
};

export default Menu;
