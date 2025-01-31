import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@mui/material";

const AddEditAIModal = ({
  isOpen,
  onRequestClose,
  addAI,
  editAI,
  editingAI,
}) => {
  const [name, setName] = useState(editingAI ? editingAI.name : "");
  const [role, setRole] = useState(editingAI ? editingAI.role : "");
  const [avatar, setAvatar] = useState(editingAI ? editingAI.avatar : "");
  const [avatarPreview, setAvatarPreview] = useState(
    editingAI ? editingAI.avatar : ""
  );

  const handleSubmit = () => {
    if (name.trim() === "" || role.trim() === "") {
      alert("名前と役割は必須です。");
      return;
    }

    const aiData = {
      id: editingAI ? editingAI.id : null,
      name,
      role,
      avatar: avatarPreview,
    };

    if (editingAI) {
      editAI(aiData);
    } else {
      addAI(aiData);
    }
    onRequestClose();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(file);
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatar(null);
      setAvatarPreview("");
    }
  };

  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          {editingAI ? "AIを編集" : "AIを追加"}
        </Typography>
        <TextField
          label="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="役割"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box sx={{ textAlign: "center", my: 2 }}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="avatar-upload"
            type="file"
            onChange={handleAvatarChange}
          />
          <label htmlFor="avatar-upload">
            <Button variant="contained" component="span" color="primary">
              アバターをアップロード
            </Button>
          </label>
          {avatarPreview && (
            <Avatar
              src={avatarPreview}
              alt="Avatar Preview"
              sx={{
                width: 56,
                height: 56,
                mt: 2,
                mx: "auto",
                borderRadius: "50%",
              }}
            />
          )}
        </Box>
        <Box sx={{ mt: 2, textAlign: "right" }}>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {editingAI ? "更新" : "追加"}
          </Button>
          <Button onClick={onRequestClose} sx={{ ml: 1 }}>
            キャンセル
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddEditAIModal;
