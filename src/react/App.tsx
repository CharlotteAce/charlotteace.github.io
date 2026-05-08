import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App as TopPage } from "./pages/TopPage";
import { Player } from "./components/Player";
import { AlbumPage } from "./pages/AlbumPage";

import "normalize.css";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter basename="/contents/key-tette">
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/:category/:albumName" element={<AlbumPage />} />
      </Routes>

      <div className="footer">
        Powered by{" "}
        <a
          href="https://github.com/CharlotteAce/keytette"
          target="_blank"
          rel="noopener noreferrer"
        >
          key-tette
        </a>
        {" / "}
        <a
          href="https://charlotteace.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          charlotteace
        </a>
      </div>

      <Player />
    </BrowserRouter>
  );
}