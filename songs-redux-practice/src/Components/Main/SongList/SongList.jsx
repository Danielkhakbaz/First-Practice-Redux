import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../../Actions";

const SongList = ({ songs, selectSong }) => {
    return (
        <>
            <div className="songlists">
                <h1>SongList</h1>
                {songs.map((song) => (
                    <div className="songlists__div" key={song.id}>
                        {song.title}
                        <button
                            className="btn btn-primary songlists__button"
                            onClick={() => selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps, {
    selectSong,
})(SongList);
