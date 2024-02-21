import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import HearingDisabledOutlinedIcon from "@mui/icons-material/HearingDisabledOutlined";
import PersonRemoveAlt1OutlinedIcon from "@mui/icons-material/PersonRemoveAlt1Outlined";

const Header = () => {
  return (
    <div className="bg-[#080d29] p-[18px] font-[Source Sans Pro Topnav', sans-serif]">
      <div className="flex justify-between">
        <div className="flex cursor-pointer">
          <span>
            <ArrowOutwardIcon className="p-1 bg-[#282d4d] rounded mr-2 mt-[-6px]" />
            <span className="">
              Payouts <span className="ml-2 mr-4">/</span>
            </span>
          </span>
          <ul className="flex gap-6">
            <li className="bg-[#282d4d] py-1 px-2 rounded text-blue-500 mt-[-3px]">
              Single
            </li>
            <li>
              Bulk{" "}
              <span className="bg-green-500 rounded-2xl px-1 text-[10px] mt-[-12px]">
                NEW
              </span>
            </li>
            <li>Tally</li>
            <li>Payout Links</li>
          </ul>
        </div>
        <div className="flex gap-6 cursor-pointer">
          <span className="border-[1px] rounded border-blue-500 py-1 px-2 text-[12px]">
            + PAYOUT <span className="text-slate-500">|</span>
            <KeyboardArrowDownIcon className="p-[4px]" />
          </span>
          <span className="flex gap-3 text-blue-500 mt-[6px]">
            <SearchIcon />
            <HearingDisabledOutlinedIcon className="text-yellow-600"/>
            <PersonRemoveAlt1OutlinedIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
