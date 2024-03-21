"use client";
import { BackgroundBeams } from "@/components/background-beams";
import React from "react";

export default function SparklesPreview() {
  const data = [
    {
      rank: 1,
      userName: "UserA",
      level: "10",
    },
    {
      rank: 2,
      userName: "UserB",
      level: "20",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
    {
      rank: 3,
      userName: "UserC",
      level: "30",
    },
  ];

  return (
    <div className="flex flex-col gap-2 items-center overflow-hidden justify-center ">
      <BackgroundBeams />
               <div className="text-4xl pt-10 font-extrabold">
                    Leaderboard
               </div>
      <div className="px-6 mt-10 h-[80vh] relative overflow-scroll px-0">
        <table
          className="w-[90vw] min-w-max h-screen table-auto text-left"
          style={{
            // boxShadow: "14px 11px 65px -11px rgba(0,0,0,0.71)",
          }}
        >
          <thead className="sticky top-0 ">
            <tr className="">
              <th className="border-y border-gray-900 text-center p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-extrabold text-xl leading-none opacity-70">
                  Rank
                </p>
              </th>
              <th className="border-y border-gray-900 text-center p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-extrabold text-xl leading-none opacity-70">
                  User Name
                </p>
              </th>
              <th className="border-y text-center border-gray-900 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-extrabold text-xl leading-none opacity-70">
                  Level
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-[#222222c7] ease-in-out">
                <td className="p-4 border-b border-gray-900">
                  <div className="flex items-center justify-center gap-3">
                    <p className="block antialiased text-center font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      {item.rank}
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b text-center border-gray-900">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {item.userName}
                  </p>
                </td>
                <td className="p-4 border-b text-center border-gray-900">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {item.level}
                  </p>
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
}
