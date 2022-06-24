import React from 'react'
import "./style.css"
import "http://code.jquery.com/jquery-1.11.2.min.js"
const Index = () => {
    <script src="3deye.js"></script>
        (document).ready(function() {
            ("#demo").vc3dEye({
                imagePath: "img/",
                totalImages: 73,
                imageExtension: "webp"
            });
        });
    
  return (
    <div class="container">
        <div id="demo">

        </div>

    </div>
  )
}

export default Index