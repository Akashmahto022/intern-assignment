import React from "react";
import './table.css'
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpIcon from "@mui/icons-material/Help";

const Table = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between p-6">
        <div className="flex gap-4">
          <input type="checkbox" className="mt-[-10px] cursor-pointer" />
          <span>Showing 1-5 payouts</span>
          <span className="flex ">
            <input type="radio" className="mt-[-10px] mx-4 cursor-pointer" />
            Sort by{" "}
            <span className="text-blue-500 mx-1 font-medium cursor-pointer">
              {" "}
              latest creation data
            </span>
            <KeyboardArrowDownIcon />
          </span>
        </div>
        <div className="flex gap-4">
          <RefreshOutlinedIcon className="cursor-pointer" />
          <MoreVertOutlinedIcon className="cursor-pointer" />
          <span className="flex gap-1 cursor-pointer border-[1px] border-blue-500 py-1 px-2 mt-[-2px]">
            <FileDownloadOutlinedIcon />
            <p>Export</p>
          </span>
          <span className="border-[1px] border-blue-500 py-1 bg-blue-500 rounded cursor-pointer px-2 text-[12px]">
            + PAYOUT <span className="text-slate-500">|</span>
            <KeyboardArrowDownIcon className="p-[4px]" />
          </span>
        </div>
      </div>
      <hr className="border-[1px] border-gray-700 mx-6 " />
      <div className="table-data ">
        <table className="table">
          <thead>
            <tr>
              <th>CREATED AT</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th>CONTACT</th>
              <th>CREATED BY</th>
              <th>
                UTR
                <HelpIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            {item.map((data)=>(
              <tr key={data.id}>
                <td>{data.createdat}</td>
                <td>{data.amount}</td>
                <td>{data.status}</td>
                <td>{data.contact}</td>
                <td>{data.createdBy}</td>
                <td>{data.utr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <input type="" />
      </div>
    </div>
  );
};

export default Table;
