/*
 * Copyright © Ergonode Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */

<template>
    <div
        data-cy="grid"
        :class="classes">
        <GridHeader
            v-if="isHeaderVisible"
            :layout="layout"
            :table-layout-config="tableLayoutConfig"
            :collection-layout-config="collectionLayoutConfig"
            :is-collection-layout="isCollectionLayout"
            @layout-change="onLayoutChange"
            @apply-settings="onApplySettings">
            <template #prepend>
                <slot name="prependHeader" />
            </template>
            <template #actions>
                <slot
                    name="actionsHeader"
                    :selected-rows="selectedRows"
                    :excluded-from-selection-rows="excludedFromSelectionRows"
                    :selected-rows-count="selectedRowsCount"
                    :is-selected-all="isSelectedAll"
                    :on-clear-selected-rows="onClearSelectedRows" />
            </template>
            <template #configuration>
                <slot name="headerConfiguration" />
            </template>
            <template #append>
                <slot name="appendHeader" />
            </template>
        </GridHeader>
        <GridBody
            :disabled="isElementDraggingToAdd && isColumnExist"
            :is-border="isHeaderVisible">
            <slot name="body">
                <AddGridColumnDropZone
                    :is-visible="isDropZoneVisible"
                    @drop="onDropColumn" />
                <KeepAlive>
                    <GridTableLayout
                        v-if="isTableLayout"
                        :scope="scope"
                        :columns="columns"
                        :rows="rows"
                        :row-ids="rowIds"
                        :drafts="drafts"
                        :errors="errors"
                        :disabled-rows="disabledRows"
                        :filters="filters"
                        :sort-order="sortOrder"
                        :pagination="pagination"
                        :row-height="tableLayoutConfig.rowHeight"
                        :extended-components="extendedComponents[gridLayout.TABLE]"
                        :selected-rows="selectedRows"
                        :excluded-from-selection-rows="excludedFromSelectionRows"
                        :multiselect="multiselect"
                        :is-prefetching-data="isPrefetchingData"
                        :is-layout-resolved="isLayoutResolved[layout]"
                        :is-editable="isEditable"
                        :is-select-column="isSelectColumn"
                        :is-basic-filter="isBasicFilter"
                        :is-selected-all="isSelectedAll"
                        :is-action-column="isActionColumn"
                        @sort-column="onSortColumn"
                        @filter="onFilterChange"
                        @cell-value="onCellValueChange"
                        @focus-cell="onFocusCell"
                        @row-action="onRowAction"
                        @remove-column="onRemoveColumn"
                        @swap-columns="onSwapColumns"
                        @rows-select="onRowsSelect"
                        @excluded-rows-select="onExcludedRowsSelect"
                        @select-all="onSelectAllRows"
                        @resolved="onResolvedLayout" />
                    <GridCollectionLayout
                        v-else
                        :scope="scope"
                        :rows="rows"
                        :row-ids="rowIds"
                        :collection-cell-binding="collectionCellBinding"
                        :drafts="drafts"
                        :disabled-rows="disabledRows"
                        :columns-number="collectionLayoutConfig.columnsNumber"
                        :object-fit="collectionLayoutConfig.scaling"
                        :extended-components="extendedComponents[gridLayout.COLLECTION]"
                        :selected-rows="selectedRows"
                        :excluded-from-selection-rows="excludedFromSelectionRows"
                        :multiselect="multiselect"
                        :is-selected-all="isSelectedAll"
                        :is-select-column="isSelectColumn"
                        :is-editable="isEditable"
                        :is-prefetching-data="isPrefetchingData"
                        :is-layout-resolved="isLayoutResolved[layout]"
                        :is-action-column="isActionColumn"
                        @row-action="onRowAction"
                        @cell-value="onCellValueChange"
                        @rows-select="onRowsSelect"
                        @excluded-rows-select="onExcludedRowsSelect"
                        @select-all="onSelectAllRows"
                        @resolved="onResolvedLayout" />
                </KeepAlive>
                <slot
                    v-if="isPlaceholderVisible"
                    name="noDataPlaceholder">
                    <GridNoDataPlaceholder />
                </slot>
                <slot
                    v-if="isFilterPlaceholderVisible"
                    name="noResultsPlaceholder">
                    <GridNoResultsPlaceholder @clear="onRemoveAllFilters" />
                </slot>
            </slot>
        </GridBody>
        <GridFooter v-if="isFooterVisible">
            <slot name="footer">
                <GridPageSelector
                    :value="pagination.itemsPerPage"
                    :data-count="dataCount"
                    @input="onItemsPerPageChange" />
                <GridPagination
                    :value="pagination.page"
                    :max-page="maxPage"
                    @input="onPageChange" />
                <slot
                    name="appendFooter"
                    :selected-rows="selectedRows"
                    :excluded-from-selection-rows="excludedFromSelectionRows"
                    :selected-rows-count="selectedRowsCount"
                    :is-selected-all="isSelectedAll"
                    :on-clear-selected-rows="onClearSelectedRows" />
            </slot>
        </GridFooter>
        <slot />
    </div>
