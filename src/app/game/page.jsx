"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/background-beams";
import { useRouter } from "next/navigation";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { baseUrl } from "@/utils/config";

const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
      >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default function BackgroundGradientDemo() {
  
  const router = useRouter()
  const [startedAbhedya, setStartedAbhedya] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [userAnswer, setUserAnswer] = useState("")
  const [userLoggedIn, setUserLoggedIn] = useState(true)

  useEffect(() => {
      const tokenInLocalStorage = localStorage.getItem("loginToken")
      // If user is logged in
      if (tokenInLocalStorage) {
        setUserLoggedIn(true)
        console.log("loaded page. token is: ", tokenInLocalStorage)
        try {
          fetch(`${baseUrl}/play/`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                'token': tokenInLocalStorage
              },
              body: JSON.stringify({
                "token": tokenInLocalStorage
              })
            }).then(async response => {
              if (response.status === 200){
                const data = await response.json()
                console.log('data: ', data, typeof(data))
                const questionReturnedFromBackend = data["question"];
                setCurrentQuestion(questionReturnedFromBackend)
                console.log('Current question', questionReturnedFromBackend)
              } else {
                setUserLoggedIn(false)
              }
            })
            

          } catch (error) {
            console.log("error: ", error);
          } 
        }else{
          setUserLoggedIn(false)
        }

    }, []);
  
  useEffect(()=>{
    const tokenInLocalStorage = localStorage.getItem("loginToken")
    if (tokenInLocalStorage) {
      fetch(`${baseUrl}/user/get_detail_startedAbhedya`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({'token': tokenInLocalStorage})
      })
      .then(async res=> await res.json())
      .then(data => {
        console.log(data.startedAbhedya)
        setStartedAbhedya(data.startedAbhedya)
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])
  
    
    const handleAnswerSubmit = async (e) => {
      e.preventDefault()
      fetch(`${baseUrl}/play/submit`, {
        'method': 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "token": localStorage.getItem("loginToken"),
        "userAnswer": userAnswer
      })
    })
    .then(async (response) => {
      const data = await response.json()
      setCurrentQuestion({})
      
      // check response and stuff
      if(response.status == 200) {
        alert('Correct Answer!')
        
        console.log('about to change question state')
        setCurrentQuestion(data)
        console.log('changed question state')
      }else{
        alert("Incorrect! Try again.")
      }
      
    })  
    .catch((err) => {
      alert("Incorrect! Try again.")
    }) 
    setUserAnswer("")
  }
  
  const finallyStartAbhedya = () => {

    console.log('clicked start')
    const tokenInLocalStorage = localStorage.getItem("loginToken")
    
    if (tokenInLocalStorage) {
      console.log('token found in game screen when clicking start: ', tokenInLocalStorage)
      fetch(`${baseUrl}/user/startAbhedya`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({'token': tokenInLocalStorage})
      }).then(res => {
        if (res.status == 200) {
          setStartedAbhedya(true)
        }
      })
    }else{

    }
  }
  
  return (
    startedAbhedya ? (
      <div className="flex flex-col justify-center items-center gap-5">
      <BackgroundBeams />
      <span className="text-4xl mt-6">Level {currentQuestion.level}</span>
      <div className="px-6 py-6 md:w-9/12 w-11/12 my-auto bg-[#151515] rounded shadow flex flex-col items-center">
        <div className="flex my-4 flex-col gap-3">
          <h2 className="w-5/6 dark:text-white text-lg text-justify font-normal">
            {currentQuestion.questionTitle}
          </h2>
          <p className=" w-5/6">
            {currentQuestion.questionBody}
          </p>
          
          {(()=>{
            console.log('andar se', currentQuestion)

            if (currentQuestion.questionAssets?.length > 0) {
              return ( currentQuestion.questionAssets.map((asset, index) => {
                console.log('asset number ', index, asset)
                switch (asset.type) {
                  case 'image': 
                    return (
                      <img src={asset.url} height={200} width={200} alt={asset.url} className="rounded-md" />
                    )
                    break
                  case 'video':
                    return (
                      <video width={200} height={200} controls>
                        <source src={asset.url} type="video/mp4" />
                      </video>
                    )
                    break
                  case 'audio':
                    return(
                      <audio src={asset.url} controls />
                    )
                    break
                  case 'redirect':
                    return (
                      <a href={asset.url} className=" text-red-600 underline">Reveal</a>
                    )
                    break
                  default:
                    return(
                      <></>
                    )
                }
              }))
            }
          })()}
          
        </div>
        {/* <img src="https://0x0.st/XrOk.JPG" className="lg:w-[600px] sm:w-[320px] md:w-[490px]" /> */}
        <div className="w-full gap-2 flex flex-row items-center ">
          <input
            type="text"
            placeholder="Type your answer here"
            onChange={(e)=>setUserAnswer(e.target.value)}
            value={userAnswer}
            onKeyDown={(e)=> e.key == 'Enter' && handleAnswerSubmit(e)}
            className="rounded-full border border-neutral-800 focus:ring-2 focus:ring-teal-500 h-10 p-4 w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700"
          />
          <button className="shadow-[inset_0_0_0_2px_#616467] px-5 py-2 flex items-center gap-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
            onClick={handleAnswerSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    ) : (
      userLoggedIn ? (
      <div className="h-full text-lg mt-10 flex flex-col items-center justify-start px-12">
        <p>
        Welcome to <span className="text-green-500 underline m-0 font-extrabold text-xl px-2">Abhedya 3.0</span> - the <b className="mx-3 text-green-500 scale-125">BIGGEST</b>online cryptic hunt at NIT Hamirpur, brought to you by  <span className=" font-bold underline text-blue-400 mx-1"> Team ISTE</span>
        </p>
        <p className="mt-8">
          <span className="text-lg font-medium underline">These are the important guidelines everyone is request to read before embarking on this journey</span>
          <ul>
            <li>You can use internet and all other related facilities</li>
            <li>Once you click Start, your time taken oer question will be recorded, no matter if you close you phone or laptop.</li>
          </ul>
          <br />
          <br />
          <button onClick={finallyStartAbhedya} className="self-center rounded-full px-5 py-2 border duration-200 hover:bg-green-700">
            Start !
          </button>
        </p>
      </div>
      ) : (
        <div className="w-screen h-screen flex flex-col items-center justify-start pt-12 ">

          <div className=" w-11/12 md:w-5/12 backdrop-blur-sm bg-gray-950 h-contain rounded-2xl p-8 flex border border-white flex-col justify-between items-start">
            <h1 className="text-xl font-semibold">You are not currently logged in.</h1>
            <p className="  text-gray-200">
              To participate in <big>Abhedya</big> - the biggest online cryptic hunt @ NIT Hamirpur, make sure that you are <a href="/sign" className=" text-blue-400 italic underline">registered&rarr;</a>
            </p>
            <p className="  text-gray-200 text-md">
              <u><b className="text-white">If you have already registered</b></u>, make sure to - <br />
                <ol className=" list-decimal ml-8">
                  <li>Find the login link recieved on your e-mail (check spam folder too!) &#9745;</li>
                  <li>Click the login button, or the link provided in the mail &#9745;</li>
                </ol>
                Now you will be logged in and ready to play. All the best for this adventure!
            </p>
            <p>
              Incase of any discrepancies or doubts, contact 
              <ul className="list-disc ml-8">
                <li>Sourabh - 9418223946</li>
                <li>Mehul - 9717333704</li>
              </ul>
            </p>
          {/* <Meteors number={10} /> */}
          </div>

        </div>
      )
    )
  );
}
