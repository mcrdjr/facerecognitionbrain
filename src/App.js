import React, { Component }  from 'react';
import './App.css';
//import axios from 'axios';
//import * as faceapi from 'face-api.js';
//import Clarifai from 'clarifai';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';

let dataURL;
let img = new Image();
var box = [];
let boxstring = '';
let tr = 0;
let lc = 0;


// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'PUT YOUR PAT HERE';
//const APP_ID = '941ecfbec2ec4ddca6156b5470f99388';
const MODEL_ID = 'a403429f2ddf4b49b307e318f00e528b';
const MODEL_VERSION_ID = '34ce21a40cc24b6b96ffee54aabff139';
// Change this to whatever image URL you want to process
//let IMAGE_URL = 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg';
let IMAGE_URL = '';

//https://images.pexels.com/photos/5046546/pexels-photo-5046546.jpeg

//https://images.pexels.com/photos/3877565/pexels-photo-3877565.jpeg
//https://portal.clarifai.com/users/pt5tmqneurux/apps/941ecfbec2ec4ddca6156b5470f99388
//https://docs.clarifai.com/api-guide/predict/images
//https://freesoft.dev/program/172269984



//https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg

const getBase64FromImageUrl = (url) => {
  //const url = 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg';
  //var img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  //let dataURL;
  img.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width =this.width;
      canvas.height =this.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL("image/png");
      alert(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
      //console.log('3: dataURL:', dataURL.length);

  }
  img.src = url;
}




//https://www.tutorialrepublic.com/javascript-tutorial/javascript-json-parsing.php#:~:text=Parsing%20JSON%20Data%20in%20JavaScript,will%20get%20a%20syntax%20error.
//
//inset: 250px 175px 325px 170px;


      //leftCol: clarifaiFace.left_col * w,
      //topRow: clarifaiFace.top_row * h,
      //rightCol: width - (clarifaiFace.right_col * width),
      //bottomRow: height - (clarifaiFace.bottom_row * height)


function printValues(obj) {
  for(var k in obj) {
      if(obj[k] instanceof Object) {
          printValues(obj[k]);
      } else {
          //document.write(obj[k] + "<br>");
          //top_row, left_col, bottom_row, right_col
          if (k.includes('top_row') ||  k.includes('left_col') || k.includes('bottom_row') || k.includes('right_col')){
            //console.log(k, obj[k]);

            switch(true) {
              case k.includes('top_row'):
                //topRow: top_row * h,
                tr = (obj[k] * 100).toFixed(0); //* h;
                break;
              case k.includes('left_col'):
                //leftCol: left_col * w,
                lc = (obj[k] * 100).toFixed(0); //w;
                break;
              case k.includes('bottom_row'):
                //bottomRow: height - (bottom_row * height)
                //br = h - (obj[k] * 100).toFixed(0); //* h);
                break;
              case k.includes('right_col'):
                //rightCol: width - (right_col * width),
                //rc = (obj[k] * w);
                break;
              default:
                // code block
            }
            let ky = JSON.parse('{"' + k.replace('_','') + '":"' + (obj[k] * 100).toFixed(0) + 'px"}');
            //boxstring += (obj[k] * 100).toFixed(0) + 'px ';
            boxstring += (obj[k] * 100).toFixed(0) + 'px ';

            //let ky = JSON.parse((obj[k] * 100).toFixed(0) + 'px"}');
            //if (boxstring.length>0){
            //  console.log('boxstring:', boxstring);
            //  console.log(tr, lc, br, rc);
            //}
            //console.log('ky:',ky);
            //const obj1 = { ky : obj[k] };
            const copy = Object.assign({}, ky);

            box.push(copy);
          }
      };
  }
  boxstring = tr+'% ' + lc+'% ' + tr+'% ' + lc+'% ';
  //console.log('boxstring:', boxstring);
};

/* fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error)); */


//https://www.npmjs.com/package/@vladmandic/face-api
//https://github.com/justadudewhohacks/face-api.js/issues/826
//https://github.com/jeeliz/jeelizFaceFilter


//https://github.com/aneagoie/face-recognition-brain
//https://www.pexels.com/
//--openssl-legacy-provider

//https://www.geeksforgeeks.org/how-to-convert-functional-component-to-class-component-in-reactjs/
//https://dev.to/karkranikhil/face-recognition-using-javascript-33n5


const particlesInit = async (main) => {
  await loadFull(main);
};

const particlesLoaded = (container) => {
  //console.log(container);
}; 

/* const models = axios.get('http://localhost:3000/models').then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
}) 

console.log(models);  */

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      boxdata: {},
      boxstring: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    IMAGE_URL = this.state.input;
    //console.log('onInputChange', event.target.value);
  }

  onButtonSubmit = () => {

    //
const raw = JSON.stringify({
/*   "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
  }, */
  "inputs": [
      {
          "data": {
              "image": {
                  "url": this.state.input
              }
          }
      }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
  },
  body: raw
};





    //
    //this.setState({imageUrl: this.state.input})

    //console.log('onButtonSubmit',this.state.input);
    this.setState({imageUrl: this.state.input})
    //console.log('imageUrl:',this.state.input);

    getBase64FromImageUrl(this.state.input);
    IMAGE_URL = this.state.input;

    //console.log('MODEL_ID:', MODEL_ID )
    //console.log('MODEL_VERSION_ID:', MODEL_VERSION_ID )
    //console.log('PAT:', PAT )
    //console.log('IMAGE_URL:', IMAGE_URL )
    //console.log('requestOptions:',requestOptions);

    box = [];
    boxstring = '';
    if (IMAGE_URL) {
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.text())
        .then(result => {
          //console.log('result:', result);
          //console.log(JSON.parse(result));
          const obj = JSON.parse(result);
          printValues(obj);
          //console.log('boxstring after printValues:', boxstring);
          this.setState({boxstring: boxstring})
          this.setState({boxdata: box})
        })
        .catch(error => console.log('error', error));
      }
 
/*     const displaySize = { width: 300, height: 300 };
    setTimeout(async () => {
    const detections = faceapi
      .detectSingleFace(dataURL, new faceapi.TinyFaceDetectorOptions());
      //.withFaceLandmarks()
      //.withFaceExpressions()
      //.withAgeAndGender();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    console.log(detections);
  }, 5000); */

  }

  

  render() {
    const { imageUrl, boxstring } = this.state;
  return (
    <div className="App">     
    <Particles className='particles'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />

   <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}/>
    <FaceRecognition 
    imageUrl={imageUrl} boxstring={boxstring} /> 

    </div>
  );
  }
}
export default App;
