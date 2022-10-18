import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import routerList from './routerList'

function getPathName (){ return window.location.pathname.slice(1)}

export default ()=>{
    return (
        <BrowserRouter>
            <Routes>
               {
                  routerList.map((item)=>{
                    if(item.children && item.children.length){
                        return item.children.map((ele)=>{
                            return <Route path={ele.path} element={<ele.component getPathName={getPathName}/>} key={ele.key}/>
                        })
                    }
                    return <Route path={item.path} element={<item.component getPathName={getPathName}/>} key={item.key}/>
                  })
               }
            </Routes>
        </BrowserRouter>
    )
}