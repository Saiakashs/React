import React from "react";
import lake from '../assets/images/lake.jfif';
import lolipop from '../assets/images/lolipop.webp';
import commondata from "../shared/constant/constantData";



const MyImagesComp=()=>{
    return (
        <div>
            <h2>This is Images Component</h2>
            <img src={lake} alt="Lake" height="200px" width="200px"></img>
            <img src={lolipop} alt="Lolipop" height="200px" width="200px"></img>


            <img src={commondata.lake} alt="Lake" height="200px" width="200px"></img>
            <img src={commondata.lolipop} alt="Lolipop" height="200px" width="200px"></img>
            <img src={commondata.parrot} alt="Parrot" height="200px" width="200px"></img>
            <img src={commondata.waterDroplets} alt="Water Droplets" height="200px" width="200px"></img>

            <audio src={commondata.audio} controls>Audio</audio>

            <video src={commondata.video} controls>Video</video>

        </div>
    )
};

export default MyImagesComp;