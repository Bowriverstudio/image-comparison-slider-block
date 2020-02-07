/**
 * Internal block libraries
 */
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

import Edit from './block-edit';
import Save from './block-save';

/**
 * Register block
 */
export default registerBlockType(
    'image/slider',
    {
        title: __('Slider Comparison', 'slider-image-comparison'),
        description: __('Image Comparison Slider BLocks .', 'slider-image'),
        category: 'common',
        icon: 'groups',
        keywords: [
            __('Slider', 'image-comparison'),
        ],
        attributes: {
            imageLeft: {
                url: '',
                default: '',
            },
            imageRight: {
                url: '',
                default: '',
            },
            labelLeft: {
                type: 'text',
                default: '',
            },
            labelRight: {
                type: 'text',
                default: '',
            },
            creditsLeft: {
                type: 'text',
                default: '',
            },
            creditsRight: {
                type: 'text',
                default: '',
            },
            startingPosition: {
                type: 'number',
                default: 50,
            },
            animate: {
                type: 'boolean',
                default: true,
            },

        },
        edit: props => {
            const {setAttributes} = props;
            return (
                <Edit {...{setAttributes, ...props}} />
            );
        },
        save: props => {
            return (
                <Save attributes={props.attributes}/>
            );
        },
    },
);
