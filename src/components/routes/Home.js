import "../../assets/stylesheets/style.css";
import Button from "react-bootstrap/Button";
import profile from '../../assets/images/saitama.png'

const Home = () => {
    return (
        <>
            <section className="user-section row mt-5">
				<div className="name-container col">
					<h1 className="iam-dex display-1">WEB &#123;<span className="handwriting name">Dex</span>&#125; </h1>
					<p className="display-5">Frontend Developer</p>
					<Button to='/aboutMe' variant="outline-secondary" size="lg" className="btn-talk">
						Let's talk
					</Button>
				</div>
				<div className="col">
					<div className="profile-img-container">
						<img className="profile-pic" src={profile} alt="saitama-profile" />
						<div className="line-layer"></div>
					</div>
					
				</div>
			</section>
        </>
    );
}

export default Home;