import {auth, provider} from '../config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export const Login = () =>{
    const navigate = useNavigate();
    const signInViaGoogle = async() =>{
        await signInWithPopup(auth, provider).then(()=>{
            navigate('/');
        })
    }
    return <div>
        <h3>Sign In</h3>
        <h4>Sign in Via Google</h4>
        <button onClick={signInViaGoogle}>sign in</button>
    </div>
}