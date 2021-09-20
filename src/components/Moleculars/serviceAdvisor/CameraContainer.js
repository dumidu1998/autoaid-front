import React, { useState } from 'react'
import Webcam from "react-webcam";
import { storage } from '../../../Firebase';

const videoConstraints = {
    width: 350,
    height: 200,
    facingMode: "user"
};

export default function CameraContainer(props) {

    const [btnstatus, setbtnstatus] = useState('Mark as Done');
    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);
    const [progress, setprogress] = useState(0);
    // const [opened, setopened] = useState(true);
    const [opened, setopened] = useState(true);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot({ width: 350, height: 200 });
            setImage(imageSrc);
        },

        [webcamRef]
    );

    const dataURLtoBlob = (dataurl) => {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }


    function takephoto(e) {
        e.preventDefault();
        capture();
        // console.log(dataURLtoBlob(image));
    }

    function upload() {
        const path = "checklist";
        console.log(dataURLtoBlob(image));
        const newtime = new Date().getTime();
        const uploadTask = storage.ref(`${path}/${newtime}`).put(dataURLtoBlob(image));
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setprogress(prog);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage.ref(path).child(newtime.toString()).getDownloadURL().then(url => {
                    props.setter(url);
                    // console.log(url);
                })
            }
        )
    }

    return (
        <>
            <div className="w-72 h-44 bg-white border flex items-center justify-center text-3xl font-bold text-gray-300">
                {opened ? <div onClick={() => setopened(!opened)} className="cursor-pointer flex flex-col items-center justify-center">
                    Click to Open
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                </div> :
                    image == '' ?
                        <div>
                            <Webcam
                                audio={false}
                                height={200}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                width={350}
                                videoConstraints={videoConstraints}
                            />
                        </div>
                        :
                        <img src={image} />
                }
            </div>
            {progress == 100 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg> : ''}
            {progress == 100 ? '' :
                opened ? '' :
                    image == '' ?
                        <button type="button" onClick={takephoto} className="px-5 py-2 my-3 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">Take Photo</button>
                        :
                        <div>
                            <button type="button" onClick={upload} className="px-5 py-2 my-3 mr-5 rounded-lg shadow-lg bg-primary-0 font-semibold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                            <button type="button" onClick={() => setImage('')} className="px-5 py-2 my-3 rounded-lg shadow-lg bg-third-0 font-semibold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
            }
        </>
    )
}
