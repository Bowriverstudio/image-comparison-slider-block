/**
 * Internal block libraries
 */
import {Component, Fragment} from '@wordpress/element';

import Form from "./slider-image-form";
import Preview from "./preview";
import Inspector from "./inspector";

/**
 *
 */

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this)
    }

    handleSave(attributes) {
        this.props.setAttributes(attributes);
    };


    render() {
        const {attributes, isSelected, setAttributes} = this.props;

        return (<Fragment>

                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}/>
                {
                    !!isSelected &&
                    <Form
                        item={attributes}
                        onSave={this.handleSave}
                    />
                }
                {
                    !isSelected &&
                    <Preview
                        attributes={attributes}
                    />

                }

            </Fragment>
        );
    }
}
