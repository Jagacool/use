import React from 'react';
import {Link} from  'react-router-dom';
import {IoIosAddCircleOutline} from "react-icons/io";

const Heading = () => {
  return (
    <>
      <div className="flex item center  mb-10 ">
        <Link to="/">
          <h5 className="text-gray-100 font-bold text-2x1 mr-2">
            Task App List
          </h5>
        </Link>
        <div className="flex grow text-right px4 py-2 m-2">
          <Link to="/add">
            <button
              className="bg-green-400 hover:bg-green-500
        text-white font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <IoIosAddCircleOutline /> &nbsp; Add Task
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Heading