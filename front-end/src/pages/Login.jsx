import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../shared/input';

const data = {
    username: 'admin',
    password: 'admin'
}

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();

        if(!username || !password) return;

        if(
            username === data.username 
            && password === data.password
        ) navigate('/dashboard')

        
    }

    return (
        <div className={'login'} >
            <form onSubmit={handleSubmit}>
                <Input 
                    placeholder={"Username..."}
                    value={username}
                    setValue={setUsername}
                />
                <Input 
                    placeholder={"Password..."}
                    value={password}
                    setValue={setPassword}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
