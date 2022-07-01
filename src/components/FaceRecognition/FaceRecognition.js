import  React  from 'react';
import './FaceRecognition.css';
//import * as faceapi from 'face-api.js';

//                <div className='bounding-box' style={{top: '0.23px', right: '0.73px', bottom: '0.60px', left: '0.29px'}}></div>  
    //https://bobbyhadz.com/blog/react-get-element-by-id#:~:text=To%20get%20an%20element%20by,element%20in%20the%20useEffect%20hook.
    //https://bobbyhadz.com/blog/react-get-element-by-id#:~:text=To%20get%20an%20element%20by,element%20in%20the%20useEffect%20hook.

 //               inset: 23px 73px 6px 29px; 
  //             https://developer.mozilla.org/en-US/docs/Web/CSS/inset 
 //            <div className='bounding-box' style={{top: boxdata.toprow, right: boxdata.leftcol, bottom: boxdata.bottomrow, left: boxdata.rightcol}}></div>
 
//style={{inset: '23px 73px 60px 29px'}}
//style={{paddingLeft: '15px'}}

//works
//<div className='bounding-box' style={{inset: '23px 73px 40px 29px'}}></div> 

const FaceRecognition = ({ imageUrl, boxstring }) => {
    //console.log('imageUrl in FaceRecognition:', {imageUrl});
    //console.log('boxdata in FaceRecognition:' , boxdata);
    //const bdata = '25px 75px 65px 30px';
    //const boxdata1 = '119px 146px 198px 369px';
    //const boxdata1 = '146px 119px 369px 198px';
    //const boxdata1 = '369px 198px 146px 119px';
    //const boxdata1 = ' 369px 146px 119px 198px';
    //console.log('boxdata1:', boxdata1);
    //console.log('bdata:', bdata);
    if (boxstring > ''){
        console.log('boxstring:', boxstring, typeof boxstring);
    }
    //console.log('bdata:',bdata, 'boxdata:',boxdata, 'boxdata stringfy:', JSON.stringify(boxdata));
    //console.log(Object.values(boxdata));
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id="inputimage" alt='' src={imageUrl} width='500px' height='auto' /> 
                <div className='bounding-box' style={{inset: boxstring}}></div> 
         </div>
        </div>
    )
}



export default FaceRecognition;