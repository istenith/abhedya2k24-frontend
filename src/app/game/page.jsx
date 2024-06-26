"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/background-beams";
import { useRouter } from "next/navigation";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { baseUrl } from "@/utils/config";
import Marquee from "@/components/marquee";

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
  const [userWon, setUserwWon] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(true)

  useEffect(() => {
      const tokenInLocalStorage = localStorage.getItem("loginToken")
      // If user is logged in
      if (tokenInLocalStorage) {
        setUserLoggedIn(true)
        console.log("loaded page. token is: ", tokenInLocalStorage)
        if(!userWon) {
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
                } else if(response.status == 201){
                  setUserwWon(true)
                } else {
                  setUserLoggedIn(false)
                }
              })
            } catch (error) {
              console.log("error: ", error);
            } 
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
      }else if(response.status == 201){
        setUserwWon(true)
        alert("Can't believe you fell for it.")
        router.push("https://www.youtube.com/watch?v=xvFZjo5PgG0")
      }else{
        alert("Incorrect! Try again.")
      }
      
    })  
    .catch((err) => {
      alert("Incorrect! Try again.")
    }) 
    setUserAnswer("")
  }
  
  const abhedyaNotStarted = () => {
    alert("Abhedya starts at 6PM, 30th March 2024. Hold on tight till then!")
  }

  const lastRickRoll = () => {
    alert("OMG not again xD")
    router.push("https://www.youtube.com/watch?v=xvFZjo5PgG0")
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
          console.log("started abhedya")
          setStartedAbhedya(true)
        }
      })
    }
  }
  
  return (
    !userWon ? (
      startedAbhedya ? (
        <div clue={"debugged"} className=".no-scrollbar flex flex-col text-white justify-center items-center gap-5">
          <Marquee />
          <BackgroundBeams />
          <span className="text-4xl mt-6">Level {currentQuestion.level}</span>
          <div className="px-6 py-6 md:w-9/12 w-11/12 my-auto bg-[#151515] rounded shadow flex flex-col items-center">
            <div className="flex my-4 w-11/12 items-center relative text-wrap flex-col gap-3">
              <h2 className="w-5/6 dark:text-white text-lg text-justify font-normal">
                {currentQuestion.questionTitle}
              </h2>
              <p className="dark:text-white text-wrap overflow-scroll p-2 w-10/12 text-md text-left"> 
                {currentQuestion.questionBody}
              </p>
              
              {(()=>{
                console.log('andar se', currentQuestion)

                if (currentQuestion.questionAssets?.length > 0) {
                  return ( currentQuestion.questionAssets.map((asset, index) => {
                    console.log('asset number ', index, asset)
                    console.log(asset.type, asset.url)
                    switch (asset.type) {
                      case 'image': 
                        return (
                          <iframe src={asset.url} width="400" height="400"  allow="autoplay"></iframe>
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
                          <a href={asset.url} className="text-red-600 font-bold underline">Reveal clue.</a>
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
            <div className="w-full gap-2 text-white flex flex-row items-center ">
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
          <>
            <Marquee />
          <div className="h-full text-lg mt-10 flex text-white flex-col items-center justify-start px-12">
            <p>
            Welcome to <span className="text-green-500 underline m-0 font-extrabold text-xl px-2">Abhedya 3.0</span> - the <b className="mx-3 text-green-500 scale-125">BIGGEST</b>online cryptic hunt at NIT Hamirpur, brought to you by  <span className=" font-bold underline text-blue-400 mx-1"> Team ISTE</span>
            </p>
            <p className="mt-8">
              <span className="text-lg font-medium underline">These are the important guidelines everyone is request to read before embarking on this journey</span>
              <ul className="list-inside list-decimal pl-5">
                <li>This hunt consists of 15 questions, going from easy to hard and harder. Correctly answering the last one leads to the great surprise.</li>
                <li>You can use internet and all other related facilities</li>
                <li>Once you click Start, your time taken oer question will be recorded, no matter if you close you phone or laptop.</li>
                <li>Keep yours answers safe on a sheet of paper for future reference.</li>
                <li>Preferrably play on a laptop, or keep a laptop available incase it is required to clear a level.</li>
                <li>Answers can be in lowercase/uppercase/capitalize/camelcase.</li>
              </ul>
              <br />
              <br />
              <button onClick={finallyStartAbhedya} className="self-center rounded-full px-5 py-2 border duration-200 hover:bg-green-700">
                Start!
              </button>
            </p>
          </div>
          </>
          ) : (
            <>
              <Marquee />
            <div className="w-screen h-screen text-white flex flex-col items-center justify-start pt-12 ">
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
              </div>
    
            </div>
          </>
          )
      )
    ) : (
      <div className="flex flex-col text-white justify-center items-center gap-5">
        <Marquee />
        <h1 className="text-2xl font-sans">Congratulations! It was hard but worth it at the end. You just completed Abhedya!</h1>
        <h3>Click <span onClick={lastRickRoll} className=" cursor-pointer text-green-500 font-bold underline">here</span> to move on to the winners&apos; list</h3>
      </div>  
    )
  )
}
