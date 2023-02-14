import {Link,useNavigate} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config';
import { signOut } from 'firebase/auth';
export const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const signOutUser =async() =>{
        await signOut(auth);
        navigate('/');
    }
    return <div className='Header'>
        <Link to='/'>Home</Link>
        {!user?
        (<Link to='/sign-in'>Sign in</Link>) :

        <div><Link to ='/create-post'>Create Post</Link>
        <Link to='/posts'>Posts</Link></div>
}
        {user &&(
        <div className='header-navbar'><p>{user?.displayName}</p>
        <img src={user?.photoURL} width='30' className='ava'/>
        <button onClick={signOutUser}>sign out</button>
        
        </div>)}

    </div>
}