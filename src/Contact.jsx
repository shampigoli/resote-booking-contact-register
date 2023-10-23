import { useState } from "react";
import './app.css';

function Contact() {
  const [register, setRegister] = useState([]);
  const hc = (e) => {
    e.preventDefault();
    const contact = {
      name,
      num,
      email,
    };
    setRegister([...register, contact]);
    console.log(contact);
  };
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dlete= (item)=>{
    setRegister(register.filter((i)=>{
        return i !== item
    }))


  }
  return (
    <>
    <div className="flex gap-12">
      <div className="card w-96 bg-yellow-700 p-4 flex flex-col rounded-[20px] h-[300px]">
        <input
          type="text"
          placeholder="Name"
          className="p-3 m-2 rounded-[12px] border-none outline-none"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type=""
          max={9}
          min={0}
          placeholder="phone number"
          className="p-3 m-2 rounded-[12px] overflow-hidden h-10 border-none outline-none"
          onChange={(e) => setNum(e.target.value)}
          required
        />
        <input
          className="p-3 m-2 rounded-[12px] border-none outline-none"
          onChange={(e) => setEmail(e.target.value)}
          type="email" id="email" placeholder="email@gmail.com"  required min="18" max="25" name="email"
        />
        <button
          type="submit"
          className="p-3 m-2 bg-black text-white rounded-[10px]"
          onClick={hc}
        >
          Register
        </button>
      </div>
      <div className="card w-96 bg-yellow-700 p-4 flex flex-col rounded-[20px]  text-white gap-2 h-[300px] overflow-y-auto custom-scrollbar">
      {register.map((item) => {
        return (
          <>
          <div className="border-[1px] border-white p-3 rounded-[12px]">

          <div className=" flex justify-center items-cente">
          <h2 className="text-black text-[22px]">Name:</h2>
          <h2 className="text-white text-[22px]">{item.name}</h2>
          </div>
          <div className=" flex justify-center items-center">
          <h2 className="text-black text-[22px]">Phone Number:</h2>
          <h2 className="text-white text-[22px]">{item.num}</h2>
          </div>
          <div className=" flex justify-center items-center">
          <h2 className="text-black text-[22px]">Email:</h2>
          <h2 className="text-white text-[22px]">{item.email}</h2>
          </div>
          
          
          <button onClick={()=>{
            dlete(item)
          }}           className="p-3 m-2 bg-black text-white rounded-[10px] w-[95%]">Delete</button>
          </div>  
          </>
        )
      })}
      </div>
      </div>
    </>
  );
}

export default Contact;
