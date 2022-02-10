import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const PostItem = (props) => {
    const router = useHistory()

const curExchange = props.exchange.filter(val=> val.Cur_ID == props.post.Cur_ID)

if(!props.remove){
    return (
        <div className="post">

            <div className="post__content">

                <strong>{props.number}. {props.post.Cur_Name}</strong>

                <div className='post_data'>
                    <p>Дата добавления валюты</p>-
                    <p>{props.post.Cur_DateStart}</p>
                </div>
                <div className='letter_code'>
                    <p>Буквенный код валюты</p> 

                    <p>{props.post.Cur_Abbreviation }</p>
                </div>
                <div className="current_exchange">
                    <span>
                       {(curExchange.length>0 ? `Курс на сегодня ${curExchange[0].Cur_OfficialRate}`:'Курс на сегодня не установлен')}
                    </span>
                </div>

            </div>

            <div className="post__btns">
                <CopyToClipboard text={props.post.Cur_Name}>
                    <MyButton> Копировать название валюты</MyButton>
                </CopyToClipboard>
            </div>
        </div>
    )
}

    return (
        <div className="post">

            <div className="post__content">

                <strong>{props.number}. {props.post.Cur_Name}</strong>

                <div className='post_data'>
                    <p>Дата добавления валюты</p>-
                    <p>{props.post.Cur_DateStart}</p>
                </div>
                <div className='letter_code'>
                    <p>Буквенный код валюты</p> 
                    
                    <p>{props.post.Cur_Abbreviation }</p>
                </div>
                <div className="current_exchange">
                    <span>
                       {(curExchange.length>0 ? `Курс на сегодня ${curExchange[0].Cur_OfficialRate}`:'Курс на сегодня не установлен')}
                    </span>
                </div>

            </div>

            <div className="post__btns">
                <CopyToClipboard text={props.post.Cur_Name}>
                    <MyButton> Копировать название валюты</MyButton>
                </CopyToClipboard>

                <MyButton onClick={() => router.push(`/posts/${props.post.Cur_ID}`)}>
                    Открыть
                </MyButton>

                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>

            </div>
        </div>
    );  
};

export default PostItem;
