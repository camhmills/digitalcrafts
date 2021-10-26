import { useState } from 'react';


const Signup = (props) => {
    const [userInfo, setuserInfo] = useState({});
    const {userList, setuserList} = props
    console.log(userInfo);


    return (
    <div>      
        <form  className = "signup" action="">
        <input id = "firstname"
          type="text"
          onChange={(e) =>
            setuserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
          name="firstName"
          placeholder="First Name"
        />
        <input id = "lastname"
          type="text"
          onChange={(e) =>
            setuserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
          name="lastName"
          placeholder="Last Name"
        />
        <input id = "email"
          type="text"
          onChange={(e) =>
            setuserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
          name="email"
          placeholder="Email"
        />
        <input id = "street"
          type="text"
          onChange={(e) =>
            setuserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
          name="Street"
          placeholder="Street"
        />
        <input id = "city"
          type="text"
          onChange={(e) =>
            setuserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
          name="City"
          placeholder="City"
        />
        <input id = "state"
          type="text"
          onChange={(e) =>
            setuserInfo({ ...userInfo, [e.target.name]: e.target.value })
          }
          name="State"
          placeholder="State"
        />
        <input onClick = {() => {setuserList([...userList, userInfo])}} type="button" value="Submit" />
      </form>
        </div>
    )
}

export default Signup;