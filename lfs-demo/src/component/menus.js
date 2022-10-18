import { Menu } from 'antd';
import React, { useState } from 'react';
import routerList from '../routers/routerList'

function getItem(label, key,  children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = routerList && routerList.map((item)=>{
    return getItem(item.pathName, item.key, item.children && item.children.map((ele, ide)=>{
        return  getItem(ele.pathName, ele.key )
    }))
})

// const items = [
//   getItem('Navigation One', 'sub1',  [
//     getItem('Option 1', '1'),
//     getItem('Option 2', '2'),
//     getItem('Option 3', '3'),
//     getItem('Option 4', '4'),
//   ]),
//   getItem('Navigation Two', 'sub2',  [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Submenu', 'sub3',  [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//   ]),
//   getItem('Navigation Three', 'sub4',  [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
// ];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
      console.log( keys )
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onSelect = (item)=>{
    
    console.log( this )
  };
  return (
    <Menu
      mode="inline"
      theme="dark"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
      onSelect ={onSelect}
    />
  );
};
export default App;