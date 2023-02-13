import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {addDoc, collection} from 'firebase/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config';
import { db } from '../config';
export const CreatePostForm = () =>{
    const [user] = useAuthState(auth)
    const schema = yup.object().shape({
        title: yup.string().required('Write title of post!!!'),
        description: yup.string().required('Write description of thr post'),
        file: yup.mixed().required('file please')
      });

    const {register,handleSubmit} = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const postRef = collection(db,'posts');
    
    const onSubmit = async(data) =>{
        console.log(data);
        await addDoc(postRef,{
            ...data,
        id: user.uid,
        username: user.displayName,
        })
    }

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="title" {...register('title')}/>
            <input placeholder="description" {...register('description')} />
            <input type={"submit"} placeholder='create post'/>
        </form>
    </div>
}