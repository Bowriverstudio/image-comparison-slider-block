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

        const labelLeft = attributes.labelLeft || ''
        const labelRight = attributes.labelRight || ''

        const creditsLeft = attributes.creditsLeft || ''
        const creditsRight = attributes.creditsRight || ''
        return (
            <div
                id="juxtapose-wrapper"
                className="juxtapose"
                data-startingposition={attributes.startingPosition}
                data-animate={attributes.animate}>
                <img src={imageLeft} data-label={`${labelLeft}`}  data-credit={`${creditsLeft}`}/>
                <img src={imageRight} data-label={`${labelRight}`}  data-credit={`${creditsRight}`} />
            </div>
        );
    }
}

SaveComponent.propTypes = {
    attributes: PropTypes.object.isRequired
}

export default SaveComponent