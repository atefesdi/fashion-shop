import React from "react";
import {GrInstagram} from "react-icons/gr";
import {FiTwitter ,FiLinkedin , FiFacebook , FiYoutube} from "react-icons/fi";
import Image from "../../images/googlePlay.png"
import Image2 from "../../images/appstore.png";
import styles from "./footer.module.css"

const Footer =()=>{
    return(<div className={styles.footer__container}>
        <div className={styles.footer__icons}>
        <a><GrInstagram color="#ffff" fontSize={27} className={styles.purpleColor}/></a>
        <a><FiTwitter color="#ffff" fontSize={27} className={styles.blueColor} /></a>
        <a><FiLinkedin color="#ffff" fontSize={27} className={styles.lightBlueColor}/></a>
        <a><FiFacebook color="#ffff" fontSize={27} className={styles.facebookBlueColor} /></a>
        <a><FiYoutube color="#ffff" fontSize={27} className={styles.redColor} /></a>
        </div>
        <div className={styles.devider}></div>
        <div className={styles.footer__content}>
           <div className={styles.block12}>
           <div className={styles.block1}>
                <h3>sign up for newsletters</h3>
                <p>got E-mail update about our latest shop and special offers</p>
                
                <input placeholder="enter your E-mail"></input>
                <button>sign up</button>

            </div>
            <div className={styles.block2}>
            <h3>overview</h3>
            <ul>
                <li>about us</li>
                <li>contact</li>
                <li>gallary</li>
            </ul>
            </div>
           </div>
            <div className={styles.block3}>
                <h3>the mobile app</h3>
                <p>download the app and enjoy it on your phone :)</p>
                <div className={styles.appDownload__store}><img src={Image} /></div>
                <div className={styles.appDownload__store}><img src={Image2} /></div>
            </div>
        </div>
    </div>)
}

export default Footer