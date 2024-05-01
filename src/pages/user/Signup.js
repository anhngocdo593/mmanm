import React, { useState } from 'react';

const Signup = () => {
  const [groups, setGroups] = useState([
    { id: 1, name: 'Group A', selected: false },
    { id: 2, name: 'Group B', selected: false },
    { id: 3, name: 'Group C', selected: false },
    // Add more groups as needed
  ]);

  const handleGroupSelection = (groupId) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return { ...group, selected: !group.selected };
      }
      return group;
    }));
  };

  return (
    <section className="bg-gray-50 pb-20">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                <input type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5" placeholder="Your first name" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5" placeholder="Your last name" required />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                <input type="tel" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5" placeholder="Your phone number" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5" required />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Select Groups</label>
                {groups.map(group => (
                  <div key={group.id} className="flex items-center">
                    <input
                      id={`group-${group.id}`}
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300"
                      checked={group.selected}
                      onChange={() => handleGroupSelection(group.id)}
                    />
                    <label htmlFor={`group-${group.id}`} className="ml-2 text-sm text-gray-900">{group.name}</label>
                  </div>
                ))}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">I accept the <a href="#" className="font-medium text-gray-600 hover:underline">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
              <p className="text-sm font-light text-gray-500">
                Already have an account? <a href="#" className="font-medium text-gray-600 hover:underline">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
