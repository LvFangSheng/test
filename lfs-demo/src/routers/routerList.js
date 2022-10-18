import MenuOne from '../component/MenuOne/menuOne.js'
import MenuTwo from '../component/MenuOne/menuTwo.js'

const menusDate = [
  {
    path: "/MenuOne",
    pathName: '菜单一',
    key: "1",
    component: MenuOne,
    children: [
      {
        path: "/MenuOne",
        pathName: '菜单1-1',
        key: "/MenuOne",
        component: MenuOne,
      },
      {
        path: "/MenuOne/one",
        pathName: '菜单1-2',
        key: "/MenuOne/one",
        component: MenuTwo,
      }
    ]
  },
  {
    path: "/MenuOne",
    pathName: '菜单二',
    key: "2",
    component: MenuOne,
    children: [
      {
        path: "/MenuOne",
        pathName: '菜单2-1',
        key: "2-1",
        component: MenuOne,
      },
      {
        path: "/MenuOne/one",
        pathName: '菜单2-2',
        key: "2-2",
        component: MenuTwo,
      }
    ]
  },
]

export default menusDate;
