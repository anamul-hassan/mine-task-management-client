import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  FaAngleDown,
  FaCheck,
  FaMoon,
  FaPenAlt,
  FaSun,
  FaTasks,
} from 'react-icons/fa';
import mainLogo from '../../../asset/logo/main-logo.png';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import { AuthContext } from '../../../context/AuthProvider';
import LoaderButton from '../../../components/LoaderButton';

const Header = () => {
  const navigate = useNavigate();
  const { user, loading, userLogout } = useContext(AuthContext);
  const [lightMode, setLightMode] = useState(true);
  const handleLogout = () => {
    userLogout().then(result => {
      navigate('/');
    });
  };
  const navItems = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#e0d4e8] py-4 border-opacity-50 border-t-[3px] border-[#fe7178] leading-8 px-4 inline-flex bg-opacity-10 rounded-xl duration-300'
            : 'bg-transparent py-4 border-t-[3px] border-transparent leading-8 px-4 inline-flex bg-opacity-10 rounded-xl duration-300'
        }
        to="/add_task"
      >
        <span className="inline-flex items-center text-[#e0d4e8]">
          <FaPenAlt className="mr-2 text-[#b89cc2]" />
          Add Task
        </span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#e0d4e8] py-4 border-opacity-50  border-t-[3px] border-[#fe7178] leading-8 px-4 inline-flex bg-opacity-10 rounded-xl duration-300 '
            : 'bg-transparent py-4 border-t-[3px] border-transparent leading-8 px-4 inline-flex bg-opacity-10 rounded-xl duration-300'
        }
        to="/my_task"
      >
        <span className="inline-flex items-center  text-[#e0d4e8]">
          <FaTasks className="mr-2 text-[#b89cc2]" />
          My Task
        </span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'bg-[#e0d4e8] border-opacity-50  py-4 border-t-[3px] border-[#fe7178] leading-8 px-4 inline-flex bg-opacity-10 rounded-xl duration-300'
            : 'bg-transparent py-4 border-t-[3px] border-transparent leading-8 px-4 inline-flex bg-opacity-10 rounded-xl duration-300'
        }
        to="/finished_task"
      >
        <span className="inline-flex items-center text-[#e0d4e8]">
          <FaCheck className="mr-2 text-[#b89cc2]" />
          Finished Task
        </span>
      </NavLink>
    </>
  );
  return (
    <header className="pt-6">
      <nav className="w-11/12 mx-auto border-[3px] border-b-0 px-2 rounded-t-xl border-[#e0d4e8] border-opacity-30 py-2 flex items-center justify-between bg-[#41106b] bg-opacity-50">
        <div>
          <Link to="/">
            <img
              className="h-8 md:h-10 lg:h-12 overflow-hidden animate-pulse"
              src={mainLogo}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:block text-xl space-x-4 font-semibold">
          {navItems}
        </div>
        <div>
          {loading ? (
            <span className="custom-button select-none duration-300  mr-2 py-1 md:py-2 border-transparent text-white  leading-8 px-6 md:px-8 inline-flex rounded-xl text-xl md:text-2xl font-semibold">
              <LoaderButton></LoaderButton>
            </span>
          ) : (
            <div>
              {user?.uid ? (
                <div className="flex items-center">
                  <div className="border-[3px] overflow-hidden border-opacity-40 rounded-full border-[#e0d4e8] relative  ">
                    <img
                      className="w-8 md:w-10 lg:w-14 h-8 md:h-10 lg:h-14 rounded-full z-20"
                      src={user?.photoURL ? user.photoURL : 'Image not found'}
                      alt=""
                    />
                    <div className="bg-[#33085b] hover:opacity-0 duration-300 opacity-20 w-full h-full absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="ml-2">
                    <h4 className="text-sm md:text-lg lg:text-xl font-semibold">
                      {user?.displayName ? user?.displayName : 'Name not found'}
                    </h4>
                    <h5 className="text-[#b89cc2] text-xs md:text-md lg:text-lg">
                      Web Developer
                    </h5>
                  </div>
                  <div className="mx-2">
                    <Menu
                      placement="bottom-end"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                      styled={{
                        borderRadius: '400px',
                      }}
                    >
                      <MenuHandler>
                        <Button
                          className="!text-[#e0d4e8] border-0 focus:ring-0 rounded-none p-0"
                          variant="outlined"
                        >
                          <span className="h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 bg-[#e0d4e8] inline-flex bg-opacity-0 items-center justify-center hover:bg-opacity-10 rounded-2xl duration-300">
                            <FaAngleDown className="text-lg md:text-xl lg:text-2xl" />{' '}
                          </span>
                        </Button>
                      </MenuHandler>
                      <MenuList className="!bg-[#481162] border-[3px] border-[#e0d4e8] border-opacity-30 !bg-opacity-30 text-[#e0d4e8] text-sm md:text-md lg:text-lg font-semibold">
                        <MenuItem className="block lg:hidden hover:bg-[#e0d4e8] hover:bg-opacity-10 hover:text-[#e0d4e8]">
                          <Link to="/add_task">Add Task</Link>
                        </MenuItem>
                        <MenuItem className="block lg:hidden hover:bg-[#e0d4e8] hover:bg-opacity-10 hover:text-[#e0d4e8]">
                          <Link to="/my_task">My Task</Link>
                        </MenuItem>
                        <MenuItem className="block lg:hidden hover:bg-[#e0d4e8] hover:bg-opacity-10 hover:text-[#e0d4e8]">
                          <Link to="/finished_task">Finished Task</Link>
                        </MenuItem>
                        <MenuItem className="hover:bg-[#e0d4e8] hover:bg-opacity-10 hover:text-[#e0d4e8]">
                          <Link to="/profile">Your Profile</Link>
                        </MenuItem>
                        <MenuItem
                          onClick={() => setLightMode(!lightMode)}
                          className="hover:bg-[#e0d4e8] hover:bg-opacity-10 hover:text-[#e0d4e8]"
                        >
                          {lightMode ? (
                            <span className="inline-flex items-center">
                              <FaSun className="ml-2" /> Light Mode
                            </span>
                          ) : (
                            <span className="inline-flex items-center">
                              <FaMoon className="ml-2" /> Dark Mode
                            </span>
                          )}
                        </MenuItem>
                        <MenuItem
                          onClick={handleLogout}
                          className="hover:bg-[#e0d4e8] hover:bg-opacity-10 hover:text-[#e0d4e8]"
                        >
                          <button>Logout</button>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="custom-button mr-2 py-1 md:py-2 border-transparent text-white  leading-8 px-4 md:px-8 inline-flex rounded-xl text-xl md:text-2xl font-semibold"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

// {
//   /* <button onClick={() => setOpen(!open)}>
//
// </button> */
// }
