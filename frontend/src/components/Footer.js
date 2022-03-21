import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* <footer className= "foot">
              Made by <a href="https://github.com/Shorya-agarwal" rel="noopener noreferrer" target = "_blank">Shorya Agarwal <span role="img" aria-labelledby = "heart1"> 💖</span></a>
          </footer> */}
                {/* <!-- Footer --> */}
                <footer className="bg-dark text-center text-white">
                    {/* <!-- Grid container --> */}
                    <div className="container p-2">
                        {/* <!-- Section: Social media --> */}
                        <section className="mb-1">
                            {/* <!-- Facebook --> */}
                            {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><FontAwesomeIcon icon={faFacebook}/>
                            </a> */}

                            {/* <!-- Twitter -->
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-twitter"></i
                            ></a> */}

                            {/* <!-- Google -->
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-google"></i
                            ></a> */}

                            {/* <!-- Instagram --> */}
                            <a className="btn btn-outline-light btn-floating m-1" rel="noopener noreferrer" target = "_blank" href="https://www.instagram.com/shorya_agarwal_/" role="button"
                            ><FontAwesomeIcon icon={faInstagram}/></a>

                            {/* <!-- Linkedin --> */}
                            <a className="btn btn-outline-light btn-floating m-1"rel="noopener noreferrer" target = "_blank" href="https://www.linkedin.com/in/shorya-agarwal-7b1751218/" role="button"
                            ><FontAwesomeIcon icon={faLinkedin}/></a>

                            {/* <!-- Github --> */}
                            <a className="btn btn-outline-light btn-floating m-1" rel="noopener noreferrer" target = "_blank" href="https://github.com/Shorya-agarwal" role="button"
                            ><FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </section>
                        {/* <!-- Section: Social media --> */}
                    </div>
                    {/* <!-- Grid container --> */}

                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                        © 2022 Made by <a href="https://github.com/Shorya-agarwal" rel="noopener noreferrer" target = "_blank">Shorya Agarwal <span role="img" aria-labelledby = "heart1"> ♥</span></a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* <!-- Footer --> */}
            </div>
        )
    }
}
