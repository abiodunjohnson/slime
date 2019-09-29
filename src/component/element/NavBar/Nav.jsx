import React from 'react'; 
// import image from '../images/'


class Navbar extends React.Component {
    render (){
        return (
        
            <nav class="navbar navbar-expand-md navbar-dark fixed-top scroll">
            <a class="navbar-brand" href="index.html">
              <img src="https://i.ibb.co/f4GcYvC/SLIME-STOCK.png"  width="60px;" alt="Slimestock Logo" class="logo" />
            </a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="dd" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Product
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="dd">Training</a>
                    <a class="dropdown-item" href="dd">Snail</a>
                    </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="dd">Photo</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="dd">Contact</a>
                </li>
              </ul>
            </div>
            
          </nav>
            
        )
    }
}


export default Navbar;