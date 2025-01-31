// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import ChatApp from "./components/ChatApp";
import { setupMock } from "./api/mockDeepSeek";
import "./styles/ChatApp.css";

// モックAPIをセットアップ
setupMock();

// ルートを作成してレンダリング
const root = createRoot(document.getElementById("root"));
root.render(<ChatApp />);
