import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SongDetail = ({ song }) => {
    if (song) {
        return (
            <>
                <div className="songdetails col-lg-6 col-md-6 col-sm-6 col-6">
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

SongDetail.propTypes = {
    song: PropTypes.object,
};
