import React from "react";
import "./homemain.css";

export default function homemain() {
    const opencam = () => {
        document.getElementById("home vid").style.display="block";
        document.getElementById("clp").style.display="block";
        let All_mediaDevices=navigator.mediaDevices
        if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
           console.log("getUserMedia() not supported.");
           return;
        }
        All_mediaDevices.getUserMedia({
           audio: false,
           video: true
        })
        .then(function(vidStream) {
           var video = document.getElementById('homevid');
           if ("srcObject" in video) {
              video.srcObject = vidStream;
           } else {
              video.src = window.URL.createObjectURL(vidStream);
           }
           video.onloadedmetadata = function(e) {
              video.play();
           };
        })
        .catch(function(e) {
           console.log(e.name + ": " + e.message);
        });
    };
    return (
        

        <div className="homemain">
        <div >
        <video id="homevid" onLoad={ opencam }></video>
        </div>
            </div>
    );
}