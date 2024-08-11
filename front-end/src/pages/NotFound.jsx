import { Link } from 'react-router-dom' 

function NotFound() {
    return (
        <div className={''} >
            Not Found
            <Link to={'/'}>Go to HomePage</Link>
        </div>
    )
}

export default NotFound
