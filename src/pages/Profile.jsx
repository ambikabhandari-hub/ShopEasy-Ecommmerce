import { useState } from "react";


function Profile() {


  const [user, setUser] = useState({

    name: "Ambika Bhandari",
    email: "ambika@gmail.com",
    phone: "9876543210",
    address: "Uttarakhand, India"

  });


  const [edit, setEdit] = useState(false);



  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };



  return (

    <div className="min-h-screen bg-gray-100 py-10">


      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">


        <div className="text-center">

          <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-4xl">
            👤
          </div>


          <h1 className="text-3xl font-bold mt-4">
            My Profile
          </h1>

        </div>



        <div className="mt-8 space-y-4">


          <input
            name="name"
            value={user.name}
            disabled={!edit}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />



          <input
            name="email"
            value={user.email}
            disabled={!edit}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />



          <input
            name="phone"
            value={user.phone}
            disabled={!edit}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />



          <textarea
            name="address"
            value={user.address}
            disabled={!edit}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />


        </div>



        <button
          onClick={() => setEdit(!edit)}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg"
        >

          {edit ? "Save Profile" : "Edit Profile"}

        </button>



      </div>


    </div>

  );
}


export default Profile;