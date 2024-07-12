import { Link } from "react-router-dom";

function Nav(){

    return(
        
        <div >
            <div className="bg-green text-xl font-semibold text-white flex items-center justify-around">

                <div>
                    <Link to='/'> <div >
                        <h1>Ez Buy</h1>
                        {/* <img className="logo" src={logo} alt="" /> */}
                    </div> </Link>
                </div>

                <div>

                    <div >
                        <Link to='/'>  <button className="mx-8 my-5 ">Home</button> </Link>
                        
                        <Link to='/categories'> <button className="mx-8 my-5 ">Categories</button>  </Link>
                        
                        <Link to='/about'> <button className="mx-8 my-5 ">About</button> </Link>
                        
                        <Link to='/contactus'> <button className="mx-8 my-5 "> Contact us </button> </Link>

                        <Link to='/login'> <button className="mx-8 my-5"> Login </button> </Link>


                    </div>
                    
                </div>

            </div>
            
        </div>
    );
}

export default Nav;