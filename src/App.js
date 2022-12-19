import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ImagesPagination from "./Components/ImagesPagination";

export default function App() {
  // const [data,setData]= useState([])
  // const[page,setPage]=useState(1)
  // useEffect(()=>{
  //    fetchdata()
  // },[])

  //  const tableStyle ={
  //     border:"2px solid black",
  //     borderCollapse: "collapse"
  //  }

  //  const ButtonsStyling ={
  //        width:"200px",
  //        display:'felx',
  //        alignItems:"center",
  //        justifyContent:"space-around"
  //  }

  // const  fetchdata = async ()=>{
  //   let data;
  //    await axios.get(`https://dummyjson.com/products?limit=100`).then(response=>{
  //         data= response.data.products
  //    })
  //       if(!!data&&data.length>0){
  //            setData(data)
  //       }
  // }

  //  const selectPage =(selectAPageNumber)=>{
  //   selectAPageNumber>=1&&selectAPageNumber<=data.length/9&&selectAPageNumber!=page
  //   ?setPage(selectAPageNumber):setPage(page)
  //  }

  return (
    <div className="App">
      <ImagesPagination />
    </div>
  );
}
