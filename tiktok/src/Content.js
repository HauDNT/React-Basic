import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

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
    // 2. 

    const [title, setTitle] = useState('');
    const [type, setType] = useState('posts');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(newData => {
            setData(newData);
        })
    }, [type]);

    return (
        <>
            {
                tabs.map(tab => (
                    <button
                        onClick={() => setType(tab)}
                        key={tab}>
                            {tab}
                    </button>
                ))
            }

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            
            <ul>
                {data && data.map(item => (
                    <li key={item.id}>{item.title ?? item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Content;