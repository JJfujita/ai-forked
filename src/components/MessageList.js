import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MessageList = ({ messages, toggleFavorite }) => {
  return (
    <List
      sx={{ flexGrow: 1, overflowY: "auto", bgcolor: "background.paper", p: 2 }}
    >
      {messages.map((msg) => (
        <ListItem
          key={msg.id}
          sx={{
            justifyContent: msg.isUser ? "flex-end" : "flex-start",
            display: "flex",
          }}
        >
          {!msg.isUser && (
            <ListItemAvatar>
              <Avatar alt={msg.name} src={msg.avatar} />
            </ListItemAvatar>
          )}
          <Box
            sx={{
              backgroundColor: msg.isUser ? "#DCF8C6" : "#FFFFFF",
              borderRadius: 2,
              padding: 1,
              maxWidth: "70%",
              boxShadow: 1,
            }}
          >
            {!msg.isUser && (
              <Typography variant="subtitle2" color="textSecondary">
                {msg.name}
              </Typography>
            )}
            <Typography variant="body1">{msg.message}</Typography>
          </Box>
          {!msg.isUser && (
            <IconButton onClick={() => toggleFavorite(msg.id)}>
              {msg.isFavorited ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;
