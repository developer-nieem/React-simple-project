import { useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiCalendar, HiDocument, HiHome, HiOutlineUser } from 'react-icons/hi';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {

    const [collapsed , setCollapsed] = useState(false)

  return (
    <div className='flex gap-4'>
      <Sidebar className='h-[100vh]' collapsed={collapsed} >

        <div className='text-right'> <button className='text-2xl mt-4 mx-3' onClick={()=> setCollapsed(!collapsed)}>  { collapsed ? <HiArrowNarrowRight  /> : <HiArrowNarrowLeft /> }</button></div>

        <Menu>
        <MenuItem icon={<HiHome />} component={ <Link to="/"></Link>}> Home </MenuItem>
          <SubMenu icon={<HiOutlineUser />} label="Admin">
            <MenuItem component={<Link to="/dashboard/admin"></Link>}> Admin charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem icon={<HiDocument />}> Documentation </MenuItem>
          <MenuItem icon={<HiCalendar />}> Calendar </MenuItem>
          <MenuItem icon={<HiDocument />}> Documentation </MenuItem>
          <MenuItem icon={<HiCalendar />}> Calendar </MenuItem>
          <MenuItem icon={<HiDocument />}> Documentation </MenuItem>
          <MenuItem icon={<HiCalendar />}> Calendar </MenuItem>
          <MenuItem icon={<HiDocument />}> Documentation </MenuItem>
          <MenuItem icon={<HiCalendar />}> Calendar </MenuItem>
          <MenuItem icon={<HiDocument />}> Documentation </MenuItem>
          <MenuItem icon={<HiCalendar />}> Calendar </MenuItem>
          <MenuItem icon={<HiDocument />}> Documentation </MenuItem>
          <MenuItem icon={<HiCalendar />}> Calendar </MenuItem>
          <MenuItem icon={<HiDocument />}> Documentation </MenuItem>
          <MenuItem icon={<HiCalendar />}> Calendar </MenuItem>
        </Menu>
      </Sidebar>
     
     <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
