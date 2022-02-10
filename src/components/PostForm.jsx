import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({Cur_Name: '', Cur_Abbreviation: ''})

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            ...post, Cur_ID: Date.now(), Cur_DateStart: getDate()
        }
        
        create(newPost)
 
        setPost({Cur_Name: '', Cur_Abbreviation: ''})
    }

    const getDate = ()=>{
        let time = new Date().toDateString();
        return time
    }

    return (
        <form>

            <MyInput
                value={post.Cur_Name}
                onChange={e => setPost({...post, Cur_Name: e.target.value})}
                type="text"
                placeholder="Название поста"
            />

            <MyInput
                value={post.Cur_Abbreviation}
                onChange={e => setPost({...post, Cur_Abbreviation: e.target.value})}
                type="text"
                placeholder="Буквенный код"
            />

            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
