import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../../Actions";
import PropTypes from "prop-types";

const SongList = ({ songs, selectSong }) => {
    return (
        <>
            <div className="songlists col-lg-6 col-md-6 col-sm-6 col-6">
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

SongList.propTypes = {
    songs: PropTypes.array.isRequired,
    selectSong: PropTypes.func.isRequired,
};
