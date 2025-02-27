/*
 * Copyright © Ergonode Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <div :class="classes">
        <slot name="prepend" />
        <GridHeaderSettings>
            <template #actions>
                <slot name="actions" />
            </template>
            <template #configuration>
                <template v-if="isCollectionLayout">
                    <GridTableLayoutActivator
                        data-cy="grid-table-view"
                        :is-selected="isSelectedTableLayout"
                        @active="onLayoutActivate" />
                    <GridCollectionLayoutActivator
                        data-cy="grid-collection-view"
                        :is-selected="isSelectedCollectionLayout"
                        @active="onLayoutActivate" />
                </template>
                <Fab
                    :theme="theme.SECONDARY"
                    @click.native="onShowModal">
                    <template #icon="{ color }">
                        <IconSettings :fill-color="color" />
                    </template>
                </Fab>
                <slot name="configuration" />
            </template>
        </GridHeaderSettings>
        <GridSettingsModalForm
            v-if="isSettingsModal"
            :table-layout-config="tableLayoutConfig"
            :collection-layout-config="collectionLayoutConfig"
            :is-collection-layout="isCollectionLayout"
            @close="onCloseModal"
            @apply="onApplySettings" />
        <slot name="append" />
    </div>
</template>

<script>
import {
    GRID_LAYOUT,
} from '@Core/defaults/grid';
import {
    THEME,
} from '@Core/defaults/theme';

export default {
    name: 'GridHeader',
    props: {
        /**
         * Configuration of table layout
         */
        tableLayoutConfig: {
            type: Object,
            required: true,
        },
        /**
         * Configuration of collection layout
         */
        collectionLayoutConfig: {
            type: Object,
            required: true,
        },
        /**
         * Current selected grid layout
         */
        layout: {
            type: String,
            default: GRID_LAYOUT.TABLE,
        },
        /**
         * Determines if collection layout might be chosen
         */
        isCollectionLayout: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isSettingsModal: false,
        };
    },
    computed: {
        classes() {
            return [
                'grid-header',
            ];
        },
        theme() {
            return THEME;
        },
        isSelectedTableLayout() {
            return this.layout === GRID_LAYOUT.TABLE;
        },
        isSelectedCollectionLayout() {
            return this.layout === GRID_LAYOUT.COLLECTION;
        },
    },
    methods: {
        onLayoutActivate(layout) {
            this.$emit('layout-change', layout);
        },
        onShowModal() {
            this.isSettingsModal = true;
        },
        onCloseModal() {
            this.isSettingsModal = false;
        },
        onApplySettings(payload) {
            this.isSettingsModal = false;

            this.$emit('apply-settings', payload);
        },
    },
};
</script>

<style lang="scss" scoped>
    .grid-header {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-bottom: 16px;
        box-sizing: border-box;
        background-color: $WHITE;
    }
</style>