</template>

<script>
import {
    COLUMNS_NUMBER,
    DEFAULT_GRID_PAGINATION,
    DEFAULT_PAGE,
    DRAGGED_ELEMENT,
    GRID_LAYOUT,
    IMAGE_SCALING,
    ROW_HEIGHT,
} from '@Core/defaults/grid';
import {
    getUUID,
} from '@Core/models/stringWrapper';
import {
    mapState,
} from 'vuex';

export default {
    name: 'Grid',
    props: {
        /**
         * Context scope
         */
        scope: {
            type: String,
            default: '',
        },
        /**
         * List of columns presented at Grid
         */
        columns: {
            type: Array,
            default: () => [],
        },
        /**
         * List of rows presented at Grid
         */
        rows: {
            type: Array,
            default: () => [],
        },
        /**
         * The drafts are unsaved changes, cached changed data at given time
         */
        drafts: {
            type: Object,
            default: () => ({}),
        },
        /**
         * The disabled rows are defining which rows are not being able to interact with
         */
        disabledRows: {
            type: Object,
            default: () => ({}),
        },
        /**
         * The filter values
         */
        filters: {
            type: Object,
            default: () => ({}),
        },
        /**
         * The validation errors
         */
        errors: {
            type: Object,
            default: () => ({}),
        },
        /**
         * The model of data at which collection layout cells are going to be binded with data of Grid
         */
        collectionCellBinding: {
            type: Object,
            default: null,
        },
        /**
         * Data model of pagination
         */
        pagination: {
            type: Object,
            default: DEFAULT_GRID_PAGINATION,
        },
        /**
         * Determines default layout of Grid
         */
        defaultLayout: {
            type: String,
            default: GRID_LAYOUT.TABLE,
            validator: value => Object.values(GRID_LAYOUT).indexOf(value) !== -1,
        },
        /**
         * Number of all data
         */
        dataCount: {
            type: Number,
            required: true,
        },
        /**
         * Type of the place from where element is dragging
         */
        draggingElementType: {
            type: String,
            default: DRAGGED_ELEMENT.LIST,
        },
        /**
         * Determines if the component is multiple choice
         */
        multiselect: {
            type: Boolean,
            default: true,
        },
        /**
         * Determines if data is loaded asynchronously
         */
        isPrefetchingData: {
            type: Boolean,
            default: false,
        },
        /**
         * Determines if collection layout might be chosen
         */
        isCollectionLayout: {
            type: Boolean,
            default: false,
        },
        /**
         * Determinate if the component has border
         */
        isBorder: {
            type: Boolean,
            default: false,
        },
        /**
         * Determinate if action column is visible
         */
        isActionColumn: {
            type: Boolean,
            default: true,
        },
        /**
         * Determinate if the component is being able to edit
         */
        isEditable: {
            type: Boolean,
            default: true,
        },
        /**
         * Determines if filters are visible
         */
        isBasicFilter: {
            type: Boolean,
            default: false,
        },
        /**
         * Determines if selecting row column is visible
         */
        isSelectColumn: {
            type: Boolean,
            default: false,
        },
        /**
         * Determines if footer is visible
         */
        isFooterVisible: {
            type: Boolean,
            default: true,
        },
        /**
         * Determines if header is visible
         */
        isHeaderVisible: {
            type: Boolean,
            default: false,
        },
        /**
         * The data model of sorted column
         */
        sortOrder: {
            type: Object,
            default: () => ({}),
        },
        /**
         * The data model of extended Grid components
         */
        extendedComponents: {
            type: Object,
            default: () => ({
                [GRID_LAYOUT.TABLE]: {},
                [GRID_LAYOUT.COLLECTION]: {},
            }),
        },
    },
    data() {
        return {
            layout: this.defaultLayout,
            collectionLayoutConfig: {
                columnsNumber: COLUMNS_NUMBER.FOURTH_COLUMNS.value,
                scaling: IMAGE_SCALING.FIT_TO_SIZE.value,
            },
            tableLayoutConfig: {
                rowHeight: ROW_HEIGHT.SMALL,
            },
            selectedRows: {},
            excludedFromSelectionRows: {},
            isSelectedAll: false,
            isLayoutResolved: {
                [GRID_LAYOUT.TABLE]: false,
                [GRID_LAYOUT.COLLECTION]: false,
            },
        };
    },
    computed: {
        ...mapState('draggable', [
            'isElementDragging',
            'draggedElement',
        ]),
        classes() {
            return [
                'grid',
                {
                    'grid--border': this.isBorder,
                },
            ];
        },
        gridLayout() {
            return GRID_LAYOUT;
        },
        maxPage() {
            return Math.ceil(this.dataCount / this.pagination.itemsPerPage) || 1;
        },
        rowIds() {
            return this.rows.map(({
                id,
            }) => {
                if (id && id.value) {
                    return id.value;
                }

                return getUUID();
            });
        },
        selectedRowsCount() {
            if (this.isSelectedAll) {
                const {
                    length: excludedRows,
                } = Object.keys(this.excludedFromSelectionRows)
                    .filter(key => this.excludedFromSelectionRows[key]);

                return this.dataCount - excludedRows;
            }

            return Object.keys(this.selectedRows).filter(key => this.selectedRows[key]).length;
        },
        isDropZoneVisible() {
            return this.isElementDraggingToAdd && !this.isColumnExist && this.isTableLayout;
        },
        isAnyFilter() {
            return Object.keys(this.filters).length > 0;
        },
        isElementDraggingToAdd() {
            return this.isElementDragging === this.draggingElementType;
        },
        isColumnExist() {
            return this.columns.some(
                column => column.id === this.draggedElement && column.visible,
            );
        },
        isTableLayout() {
            return this.layout === GRID_LAYOUT.TABLE;
        },
        isAnyData() {
            return this.dataCount > 0;
        },
        isPlaceholderVisible() {
            return !this.isAnyData
                && !this.isPrefetchingData
                && !this.isAnyFilter
                && this.isLayoutResolved[this.layout];
        },
        isFilterPlaceholderVisible() {
            return !this.isAnyData
                && !this.isPrefetchingData
                && this.isAnyFilter
                && this.isLayoutResolved[this.layout];
        },
    },
    methods: {
        onResolvedLayout({
            layout,
            isResolved,
        }) {
            this.isLayoutResolved[layout] = isResolved;
        },
        onRemoveAllFilters() {
            this.$emit('remove-all-filters');
        },
        onRowsSelect({
            isSelected,
            rowIds,
        }) {
            let selectedRows = {};

            if (this.multiselect) {
                selectedRows = {
                    ...this.selectedRows,
                };

                rowIds.forEach((rowId) => {
                    selectedRows[rowId] = isSelected;
                });
            } else {
                selectedRows[rowIds[0]] = isSelected;
            }

            this.selectedRows = selectedRows;
        },
        onExcludedRowsSelect({
            isExcluded,
            rowIds,
        }) {
            rowIds.forEach((rowId) => {
                this.excludedFromSelectionRows[rowId] = isExcluded;
            });

            this.excludedFromSelectionRows = {
                ...this.excludedFromSelectionRows,
            };
        },
        onSelectAllRows(isSelectedAll) {
            this.isSelectedAll = isSelectedAll;

            this.selectedRows = {};
            this.excludedFromSelectionRows = {};
        },
        onApplySettings({
            tableConfig,
            collectionConfig,
        }) {
            this.tableLayoutConfig = tableConfig;
            this.collectionLayoutConfig = collectionConfig;
        },
        onLayoutChange(layout) {
            this.layout = layout;
        },
        onCellValueChange(payload) {
            this.$emit('cell-value', payload);
        },
        onFocusCell(payload) {
            this.$emit('focus-cell', payload);
        },
        onRowAction({
            key,
            value,
        }) {
            delete this.selectedRows[value];
            delete this.excludedFromSelectionRows[value];

            this.selectedRows = {
                ...this.selectedRows,
            };
            this.excludedFromSelectionRows = {
                ...this.excludedFromSelectionRows,
            };

            this.$emit(`${key}-row`, value);
        },
        onRemoveColumn(payload) {
            this.$emit('remove-column', payload);
        },
        onSwapColumns(payload) {
            this.$emit('swap-columns', payload);
        },
        onDropColumn(payload) {
            this.$emit('drop-column', payload);
        },
        onSortColumn(sortOrder) {
            this.$emit('sort-column', sortOrder);
        },
        onFilterChange(filters) {
            this.$emit('filter', filters);
        },
        onPageChange(page) {
            this.$emit('pagination', {
                ...this.pagination,
                page,
            });
        },
        onItemsPerPageChange(itemsPerPage) {
            const number = Math.trunc(itemsPerPage);

            if (number !== this.pagination.itemsPerPage) {
                this.$emit('pagination', {
                    ...this.pagination,
                    page: DEFAULT_PAGE,
                    itemsPerPage: number,
                });
            }
        },
        onClearSelectedRows() {
            this.isSelectedAll = false;
            this.selectedRows = {};
            this.excludedFromSelectionRows = {};
        },
    },
};
</script>

<style lang="scss" scoped>
    .grid {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        min-width: 0;
        overflow: hidden;

        &--border {
            border: $BORDER_1_GREY;
        }
    }
</style>
