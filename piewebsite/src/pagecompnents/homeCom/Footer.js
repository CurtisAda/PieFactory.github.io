import React from "react";
import facebook from "../../resource/image/facebook_icon.png";
import youtube from "../../resource/image/youtube_icon.png";
import twitter from "../../resource/image/twitter_icon.png";

function Footer() {
    return(
        <div>
            <div style={{backgroundColor: 'black', color: 'white'}}>@Fake Company</div>
            <div className="footer_list">
                <div className="fl">
                    <a href="">
                        <img src={youtube} />
                    </a>
                </div>
                <div className="fl">
                    <a href="">
                        <img src={facebook} />
                    </a>
                </div>
                <div className="fl">
                    <a href="">
                        <img src={twitter} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;