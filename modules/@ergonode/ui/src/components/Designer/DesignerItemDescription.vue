/*
 * Copyright © Ergonode Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <Tooltip
        class="designer-item-description"
        :title="title"
        max-width="100%">
        <span
            v-if="title"
            class="designer-item-description__title"
            v-text="title" />
        <span
            v-if="subtitle"
            class="designer-item-description__subtitle"
            v-text="subtitle" />
    </Tooltip>
</template>

<script>
export default {
    name: 'DesignerItemDescription',
    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" scoped>
    .designer-item-description {
        display: flex;
        flex: 1;
        flex-direction: column;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        &__title {
            color: $GRAPHITE_DARK;
            font: $FONT_MEDIUM_14_20;
        }

        &__subtitle {
            color: $GRAPHITE;
            font: $FONT_SEMI_BOLD_10_12;
        }
    }
</style>
