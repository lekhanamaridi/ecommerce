import { Link } from "react-router-dom";
import logo from '../../Assets/Logo/ez white.png'

function Nav(){

    return(
        
        <div>
            <div className="bg-green text-xl font-semibold text-white flex items-center justify-around z-50">

                <div>
                    <Link to='/'> <div >
                        <img className="logo w-20" src={logo} alt="" />
                    </div> </Link>
                </div>

                <div>

                    <div >
                        <Link to='/'>  <button className="mx-8 my-5 ">Home</button> </Link>
                        
                        <Link to='/categories'> <button className="mx-8 my-5 ">Categories</button>  </Link>
                        
                        <Link to='/contactus'> <button className="mx-8 my-5 "> Contact us </button> </Link>

                        <Link to='/login'> <button className="mx-8 my-5"> Login </button> </Link>

                        {/* <Link to='/checkout'> <button className="mx-8 my-5"> Checkout </button> </Link> */}

                    </div>
                    
                </div>

            </div>
            
        </div>
    );
}

export default Nav;