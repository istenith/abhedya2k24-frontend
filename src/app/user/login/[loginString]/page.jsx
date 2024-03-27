'use client'
import React, {useState, useEffect} from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { baseUrl } from "@/utils/config";

const Page = () => {
  
  const router = useRouter()
  const params = useParams()
  console.log("loginHash recieved from url: ", params.loginString)
  let loginToken = ""
  const [seconds, setSeconds] = useState(5);
  const [isLoggedin, setIsLoggedin] = useState(false)

  useEffect(()=> {
    const sendRequest = async () => {
      fetch(`${baseUrl}/user/login/${params.loginString}`)
        .then((response) => {
          return response.json()
        })
        .then((data)=> {
          console.log("response recieved from login: ", data)
          loginToken = data.loginToken
          console.log("login token in: ", loginToken)
        }).catch((err) => {
          console.log(err)
        }).finally(() => {
          localStorage.setItem('loginToken', loginToken)
          setIsLoggedin(true)
        })
    }
    sendRequest()
  }, [])
    
    
    useEffect(() => {
      const countdownInterval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(countdownInterval);
            router.push('../../game/');
          }
          return prevSeconds - 1;
        });
      }, 1000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(countdownInterval);
    }, [router]); 

  return (
    <div className='w-screen h-[20rem] flex items-center justify-center'>
          <h1 >
            {
              isLoggedin ? 
            `You are logged in. \n Please wait while we redirect you in ${seconds} seconds ...`
              :
              `Logging in...`
            }
          </h1>
    </div>
  )
}

export default Page
