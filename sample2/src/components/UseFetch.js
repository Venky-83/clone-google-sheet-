import { useEffect, useState } from "react";

const useFetch = (request) => {

    const [data,setData]=useState(null);
    const [pending ,setPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect (()=>{
                    setTimeout(()=>{
                                    fetch(request)
                                    .then((res)=>{
                                            if(res.ok===false)
                                                {
                                                    throw Error("Data not found, please try fot thre different data");
                                                }
                                        return res.json()})
                                    .then((recevedData)=>{setData(recevedData);setPending(false)})
                                    .catch((error)=>{setError(error.message);setPending(false)})
                                    },500)
                    } ,[data])
                                
                    return(
                        {data,pending,error}
                    );                               
}
 
export default useFetch;