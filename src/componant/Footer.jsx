import React  from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const cardsStyle = {  
   
    marginTop : '30px',
    boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width:' 99%', 
   
}   


function Footer (){
        return (

<footer>
<div className=" py-4 px-5 bg=dark  text-dark expand=lg" style={cardsStyle}>
    <div className="row ">
        <div className="col-12 col-md-6 ">
            <header>
                <h3 > About</h3>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamcolaboris nisi ut aliquip ex ea
                commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="col-12 col-md-2">
            <header>
                <h3 > Blogroll</h3>
            </header>
            <ul>
                <li className="text-decoration-none text-dark" href="#">NETTUTS+</li>
                <li className="text-decoration-none text-dark" href="#">FreelanceSwitch</li>
                <li className="text-decoration-none text-dark"  href="#">In The Woods</li>
                <li className="text-decoration-none text-dark"  href="#">Netsetter</li>
                <li className="text-decoration-none text-dark" href="#">PSDTUTS+</li>
            </ul>
        </div>
        <div  className="col-12 col-md-4">
            <header>
                <h3 > Popular</h3>
            </header>
            <ul>
                <li className="text-decoration-none text-dark"  href="#">This is the title of a blog post</li>
                <li className="text-decoration-none text-dark"  href="#">Lorem ipsum dolor sit amet</li>
                <li  className="text-decoration-none text-dark" href="#">Consectetur adipisicing elit, sed do
                        eiusmod</li>
                <li className="text-decoration-none text-dark" href="#">Duis aute irure dolor</li>
                <li className="text-decoration-none text-dark" href="#">Excepteur sint occaecat cupidatat</li>
                <li className="text-decoration-none text-dark" href="#">Reprehenderit in voluptate velit</li>
                <li className="text-decoration-none text-dark" href="#">Officia deserunt mollit anim id est laborum
                </li>
                <li className="text-decoration-none text-dark" href="#">Lorem ipsum dolor sit amet</li>
            </ul>
        </div>
    </div>
</div>
</footer> 

        ) } 

export default Footer;