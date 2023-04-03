import "../../assets/stylesheets/style.css";
import profile from '../../assets/images/saitama.png'
const Home = () => {
    return (
        <>
            <section className="user-section">
				<div className="name-container">
					<h1 className="iam-saitama">Dexter Vargas</h1>
					<p>Frontend Developer</p>
					<a href="/" className="btn-talk">Let's talk</a>
				</div>
				<div className="profile-img-container">
					<div className="line-layer"></div>
					<img className="profile-pic" src={profile} alt="saitama-profile-photo" />
				</div>
			</section>
        </>
    );
}

export default Home;