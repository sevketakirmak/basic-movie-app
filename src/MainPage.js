import React from "react";
import { connect } from 'react-redux';
import { fetchList } from './actions';
import "./App.css";

const arry = [0, 1, 2, 4]

class MainPage extends React.Component {

    componentDidMount() {
        this.props.fetchList();
    }
    render() {
        const renderMovie = this.props.list.map((item) => {
            var poster = "https://image.tmdb.org/t/p/original" + item.poster_path;
            return (
                <div key={item.id} className="col-lg-6">
                    <div className="detail">
                        <div className="movie">
                            <img src={poster} />
                        </div>
                        <div className="text">
                            <h4>{item.original_title}</h4>
                            <p>
                                {item.overview}
                            </p>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="container pt-5">
                <div className="row">
                    {this.props.list != undefined ? renderMovie: ''}
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return { list: state.list }
}

export default connect(mapState, { fetchList })(MainPage);
