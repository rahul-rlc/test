import React from "react";
import Link from "next/link";

function Button({ link, text }) {
  return (
    <button className="rounded-[50px] bg-gradient-to-l from-lime-200 to-lime-500 text-white text-lg font-semibold py-[15px] px-[50px]">
      {text}
    </button>
  );
}

export default Button;
