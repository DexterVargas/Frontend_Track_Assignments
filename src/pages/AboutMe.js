import "../assets/stylesheets/style.css";
import Button from "react-bootstrap/Button";
import profile from '../assets/images/saitama-about.png'

const AboutMe = () => {
    return (
        <section className="about-section">
				<div className="about-photo-border">
					<img className="about-photo" src={profile} alt="saitama-profile" />
				</div>
				<div className="about">
					<h2>About</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio excepturi delectus in commodi cumque assumenda expedita aut dolores ad eum......</p>
					<p><Button href="" variant="outline-secondary" size="lg" className="read-more">Read more&#187;</Button></p>
				</div>
		</section>
    );
}

export default AboutMe;