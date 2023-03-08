import React,{ useState } from 'react'
import { Footer, Navbar } from '../components';
import { chatProf as Prof } from '../assets';


const chat = () => {

    const [messages,setMessages] = useState([]);
    const [newMessage,setNewMessage] = useState("");

    function handleNewMessage(e){
        setNewMessage(e.target.value);
    }


    function handleSendMessage(e){
        setMessages([...messages,newMessage]);
        setNewMessage("");
    }

    const Search = () => {
        return(
            <div className='flex'>
              <input type="text" className='border w-[489px] bg-[#EFEFEF] px-3 py-2 rounded-l-md font-poppins font-normal text-[18px] leading-[27px]' placeholder='Search Chat' />
              <button className='bg-[#FF3333] p-2 w-[48px] text-white rounded-r-md'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        )
    }

    const ChatList = () => {
        return(
            <li className='border flex flex-1 items-center gap-[30px] '>
              <div className="prof">
                <img src={Prof} alt="Profile" className='w-[70px] h-[70px]' />
              </div>
              <div className="name">
                <p className='font-poppins font-normal text-[18px] leading-[27px]'>Contoh Nama Perusahaan</p>
              </div>
            </li>
        )
    }
  return (
    <div className='w-screen h-screen bg-white overflow-hidden'>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="chat-body ">
            <div className="chat-list ">
                <div className="wrapper">
                    <div className="flex flex-1">
                        <div className="chat ">
                            <div className="wrapper border w-[527px] l">
                                <div className="header p-5 bg-white">
                                    <Search />
                                </div>
                                <div className="list overflow-scroll h-screen">
                                <ul>
                                    <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
                                   <ChatList />
</ul> 
                                </div>
                            </div>
                        </div>
                        <div className="massage w-full h-screen bg-[#FFBFBF]">
                            <div className="profile-header border w-full h-[81px] bg-white">
                                <ChatList />
                            </div>
                            <div className="massage p-5">
                                <div className="border border-black bg-white rounded-lg p-4 mb-12">
                                    {messages.map((message,index) => (
                                        <ul key={index} className="mb-2 flex flex-col gap-[100px] ">
                                            <div className="li mt-5">
                                            <div className="font-bold">User</div>
                                            <div className="in">{message}</div>
                                            </div>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                            <div className="chat-send fixed bottom-0 w-full border p-5 bg-white">
                                <input type="text" value={newMessage} onChange={handleNewMessage} className="flex-1 border border-gray-400 rounded-l-lg p-2 w-[690px]" />
                                <button onClick={handleSendMessage } className="bg-blue-500 text-white rounded-r-lg p-2" >Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default chat