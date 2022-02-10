import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});

    const [fetchPostById, isLoading, error] = useFetching(async (Cur_ID) => {
        const response = await PostService.getById(Cur_ID)
        setPost(response.data);
    })


    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                :  <div>{post.Cur_ID}. {post.Cur_Name}</div>
            }
            
        </div>
    );
};

export default PostIdPage;
