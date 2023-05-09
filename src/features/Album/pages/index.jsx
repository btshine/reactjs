import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'girl 1',
            thumbnailUrl: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-anime-1.jpg'
        },
        {
            id: 2,
            name: 'girl 2',
            thumbnailUrl: 'https://i.pinimg.com/originals/df/4b/93/df4b934aa7a095e6994d4e0e38258fc0.jpg'
        },
        {
            id: 3,
            name: 'girl 3',
            thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/vi/c/c1/Nh%C3%A2n_v%E1%BA%ADt_v%E1%BA%BD_theo_phong_c%C3%A1ch_anime_-_manga_%C4%91%C6%B0%E1%BB%A3c_t%E1%BA%A1o_t%E1%BB%B1_%C4%91%E1%BB%99ng_b%E1%BB%9Fi_AI_%282%29.jpeg'
        },
    ];
    return (
        <div>
            <h3>Album</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;