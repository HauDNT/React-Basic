import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];

function Content() {
    // 1. useEffect(callback)
    //  - Gọi callback mỗi khi component re-render
    //  - Gọi callback sau khi component thêm element vào DOM.
    // 2. useEffect(callback, [])
    //  - Chỉ gọi callback 1 lần sau khi component mounted.
    // 3. useEffect(callback, [dependencies])
    //  - Chỉ gọi lại khi dependencies thay đổi.

    // --------
    // 1. Callback luôn được gọi sau khi component mounted
    // 2. Cleanup function luôn được gọi trước khi component unmounted

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function:
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <h1>{width}</h1>
        </>
    );
}

export default Content;
