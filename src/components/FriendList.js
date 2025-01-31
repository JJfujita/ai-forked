import React, { useState } from "react";
import AddEditAIModal from "./AddEditAIModal";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Button,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

const FriendList = ({ aiList, toggleActive, addAI, editAI }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAI, setEditingAI] = useState(null);

  const openAddModal = () => {
    setEditingAI(null);
    setIsModalOpen(true);
  };

  const openEditModal = (ai) => {
    setEditingAI(ai);
    setIsModalOpen(true);
  };

  return (
    <>
      <Typography variant="h6" align="center" color="primary">
        AIリスト
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
        <List>
          {aiList.map((ai) => (
            <ListItem key={ai.id} sx={{ opacity: ai.active ? 1 : 0.5 }}>
              <ListItemAvatar>
                <Avatar
                  src={ai.avatar}
                  alt={ai.name}
                  sx={{ borderRadius: "50%" }}
                />
              </ListItemAvatar>
              <ListItemText primary={ai.name} secondary={`役割: ${ai.role}`} />
              <IconButton onClick={() => toggleActive(ai.id)}>
                {ai.active ? (
                  <ToggleOnIcon color="primary" />
                ) : (
                  <ToggleOffIcon />
                )}
              </IconButton>
              <IconButton onClick={() => openEditModal(ai)}>
                <EditIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={openAddModal}
        fullWidth
        sx={{ mt: 2 }}
      >
        AIを追加
      </Button>
      {isModalOpen && (
        <AddEditAIModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          addAI={addAI}
          editAI={editAI}
          editingAI={editingAI}
        />
      )}
    </>
  );
};

export default FriendList;
