/*
 * Copyright © Ergonode Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
/*
* Copyright © Ergonode Sp. z o.o. All rights reserved.
* See LICENSE for license details.
*/
<template>
    <GridTableCell
        :row="rowIndex"
        :column="columnIndex"
        :locked="isLocked"
        :draft="cellData.isDraft"
        :error="Boolean(errorMessages)"
        :disabled="isDisabled"
        :copyable="isCopyable"
        :selected="isSelected"
        @edit="onEditCell">
        <template v-if="cellData.value">
            <GridImagePresentationCell
                v-if="type === 'image'"
                :value="cellData.value" />
            <GridFilePresentationCell v-else />
            <GridSuffixPresentationCell
                v-if="data.suffix"
                :suffix="data.suffix" />
        </template>
    </GridTableCell>
</template>

<script>
import GridFilePresentationCell
    from '@Media/extends/ui/components/Grid/Layout/Table/Cells/Presentation/GridFilePresentationCell';
import GridImagePresentationCell from '@UI/components/Grid/Layout/Table/Cells/Presentation/GridImagePresentationCell';
import GridSuffixPresentationCell from '@UI/components/Grid/Layout/Table/Cells/Presentation/GridSuffixPresentationCell';
import gridDataCellMixin from '@UI/mixins/grid/gridDataCellMixin';

export default {
    name: 'GridImagePreviewDataCell',
    components: {
        GridFilePresentationCell,
        GridImagePresentationCell,
        GridSuffixPresentationCell,
    },
    mixins: [
        gridDataCellMixin,
    ],
    props: {
        type: {
            type: String,
            required: true,
        },
    },
};
</script>
