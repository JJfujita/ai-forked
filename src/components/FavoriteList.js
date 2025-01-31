import React from "react";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

const FavoriteList = ({ favorites }) => {
  return (
    <>
      <Typography variant="h6" align="center" color="primary">
        お気に入りメッセージ
      </Typography>
      <Box
        sx={{
          maxHeight: "40vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        {favorites.length > 0 ? (
          <List>
            {favorites.map((fav) => (
              <ListItem key={fav.id}>
                <ListItemText primary={`${fav.name}: ${fav.message}`} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="textSecondary" align="center">
            お気に入りはまだありません。
          </Typography>
        )}
      </Box>
    </>
  );
};

export default FavoriteList;
