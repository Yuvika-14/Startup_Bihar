import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Startupdetails from './startupdetails';
import Startupfinanceandemployee from './startupfinanceandemployee';
import Applytranche from './applytranche';
import Query1 from './query1';
import GrievanceContainer from './grievance-container';
//import './ProfileMain.css';
import NavBar from './NavBar';
import Mpr from './Mpr';
import { useNavigate } from 'react-router-dom';




const ProfileMain = (props) => {
  return (
    <div className="w-full flex min-h-max items-start flex-col justify-start bg-gradient-to-r from-gray-200 to-gray-300">
      <Helmet>
        <title>Startup Bihar Portal</title>
        <meta property="og:title" content="Startup Bihar Portal" />
      </Helmet>
      <NavBar />

      <Startupdetails />
      <div className="flex flex-col md:flex-row w-full items-start justify-start space-y-4 md:space-y-0 p-4"> {/* Adjusted for responsive layout */}

        {/* First Column (Fixed Size) */}
        <div className="flex-none w-auto h-auto flex flex-col items-start">
          <Startupfinanceandemployee
            text={
              <Fragment>
                <span className="text-gray-800 text-sm mt-6 font-medium tracking-[1.34px]">Employee</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="text-gray-400 text-xs mt-2 font-medium tracking-[1.34px]">See All</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="text-white text-xs">Total</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="text-white text-lg mt-1 font-bold">₹ 10,00,000</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="text-gray-800 text-xs">Invested</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="text-gray-800 text-lg mt-1 font-bold">₹ 4,50,000</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="text-gray-800 text-xs text-right">45%</span>
              </Fragment>
            }
            rootClassName="startupfinanceandemployeeroot-class-name"
          />
          <div className='mt-4'>Upload Your Bills
            <div className="mt-4 max-w-xs mx-auto p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white">
              <div className='flex'>
                <div className=''>
                  <h2 className="text-m font-semibold">Add New Bills</h2>
                  <p className="mt-2 text-sm">Keep track of the bills and investments</p>
                </div>
                <div className="justify-between items-center mt-6 ">
                  <button className="ml-4 px-6 py-2 text-m font-semibold rounded-lg bg-white text-purple-600 hover:bg-gray-100">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex-grow flex items-start flex-col ml-5 mr-5"
          navigateTo="startupform">
          <div className="flex-1 flex items-start flex-col">
            <span className="text-[rgb(37,37,37)] text-[18px]">First Tranche</span>
            <Applytranche
              text="Apply for First Tranche"
              text1="Fill all the required elements of the form."
              navigateTo="/startupform" // Route for first tranche form
            />
            <span className="text-[rgb(37,37,37)] text-[18px] mt-8">Grievance Redressal</span>
            <GrievanceContainer
              text="Enter your grievance here"
              text1="Please describe the issue in detail"
              imageSrc="/external/grievance-image.png"
              imageAlt="Grievance Form Image"
              navigateTo=""
            />
            <Mpr 
            navigateTo="/upload"/>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex-grow text-white inline-block text-[11px] font-mont leading-[1.4]"
          navigateTo="secondtranche">
          <div className="flex-1 flex items-start flex-col">
            <span className="text-gray-900 text-lg">Second Tranche</span>
            <Applytranche
              text="Apply for Second Tranche"
              text1="Fill all the required elements of the form."
              navigateTo="/secondtrance" // Route for first tranche form
            />
            <span className="text-gray-900 text-lg mt-8">Post Seed Fund</span>
            <Applytranche
              text="Apply for Post Seed Fund"
              text1="Fill all the required elements of the form."
              navigateTo="/seedfunded" // Route for first tranche form
            />
          </div>
        </div>

        {/* Fourth Column */}
        <div className="ml-5 flex-grow w-auto flex items-start flex-col">
          <div className="flex-1 flex items-start flex-col">
            <span className="text-gray-800 text-lg">Queries by Industry Dept</span>

            <Query1
              text="Query Regarding Employee"
              text1="How many employees do you have employed in September 2024?" />
            <Query1
              text="Query Regarding Employee"
              text1="How many employees do you have employed in September 2024?" />
            <Query1
              text="Query Regarding Employee"
              text1="How many employees do you have employed in September 2024?"

            />



          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfileMain;
