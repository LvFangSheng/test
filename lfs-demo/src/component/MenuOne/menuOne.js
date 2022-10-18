import React, { useState } from 'react';
import { Input } from 'antd'
import routerList from '../../routers/routerList'

const { Search } = Input;
function MenuOne(props){
    const { getPathName } = props;
    const [ pathName, setPathName ] = useState(getPathName())

    function search(value){
        // console.log('this input value ===',  value)
        let thisPath = "/"+pathName;
        let newRouterList = [];
        let thisRouter = {};
        routerList && routerList.map((item)=>{
            if(item.path == thisPath){
                thisRouter = {path: value, component: item.component}
            }else{
                newRouterList.push(item)
            }
        })
        newRouterList.push(thisRouter)
        return newRouterList;
    }
    return (
        <div>
            this is MenuOne page.
            <Search placeholder={pathName} onSearch={search}/>
        </div>
    )
}


export default MenuOne;