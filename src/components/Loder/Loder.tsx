import React, { useEffect } from"react"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom"

const Loader = () => {
    const navigate =useNavigate();
    const formData = useSelector((state: RootState) => state.form);
    const {giftType}=formData;
    console.log("formData",formData)
    useEffect(()=>{
        setTimeout(()=>{
            navigate(`/products/${giftType}`)
        },2000)
    },[])
    
    return (<div>
      

        <div className="mt-32 flex w-full justify-center">
            <img src="/images/loading.png" alt="" />
        </div>
        <div className="text-center font-bold mt-4 text-lg">Generating Gift Ideas...</div>
        <div className="text-center mt-4 px-4">Hang tight. Our AI-Powered Genie is generating gift ideas. This can take about 5-10 seconds.</div>
    </div>);
}

export default Loader;