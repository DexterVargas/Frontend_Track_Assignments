import Content from './Content';
import Sidebar from './Sidebar';

const Home = () => {
	return (
		<div className='main-container'>
			<Sidebar/>
			<Content/>
		</div>
	)
}

export default Home;