import React, { useState } from 'react';
import { Input } from 'antd'
import routerList from '../../routers/routerList'

const { Search } = Input;
function MenuTwo(props){
    const { getPathName } = props;
    const [ pathName, setPathName ] = useState(getPathName())

    function search(value){
        let thisPath = "/"+pathName;
        let newRouterList = [];
        let thisRouter = {};
        routerList && routerList.map((item)=>{
            item.children && item.children.map((ele)=>{
                if(ele.path == thisPath){
                    thisRouter = {path: value, component: ele.component}
                }else{
                    newRouterList.push(ele)
                }
            })
        })
        newRouterList.push(thisRouter)
        console.log(newRouterList);
        return newRouterList;
    }
    return (
        <div>
            this is MenuTwo page.
            <Search placeholder={pathName} onSearch={search}/>
        </div>
    )
}


export default MenuTwo;