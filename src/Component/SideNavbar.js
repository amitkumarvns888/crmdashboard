import React from 'react'
import dashboardicon from '../crmimage/dashboardicon.png'
import crmimg2  from '../crmimage/crmimg2.png'
import icon3 from '../crmimage/icon-wrapper.png'
import dashmainimg from '../crmimage/dashmainimg.png'
import '../App.css'
const SideNavbar = () => {
    return (
        <div>

            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-white elevation-4">
              
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={dashmainimg}  alt="" />
                        </div>
                        <div className="info font30">
                            <div >Mantis</div>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}

                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item menu-open">
                                <a href="#" className="nav-link ">
                                    <img src={dashboardicon} className='sidebarimg' />
                                    <p className='font14'>
                                        Dashboard
                                    </p>
                                </a>
                            </li>

                            <li className="nav-item menu-open">
                                <a href="#" className="nav-link ">
                                    <img src={icon3} className='sidebarimg' />
                                    <p className='font14'>
                                        Contact
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item menu-open">
                                <a href="#" className="nav-link ">
                                    <img src={crmimg2} className='sidebarimg' />
                                    
                                    <p className='font14'>
                                        Compaign
                                    </p>
                                </a>
                            </li>



                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>

        </div>
    )
}

export default SideNavbar
