import React, {useEffect, useRef, useState} from 'react';
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";


function Posts() {
    const [posts, setPosts] = useState([])
    const [exchange,setExchange] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);

        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));

        const allExchange = await PostService.getExchange();
        setExchange([...exchange, ...allExchange.data]);

    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

   

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
           
            {postError &&
            <h1>Произошла ошибка ${postError}</h1>
            }
            <PostList  posts={posts} exchange={exchange} title="Все валюты"/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>
            {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
