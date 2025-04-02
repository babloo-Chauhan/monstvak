import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Home, Package, MapPin, Settings, LogOut, User } from "lucide-react";
import { Link } from 'react-router-dom';
import { logoutuser } from '../context/UserContext';
import { useEffect } from 'react';


const Account = () => {
    const navigate=useNavigate();

    const [activeTab, setActiveTab] = useState("Profile");

    const menuItems = [
        { name: "Profile", icon: <User size={20} /> },
        { name: "Orders", icon: <Package size={20} /> },
        { name: "Address", icon: <MapPin size={20} /> },
        { name: "Settings", icon: <Settings size={20} /> },
    ];

    const handleLogout = () => {

            console.log("logout")
            localStorage.removeItem("token");
            navigate("/login"); // Redirect user to login page
    
    // Remove token from local storage
         // Optional: Reload to reflect changes
    };


    

  return (
    <div>
          <div className="flex min-h-screen bg-gray-100">
              {/* Sidebar */}
              <aside className="w-64 bg-white p-4 shadow-md">
                  <h2 className="text-xl font-bold mb-4">User Dashboard</h2>
                  <nav className="space-y-2">
                      {menuItems.map((item) => (
                          <button
                              key={item.name}
                              className={`flex items-center gap-3 p-2 w-full rounded-lg transition hover:bg-gray-200 ${activeTab === item.name ? "bg-gray-300" : ""
                                  }`}
                              onClick={() => setActiveTab(item.name)}
                          >
                              {item.icon}
                              {item.name}
                          </button>
                      ))}
                      
                      <button onClick={handleLogout} className="flex items-center gap-3 p-2 w-full text-red-500 rounded-lg transition hover:bg-gray-200">
                          <LogOut size={20} /> Logout
                      </button>
                   
                  </nav>
              </aside>

              {/* Main Content */}
              <main className="flex-1 p-6">
                  <h1 className="text-2xl font-bold">{activeTab}</h1>
                  <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
                      <p>Content for {activeTab} section will be displayed here.</p>
                  </div>
              </main>
          </div>
    </div>
  )
}

export default Account
