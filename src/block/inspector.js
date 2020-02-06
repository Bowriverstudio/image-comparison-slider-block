import {Component, Fragment} from '@wordpress/element';
import {PanelBody, CheckboxControl, TextControl} from '@wordpress/components';

const {InspectorControls} = wp.blockEditor;
//const {__} = wp.i18n;


/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this)
    }

    handleSave(attributes) {

        if (Object.keys(attributes).indexOf('startingPosition') != -1) {
            if (attributes['startingPosition'] >= 100)
                attributes['startingPosition'] = 100
            if (attributes['startingPosition'] < 0)
                attributes['startingPosition'] = 0
        }
        this.props.setAttributes(attributes);
    };

    render() {
        const {attributes: {animate, startingPosition}} = this.props;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title={"Layout options"}
                        initialOpen={true}>
                        <TextControl
                            style={{padding: '0 7px'}}
                            type={'number'}
                            label="Starting Position"
                            value={startingPosition}
                            onChange={(value) => {
                                this.handleSave({startingPosition: value})
                            }}
                        />
                        <CheckboxControl
                            style={{padding: '0 7px'}}
                            label="Animate"
                            checked={animate}
                            onChange={(value) => {
                                this.handleSave({animate: value})
                            }}
                        />


                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    }
}
