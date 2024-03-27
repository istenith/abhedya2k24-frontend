"use client";
import { BackgroundBeams } from "@/components/background-beams";
import { baseUrl } from "@/utils/config";
import React, {useState, useEffect} from "react";

export default function SparklesPreview() {
  const [data, setdata] = useState([])
  const [dataLoaded, setdataLoaded] = useState(false)

  

  useEffect(()=>{
    try {
      fetch(`${baseUrl}/play/leaderboard/`)
        .then(async response => response.json())
        .then(data => {
          setdata(data.sortedUsers)
          console.log("Fetched leaderboard")
          console.log(data.sortedUsers)
        })
        .finally(()=>{
          setdataLoaded(true)
          console.log("Leaderboard loaded.")
        })
        .catch(err => console.log('fetch error: ', err))
    } catch (error) {
      console.log('outside block error: ', error)
    }
  }, [])

  return (
    <div className="flex flex-col gap-2 items-center overflow-hidden justify-center ">
      <BackgroundBeams />
               <div className="text-4xl pt-10 font-extrabold">
                    Leaderboard
               </div>
      <div className="mt-10 h-[80vh] relative overflow-scroll px-0">
        <table
          className="w-[90vw] min-w-max h-screen table-auto text-left"
          style={{
            // boxShadow: "14px 11px 65px -11px rgba(0,0,0,0.71)",
          }}
        >
          <thead className="sticky top-0 ">
            <tr className="">
              <th className="border-y border-gray-900 text-center p-4">
                <p className="block antialiased font-sans text-blue-gray-900 font-extrabold text-xl leading-none opacity-70">
                  Rank
                </p>
              </th>
              <th className="border-y border-gray-900 text-center p-4">
                <p className="block antialiased font-sans text-blue-gray-900 font-extrabold text-xl leading-none opacity-70">
                  User Name
                </p>
              </th>
              <th className="border-y text-center border-gray-900 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-blue-gray-900 font-extrabold text-xl leading-none opacity-70">
                  Level
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataLoaded &&  data.map((user, index) => {
              return(
                <tr key={index} className="hover:bg-[#222222c7] ease-in-out">
                <td className="p-4 border-b border-gray-900">
                  <div className="flex items-center justify-center gap-3">
                    <p className="block antialiased text-center font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      {index + 1}
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b text-center border-gray-900">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {user.username}
                  </p>
                </td>
                <td className="p-4 border-b text-center border-gray-900">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {user.currentLevelInt}
                  </p>
                </td>
              </tr>
              )
            }) }

          </tbody>
        </table>
      </div>
    </div>
  );
}
