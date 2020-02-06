import {MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {Component, Fragment} from '@wordpress/element';
import {Button, PanelBody, TextControl} from "@wordpress/components";
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
            <div className="header-slider">
                <h4 >Slider Image Comparison</h4>
            </div>
            <MediaUploadCheck fallback="You don't have permissions to upload images.">
                <div className="slider-row ">
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
                    <div className="slider-container-input">
                        <TextControl
                            style={{padding: '0 7px'}}
                            label="Image Options"
                            placeholder="label"
                            value={sliderComparison.labelLeft}
                            onChange={(value) => {
                                this.handleFieldChange(value, "labelLeft")
                            }}
                        />
                        <TextControl
                            style={{padding: '0 7px'}}
                            placeholder=" Credits"
                            value={sliderComparison.creditsLeft}
                            onChange={(value) => {
                                this.handleFieldChange(value, "creditsLeft")
                            }}
                        />
                    </div>
                </div>
                <div className="separator"/>
                <div className="slider-row">
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
                    <div className="slider-container-input">
                        <TextControl
                            style={{padding: '0 7px'}}
                            label="Image Options"
                            placeholder="label"
                            value={sliderComparison.labelRight}
                            onChange={(value) => {
                                this.handleFieldChange(value, "labelRight")
                            }}
                        />
                        <TextControl
                            style={{padding: '0 7px'}}
                            placeholder="Credits"
                            value={sliderComparison.creditsRight}
                            onChange={(value) => {
                                this.handleFieldChange(value, "creditsRight")
                            }}
                        />
                    </div>
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