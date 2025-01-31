import React, { useState } from "react";
import MessageList from "./MessageList";
import FriendList from "./FriendList";
import FavoriteList from "./FavoriteList";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [aiList, setAiList] = useState([
    {
      id: uuidv4(),
      name: "アイデアマン",
      avatar: "https://via.placeholder.com/40?text=💡",
      active: true,
      role: "創造的な提案者",
    },
    {
      id: uuidv4(),
      name: "批評家",
      avatar: "https://via.placeholder.com/40?text=🧐",
      active: true,
      role: "鋭い指摘をする",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() !== "") {
      const userMessage = {
        id: uuidv4(),
        name: "あなた",
        message: input,
        isUser: true,
        isFavorited: false,
      };
      setMessages((prev) => [...prev, userMessage]);

      aiList.forEach(async (ai) => {
        if (ai.active) {
          setTimeout(async () => {
            const responseMessage = await generateMockResponse(ai.role, input);
            const aiResponse = {
              id: uuidv4(),
              name: ai.name,
              avatar: ai.avatar,
              message: responseMessage,
              isUser: false,
              isFavorited: false,
            };
            setMessages((prev) => [...prev, aiResponse]);
          }, 1000);
        }
      });

      setInput("");
    }
  };

  const generateMockResponse = async (role, userMessage) => {
    return `${role}として「${userMessage}」について考えてみました！`;
  };

  const toggleFavorite = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, isFavorited: !msg.isFavorited } : msg
      )
    );
  };

  const toggleActive = (aiId) => {
    setAiList((prev) =>
      prev.map((ai) => (ai.id === aiId ? { ...ai, active: !ai.active } : ai))
    );
  };

  const addAI = (newAI) => {
    setAiList((prev) => [...prev, { ...newAI, id: uuidv4(), active: true }]);
  };

  const editAI = (updatedAI) => {
    setAiList((prev) =>
      prev.map((ai) => (ai.id === updatedAI.id ? updatedAI : ai))
    );
  };

  const favorites = messages.filter((msg) => msg.isFavorited);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        bgcolor: "background.default",
      }}
    >
      {/* チャットエリア */}
      <Box sx={{ flex: 2, display: "flex", flexDirection: "column", p: 2 }}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          AIブレインストーミング
        </Typography>
        <MessageList messages={messages} toggleFavorite={toggleFavorite} />
        <Box sx={{ display: "flex", mt: 2 }}>
          <TextField
            fullWidth
            value={input}
            placeholder="アイデアや質問を入力..."
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <IconButton
            color="primary"
            onClick={sendMessage}
            sx={{
              ml: 1,
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
      {/* サイドエリア */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2 }}>
        <FriendList
          aiList={aiList}
          toggleActive={toggleActive}
          addAI={addAI}
          editAI={editAI}
        />
        <FavoriteList favorites={favorites} />
      </Box>
    </Box>
  );
};

export default ChatApp;
