import {MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {Component, Fragment} from '@wordpress/element';
import {Button, IconButton, CheckboxControl} from "@wordpress/components";
import PropTypes from "prop-types"

const ALLOWED_MEDIA_TYPES = ['image'];

class ImageComparisonSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sliderComparison: {
                ...props.item
            },
        };
        this.handleFieldChange = this.handleFieldChange.bind(this)
    }


    handleFieldChange(value, field) {
        const tmpState = {...this.state};
        tmpState.sliderComparison[field] = value;
        this.setState(tmpState);
        this.props.onSave(tmpState.sliderComparison)
    };

    render() {
        const {sliderComparison} = this.state;

        return <Fragment>
            <div>
                <h4 className="header-slider">Slider Image Comparison</h4>
            </div>
            <MediaUploadCheck fallback="You don't have permissions to upload images.">
                <div className="slider-body-container">
                    <MediaUpload
                        title={'Image Left'}
                        onSelect={media => this.handleFieldChange({url: media.url}, "imageLeft")}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={sliderComparison.imageLeft}
                        render={({open}) => (
                            <Button className="editor-post-image-toggle"
                                    onClick={open}>
                                {
                                    sliderComparison.imageLeft &&
                                    <img src={sliderComparison.imageLeft.url}/>
                                }
                                {
                                    !sliderComparison.imageLeft &&
                                    'Image Left'
                                }
                            </Button>
                        )}
                    />
                    <MediaUpload
                        onSelect={media => this.handleFieldChange({url: media.url}, "imageRight")}
                        title={'Image Right'}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={sliderComparison.imageRight}
                        render={({open}) => (
                            <Button className="editor-post-image-toggle"
                                    onClick={open}>
                                {
                                    sliderComparison.imageRight &&
                                    <img src={sliderComparison.imageRight.url}/>
                                }
                                {
                                    !sliderComparison.imageRight &&
                                    'Image Right'
                                }

                            </Button>
                        )}
                    />
                </div>
            </MediaUploadCheck>
        </Fragment>;
    }
}

ImageComparisonSlider.propTypes = {
    item: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
};

export default ImageComparisonSlider;