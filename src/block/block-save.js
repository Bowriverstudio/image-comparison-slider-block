import {Component, Fragment} from '@wordpress/element';
import PropTypes from 'prop-types';

// Local Imports
import defaultImageSrc from './default-image-src'

/**
 * FrontEnd
 */
class SaveComponent extends Component {
    render() {
        const {attributes} = this.props;
        const imageLeft = attributes.imageLeft.url || defaultImageSrc
        const imageRight = attributes.imageRight.url || defaultImageSrc
        return (
            <div
                id = "juxtapose-wrapper"
                className="juxtapose"
                data-startingposition={attributes.startingPosition}
                data-animate={attributes.animate}>
                <img src={imageLeft}/>
                <img src={imageRight}/>
            </div>
        );
    }
}

SaveComponent.propTypes = {
    attributes: PropTypes.object.isRequired
}

export default SaveComponent