import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Table from "../table/Table";
import {payouts} from '../data/data'
import Header from '../header/Header'



const Dashboard = () => {
  return (
    <div>
    <Header/>
      <div className="">
        <div className="flex justify-between gap-6 bg-[#111739] p-4">
        <div className="flex gap-6 cursor-pointer">
          <span className="mt-[4px]">Quick Filters:</span>
          <span className="flex gap-2 bg-[#282d4d] p-2 rounded text-blue-500">
            <input type="radio" id="myCheckbox" />
            <p>All Payouts</p>
          </span>
          <span className="flex gap-2 bg-[#282d4d] p-2 rounded ">
            <input type="radio" id="myCheckbox" /> <p>Scheduled for next 2 days</p>
          </span>
          <span className="flex gap-2 bg-[#282d4d] p-2 rounded ">
            <input type="radio" id="myCheckbox" /> <p>Queued (RazorpayX A/c )1</p>
          </span>
        </div>
        <div className="text-blue-500">
            <span>View More Filters <KeyboardArrowDownIcon className="p-[4px]"/></span>
        </div>
        </div>
        <div className="p-[18px] bg-[#282d4d] m-4 rounded">
          <span className="bg-yellow-700 px-[4px] rounded text-black mr-2 text-[12px] font-bold">Test</span>
          <span className="text-sm">
            These are test payouts and do not affect the actual balance. They
            are used only for the purpose of intehration events
          </span>
          <span className="ml-[18px] text-blue-500 font-normal cursor-pointer">Learn More</span>
        </div>
        <div>
            <Table item={payouts}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
