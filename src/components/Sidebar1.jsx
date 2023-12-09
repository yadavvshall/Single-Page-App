
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X, UserCheck } from 'react-feather';
import { RxCross2 } from "react-icons/rx";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowDownWideShort } from "react-icons/fa6";


const Sidebar1 = () => {
  const allCategories = ['Art & Craft', 'Lights', 'Directing', 'Catering', 'Cinematography'];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(allCategories);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedUsers([]);
    } else {
      setSelectedCategory(category);
      setSelectedUsers([]);
      setSelectedCategories((prevCategories) => {
        const newCategories = prevCategories.filter((prevCategory) => prevCategory !== category);
        return [category, ...newCategories];
      });
    }
  };

  const handleUserToggle = (user) => {
    const isSelected = selectedUsers.includes(user);

    if (isSelected) {
      setSelectedUsers((prevUsers) => prevUsers.filter((selectedUser) => selectedUser !== user));
    } else {
      setSelectedUsers((prevUsers) => [...prevUsers, user]);
    }
  };

  return (
    <div className="bg-gray-200 h-full w-64 p-4 flex flex-col items-center">
      <div className="flex items-center space-x-2 mb-4">
        {selectedCategory && (
          <div className="flex items-center space-x-2">
            <X className="cursor-pointer" onClick={() => handleCategorySelect(null)} />
            <p className="font-semibold">Category {selectedCategory}</p>
          </div>
        )}
      </div>
      {selectedCategories.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold mb-2"><button style={{ display: "flex", alignItems: "center", backgroundColor: "#ecb232", padding: "0.5rem 1rem", border: "none", borderRadius: ".3125rem" }}>
  Category <FaArrowDownWideShort style={{ marginLeft: "0.5rem" }} />
</button>

          </p>
          <div className="flex items-center space-x-2">
            {selectedCategories.map((selected) => (
              <div key={selected} className="flex items-center space-x-1 bg-green-200 p-1 rounded">
                <RxCross2
                  className="cursor-pointer"
                  onClick={() => setSelectedCategories((prev) => prev.filter((prevCategory) => prevCategory !== selected))}
                />
                <p>{selected}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <ul>
  {selectedCategories.map((category) => (
    <li key={category} className="mb-2">
      <div
        className={`flex items-center justify-between cursor-pointer ${
          selectedCategory === category ? 'bg-blue-200' : ''
        }`}
        onClick={() => handleCategorySelect(category)}
      >
        <div className="flex items-center space-x-2">
          {selectedCategory === category ? (
            <RxCross2 onClick={() => handleCategorySelect(null)} />
          ) : (
            <CiCirclePlus />
          )}
          <p>{category}</p>
        </div>
        {selectedCategory === category ? <ChevronUp /> : <ChevronDown />}
      </div>
      {selectedCategory === category && (
        <ul className="ml-4">
          <li className="flex items-center space-x-2 cursor-pointer">
            <UserCheck
              onClick={() => handleUserToggle('User1')}
              className={selectedUsers.includes('User1') ? 'text-green-500' : ''}
            />
            <p>User 1</p>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <UserCheck
              onClick={() => handleUserToggle('User2')}
              className={selectedUsers.includes('User2') ? 'text-green-500' : ''}
            />
            <p>User 2</p>
          </li>
          
        </ul>
      )}
    </li>
  ))}
</ul>
    </div>
  );
};

export default Sidebar1;
