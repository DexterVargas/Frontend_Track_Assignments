import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css"

function RenderList(props){
    return (
        <div className='post-container'>
            <p className='post-avatar'>{props.userInitial}</p>
            <div className='name-container'>
                <h1>{props.userName}</h1>
                <h2><a href='https://www.hackerhero.com/reactjs-with-wordpress/contact-list'>{props.userEmail}</a></h2>
            </div>
        </div>
    );
}

export default RenderList