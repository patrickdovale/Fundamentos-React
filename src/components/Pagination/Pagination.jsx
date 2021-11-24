import React, { useState, useEffect } from "react";
import './Pagination.css';

export default function Pagination() {

    const [items, setItems] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(items.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex)


    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => data)

            setItems(result)
        }
        fetchData()
    }, [])


    return (
        <div className="Pagination">

            {currentItems.map((item) => {
                return (
                    <div className="post-item">
                        <span>User ID: <strong>{item.userId}</strong></span>
                        <span>ID: <strong>{item.id}</strong></span>
                        <span>Title: <strong>{item.title}</strong></span>
                        <span>Post: <strong>{item.body}</strong></span>
                    </div>
                )
            })}

            <div>
                <div>
                    {Array.from(Array(pages), (item, index) => {
                        return <button className="Button-page" onClick={() => setCurrentPage(index)}>{index + 1}</button>
                    })}
                </div>
            </div>

        </div>
    )
}