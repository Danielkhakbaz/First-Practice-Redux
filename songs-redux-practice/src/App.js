import React from "react";
import SongList from "./Components/Main/SongList/SongList";
import SongDetail from "./Components/Main/SongDetail/SongDetails";

const App = () => {
    return (
        <>
            <div className="container-fluid">
                <SongList />
                <SongDetail />
            </div>
        </>
    );
};

export default App;
