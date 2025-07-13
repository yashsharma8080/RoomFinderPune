import React from "react";
import Header from "../components/Header";
import RoomList from "../components/RoomList";

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
            <Header />
            <RoomList />
        </div>
    );
}
