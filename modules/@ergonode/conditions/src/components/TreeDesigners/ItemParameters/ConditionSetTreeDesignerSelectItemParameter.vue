/*
 * Copyright © Ergonode Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <TranslationSelect
        :value="value"
        :required="true"
        :clearable="true"
        :size="smallSize"
        :label="parameter.name"
        :disabled="disabled"
        :options="options"
        :error-messages="errorMessages"
        @input="onValueChange" />
</template>

<script>
import {
    SIZE,
} from '@Core/defaults/theme';

export default {
    name: 'ConditionSetTreeDesignerSelectItemParameter',
    props: {
        parameter: {
            type: Object,
            required: true,
        },
        value: {
            type: Object,
            default: null,
        },
        affectedBy: {
            type: Object,
            default: null,
        },
        errorMessages: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        smallSize() {
            return SIZE.SMALL;
        },
        options() {
            const {
                complexOptions = {},
            } = this.parameter;

            let options = this.parameter.options || {};

            if (this.affectedBy) {
                if (complexOptions[this.affectedBy.id]) {
                    options = complexOptions[this.affectedBy.id];
                }
            }

            return Object.keys(options).map(key => ({
                id: key,
                key,
                value: options[key],
            }));
        },
    },
    methods: {
        onValueChange(value) {
            this.$emit('input', value === '' ? null : value);
        },
    },
};
</script>
