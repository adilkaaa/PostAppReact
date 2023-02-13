import {Link} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config';
import { signOut } from 'firebase/auth';
export const Header = () => {
    const [user] = useAuthState(auth);
    const signOutUser =async() =>{
        await signOut(auth);
    }
    return <div className='Header'>
        <Link to='/'>Home</Link>
        {!user?
        (<Link to='/sign-in'>Sign in</Link>) :
        <Link to ='/create-post'>Create Post</Link>
}
        {user &&(
        <div className='header-navbar'><p>{user?.displayName}</p>
        <img src={user?.photoURL} width='30' className='ava'/>
        <button onClick={signOutUser}>sign out</button>
        
        </div>)}

    </div>
}