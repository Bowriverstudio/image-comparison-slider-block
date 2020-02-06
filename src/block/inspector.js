import {Component, Fragment} from '@wordpress/element';
import {PanelBody, CheckboxControl, TextControl} from '@wordpress/components';

const {InspectorControls} = wp.blockEditor;
//const {__} = wp.i18n;


/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    render() {
        const {attributes: {animate, startingPosition}, setAttributes} = this.props;

        console.log(JSON.stringify(this.props))

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title={"Layout options"}
                        initialOpen={true}>
                        <TextControl
                            style={{padding: '0 7px'}}
                             min={0}
                             max={100}
                            type={'number'}
                            label="Starting Position"
                            value={startingPosition}
                            onChange={(value) => {setAttributes({startingPosition:value})}}
                        />

                        <CheckboxControl
                            style={{padding: '0 7px'}}
                            label="Animate"
                            checked={ animate }
                            onChange={(value) => {setAttributes({animate:value})}}
                        />

                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    }
}
