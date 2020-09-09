import React from "react";
import SongList from "./Components/Main/SongList/SongList";
import SongDetail from "./Components/Main/SongDetail/SongDetails";

const App = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <SongList />
                    <SongDetail />
                </div>
            </div>
        </>
    );
};

export default App;
