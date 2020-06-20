import React from "react";

const Homepage = props => (
    <div className = "container-fluid">
        <div className = "divtitle">
            <div className = "title">
                <p>YOU & ME</p>
            </div>
            <div className = "titlebutton">
                <button type="button" className="btn btn-outline-primary btn-lg">Explore More</button>
            </div>           
        </div>

        <div className = "about_us">
            <div className="card bg-info text-white text-center">
                <div className="card-body">
                    <h5 className="card-title">ABOUT <span style={{color:'rgb(75,0,130)'}}>US</span></h5>
                    <hr className = "brace" />
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo. Libero enim sed faucibus turpis in eu. Amet mauris commodo quis imperdiet massa tincidunt. Nunc aliquet bibendum enim facilisis. Vulputate dignissim suspendisse in est. Urna id volutpat lacus laoreet non curabitur. Interdum velit laoreet id donec ultrices tincidunt arcu non. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Vitae ultricies leo integer malesuada. Sit amet porttitor eget dolor morbi non arcu. Tellus rutrum tellus pellentesque eu tincidunt. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ligula ullamcorper malesuada proin libero nunc consequat interdum.</p>
                </div>
            </div>
        </div>

        <div className = "our_services">
        <div className="card bg-info text-white text-center">
                <div className="card-body">
                    <h5 className="card-title">OUR <span style={{color:'rgb(75,0,130)'}}>SERVICES</span></h5>
                    <hr className = "brace" />
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo. Libero enim sed faucibus turpis in eu. Amet mauris commodo quis imperdiet massa tincidunt. Nunc aliquet bibendum enim facilisis. Vulputate dignissim suspendisse in est. Urna id volutpat lacus laoreet non curabitur. Interdum velit laoreet id donec ultrices tincidunt arcu non. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Vitae ultricies leo integer malesuada. Sit amet porttitor eget dolor morbi non arcu. Tellus rutrum tellus pellentesque eu tincidunt. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ligula ullamcorper malesuada proin libero nunc consequat interdum.</p>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;