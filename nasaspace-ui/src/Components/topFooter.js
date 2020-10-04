import React from "react";
import foot from '../Images/foot.jpg';

const TopFooter = () =>{
  return (
      <div style={{height:"100%", width:window.innerWidth}}>
          <img src={foot} width={window.innerWidth}/>
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase font-weight-bold" style={{color:'white'}}>Observe Earth</h5>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-6 mb-md-0 mb-3">
              <h5 class="text-uppercase font-weight-bold" style={{color:'white'}}>Observe Earth Globaly</h5>
              <p>
              Explore worldwide satellite imagery and 3D buildings and terrain for hundreds of cities. Zoom to your house or anywhere else, then dive in for a 360° perspective with Street View.
              </p>
            </div>
          </div>
      </div>
    
  );
}
export default TopFooter;