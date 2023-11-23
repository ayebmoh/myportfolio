import React from 'react'

const Projecttags = ({ name , onClick , isSelected }) => {
  const buttonstyles =isSelected
  ? "text-white border-purple-500" :
    "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
    <button className={`rounded-full border-2 
    0 px-6 py-3 tetx-xl cursor-pointer ${buttonstyles}` }
    onClick={() => onClick(name)}>
    {name}
    </button>
  )
}

export default Projecttags
