import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (song) {
        return (
            <>
                <div className="songdetails">
                    <h1 style={{ marginBottom: "35px" }}>Song Detail</h1>
                    <div>
                        <h4>Song Title : {song.title}</h4>
                        <h4>Song Duration : {song.duration}</h4>
                    </div>
                </div>
            </>
        );
    } else {
        return null;
    }
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong,
    };
};

export default connect(mapStateToProps)(SongDetail);