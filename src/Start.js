import Vector from './Vector.svg';


function Start() {
    return (

        <div>
            <div className="Circle1"></div>
            <div className="Circle2"></div>
            <img src={require("./Sharat.png")} alt="Sharat" width="500px" className="StarterImage" />
            <p className="Description">I am a 21-year-old college student pursuing my interests in the fields of UI/UX,
            software development, and machine learning, enthusiastic about building
            products that make a world of difference.</p>
            <img src={Vector} alt="prop" className="Vector" />

            <h3 className = "heading">INTERESTS</h3>
            <p className = "subheading">what I do, lol</p>
        </div>
    )

}

export default Start;