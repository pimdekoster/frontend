/*
 * Copyright © Ergonode Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <Fab
        :theme="secondaryTheme"
        @click.native="onActivate">
        <template #icon>
            <IconListMedium :fill-color="fillColor" />
        </template>
    </Fab>
</template>

<script>
import {
    GRID_LAYOUT,
} from '@Core/defaults/grid';
import {
    THEME,
} from '@Core/defaults/theme';
import {
    GRAPHITE,
    GREEN,
} from '@UI/assets/scss/_js-variables/colors.scss';

export default {
    name: 'GridTableLayoutActivator',
    props: {
        /**
         * Determines if component is selected
         */
        isSelected: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        secondaryTheme() {
            return THEME.SECONDARY;
        },
        fillColor() {
            return this.isSelected ? GREEN : GRAPHITE;
        },
    },
    methods: {
        onActivate() {
            this.$emit('active', GRID_LAYOUT.TABLE);
        },
    },
};
</script>
