import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Messages from "./components/Messages";
import randomName from "./components/randomUser/randomName";
import getRandomColor from "./components/randomUser/getRandomColor";
import Scaledrone from "scaledrone-react";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [username] = useState(randomName());
  const [color] = useState(getRandomColor());
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const scaledrone = new Scaledrone(process.env.REACT_APP_CHANNEL_ID);

    scaledrone.on("open", (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Connected to Scaledrone");
        const room = scaledrone.subscribe(process.env.REACT_APP_ROOM);

        room.on("data", (data, member) => {
          handleMessage(data, member.clientId);
        });
      }
    });

    setDrone(scaledrone);

    return () => {
      if (scaledrone) {
        scaledrone.close();
      }
    };
  }, []);

  const handleMessage = (message, clientId) => {
    const newMessage = {
      text: message.text,
      username: message.username,
      color: message.color,
      clientId,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const sendMessage = (text) => {
    if (drone) {
      drone.publish({
        room: process.env.REACT_APP_ROOM,
        message: { username, text, color },
      });
    }
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <Messages messages={messages} />
      <Input sendMessage={sendMessage} />
    </div>
  );
};

export default App;
