import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                isMediumMember: PropTypes.bool.isRequired
            }).isRequired,
            description: PropTypes.string.isRequired,
            hasAudioAvailable: PropTypes.bool.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            // Whether an article is behind a paywall
            memberPreview: PropTypes.bool.isRequired,
            minutesToRead: PropTypes.number.isRequired,
            postedDate: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        const { title, description, hasAudioAvailable } = this.props.article;
        // let audioAvailable;
        // if (hasAudioAvailable) {
        //     audioAvailable = (
        //         <div>
        //             Audio Available
        //         </div>
        //     )
        // }

        return (
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {hasAudioAvailable && (
                    <div>
                        Audio Available
                    </div>
                )}
            </div>
        )
    }
}

export default Article;