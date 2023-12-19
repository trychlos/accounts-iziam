/*
 * pwix:core-ui/src/common/definitions/field-type.def.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

export const FieldType = {

    C: {
        INFO: {
            class: 'fti-info',
            icon: 'fa-info',
            title: 'field_type.info_title'
        },
        SAVE: {
            class: 'fti-save',
            icon: 'fa-square-pen',
            title: 'field_type.save_title'
        },
        WORK: {
            class: 'fti-work',
            icon: 'fa-person-digging',
            title: 'field_type.work_title'
        }
    },

    // check that the type is known
    _byType( type ){
        if( !Object.keys( FieldType.C ).includes( type )){
            console.warn( 'FieldType: unknown type', type );
            return null;
        }
        return FieldType.C[type];
    },

    /**
     * @returns {String} the classes associated with this type
     */
    classes( type ){
        const o = FieldType._byType( type );
        return o ? o.class : null;
    },

    /**
     * @returns {String} the name of the icon associated with this type
     */
    icon( type ){
        const o = FieldType._byType( type );
        return o ? o.icon : '';
    },

    /**
     * @returns {String} the title associated with this type
     */
    title( type ){
        const o = FieldType._byType( type );
        return o && o.title ? pwixI18n.label( I18N, o.title ) : '';
    }
};