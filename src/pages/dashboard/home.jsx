import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  CardFooter,
  Button,
  Carousel,
} from "@material-tailwind/react";
import call from "../../../public/img/call.png";

import sunny from "../../../public/img/sunny.png";
import cloudy from "../../../public/img/cloudy.png";
import sunnycloudy from "../../../public/img/sunny-cloudy.png";
import wind from "../../../public/img/wind.png";
import temp from "../../../public/img/temp.png";
import humid from "../../../public/img/humid.png";
import banner1 from "../../../public/img/banner1.jpg";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import Weather from "./weather";
import { useEffect, useState } from 'react';
import axios from 'axios';
import mqtt from 'mqtt';
import RealTimeData from "./RealTimeData";

export function Home() {
  const [data, setData] = useState({
    "humidity": 67,
    "temperature": 26,
    "wind_speed": 10
  });
  const THINGSBOARD_HOST_NAME = 'iot.crustea.id'; // ganti dengan hostname ThingsBoard Anda
  const ACCESS_TOKEN = 'nyzA0KZowFlKHquflBxr'; // ganti dengan access token
  const clientKeys = 'humidity,temperature,wind_speed'; // sesuaikan dengan kunci client
  // const sharedKeys = 'shared1,shared2'; // sesuaikan dengan kunci shared

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://${THINGSBOARD_HOST_NAME}/api/v1/${ACCESS_TOKEN}/attributes?clientKeys=${clientKeys}`
        );
        
        setData(response.data["client"]);
        // console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
    
    console.log("data : ", data);
    console.log(typeof(data["humidity"]));
    const interval = setInterval(fetchData, 5000); // Refresh data setiap 5 detik
    return () => clearInterval(interval);
  }, [THINGSBOARD_HOST_NAME, ACCESS_TOKEN, clientKeys]);

  return (
    <div className="mt-12">
      <div className="bg-red-700 text-white rounded-lg p-2 fixed bottom-28 md:bottom-8 right-8 z-40 flex cursor-pointer hover:ring-4 hover:ring-red-200">
          <img src={call} alt="alternative" className="w-5 mr-1"/>
          Emergency Call
        </div>
      <Carousel className="rounded-xl h-52 md:h-[580px]">
        <img
          src={banner1}
          alt="image 1"
          className="w-full h-full object-cover object-center"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

    {/* weather card */}
    <div className="w-full md:w-5/6 my-5 md:my-10 bg-white m-auto p-10 rounded-xl ring-8 ring-white ring-opacity-40">

      <div className="flex justify-between">
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <p className="text-lg md:text-2xl font-bold">Good Morning</p>
            <p className="">Fri, 22 Sep 2024</p>
          </div>
          
          <span className=" mt-1 text-black ">Pura Sakenan, Denpasar</span>
        </div>
        {/* <svg className="h-24 w-24 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg> */}
      </div>
      <div className="flex justify-between mt-12">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">29°C</span>
          <img src={cloudy} alt="alternative" className="h-10 w-10 mt-3"/>
          {/* {/* {/* <svg className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg> */} 
          <span className="font-semibold mt-1 text-sm">11:00</span>
          <span className="text-xs font-semibold text-gray-400">AM</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">31°C</span>
          <img src={sunnycloudy} alt="alternative" className="h-10 w-10 mt-3"/>
          {/* {/* {/* <svg className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg> */} 
          <span className="font-semibold mt-1 text-sm">1:00</span>
          <span className="text-xs font-semibold text-gray-400">PM</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">32°C</span>
          <img src={sunnycloudy} alt="alternative" className="h-10 w-10 mt-3"/>
          {/* {/* {/* <svg className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z"/></svg> */} 
          <span className="font-semibold mt-1 text-sm">3:00</span>
          <span className="text-xs font-semibold text-gray-400">PM</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">31°C</span>
          <img src={sunnycloudy} alt="alternative" className="h-10 w-10 mt-3"/>
          <span className="font-semibold mt-1 text-sm">5:00</span>
          <span className="text-xs font-semibold text-gray-400">PM</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">27°C</span>
          <img src={sunny} alt="alternative" className="h-10 w-10 mt-3"/>
          <span className="font-semibold mt-1 text-sm">7:00</span>
          <span className="text-xs font-semibold text-gray-400">PM</span>
        </div>
        <div className="hidden md:flex flex-col items-center">
          <span className="font-semibold text-lg">27°C</span>
          <img src={sunny} alt="alternative" className="h-10 w-10 mt-3"/>
          <span className="font-semibold mt-1 text-sm">9:00</span>
          <span className="text-xs font-semibold text-gray-400">PM</span>
        </div>
        <div className="hidden md:flex flex-col items-center">
          <span className="font-semibold text-lg">27°C</span>
          <img src={sunny} alt="alternative" className="h-10 w-10 mt-3"/>
          <span className="font-semibold mt-1 text-sm">11:00</span>
          <span className="text-xs font-semibold text-gray-400">PM</span>
        </div>
      </div>
      <p className="mt-5 mb-2">Data by BMKG</p>
      <hr/>
      <div className="flex justify-around mt-4">
        <div className="flex flex-col items-center">
          <img src={temp} alt="alternative" className="h-10 w-10 mt-3"/>
          <span className="mt-1 text-sm">Temperature</span>
          <span className="font-semibold text-lg">{data["temperature"].toFixed(2)} °C</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={humid} alt="alternative" className="h-10 w-10 mt-3"/>
          <span className="mt-1 text-sm">Humidity</span>
          <span className="font-semibold text-lg">{data["humidity"].toFixed(2)} %</span>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col items-center md:mt-3">
          <img src={wind} alt="alternative" className="h-10 w-10 mt-3"/>
          <span className="mt-1 text-sm">Wind Speed</span>
          <span className="font-semibold text-lg">{data["wind_speed"]} m/s</span>
        </div>
      </div>
      {/* <RealTimeData /> */}
    </div>
      <div className="mb-4 ">
        <Card className="border border-blue-gray-100 shadow-sm ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <div className="flex justify-between">
              <Typography variant="h5" color="blue-gray" className="mb-3">
                  Public Informations
              </Typography>
             
              <a href="/dashboard/information" className="text-blue-700 text-sm md:text-base">Show More</a>
              
            </div>
            
          </CardHeader>
          <CardBody className="pt-0">
            <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <button className="text-blue-700 flex text-xs md:text-sm mt-1 font-semibold">
                        Read More
                      </button>
                    }
                  />
                ))}
                
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
