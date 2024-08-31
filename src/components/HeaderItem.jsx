/* eslint-disable react/prop-types */

const HeaderItem = ({Icon,label}) => {
    return (
      <div className="flex gap-2 items-center text-sm cursor-pointer hover:underline underline-offset-8 mb-2">
      <div className="text-white"><Icon/></div>
      <span className="text-white">{label}</span>
     </div>
    )
  }
  
  export default HeaderItem