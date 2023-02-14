import {collection, getDocs} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { db } from '../config';

export const Home = ()=>{
    const [posts, setPosts] = useState([]);
    const postRef =collection(db,'posts')

    const getPosts = async() =>{
        const data = await getDocs(postRef);
        setPosts(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }
    useEffect(()=>{
        getPosts();
    },[])
    return <div>
        <h3>That is Home Page</h3>
        <div className='posts'>
            {posts?.map((post)=>{
                return <div className='post'>
                    <h3>{post?.title}</h3>
                    <p>{post?.description}</p>
                    <span><i>{post?.username}</i></span>
                </div>
            })}
        </div>

    </div>
}