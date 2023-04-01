import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css"
import Users from './Users';

const HandleRenderList = (props) => {
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

const RenderList = () => {
	let userList = [];
	for (let i = 0; i < Users.length; i++) {
		userList.push(<HandleRenderList key={i} userName={Users[i].userName} userEmail={Users[i].userEmail} userInitial={Users[i].userInitial} />);
	}
	return userList;
	//  const userList = Users.map((user,ind) => (<RenderList key={ind} userName={user.userName} userEmail={user.userEmail} userInitial={user.userInitial} />));
	//  return userList;
}

export default RenderList;