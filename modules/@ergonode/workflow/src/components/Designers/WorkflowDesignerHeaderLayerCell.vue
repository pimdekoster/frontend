/*
 * Copyright © Ergonode Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <div
        :class="classes"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave">
        <WorkflowStatusBadge
            :color="status.color"
            :default-status="status.is_default" />
        <span
            class="workflow-designer-header-layer-cell__title"
            v-text="title" />
        <WorkflowDesignerEditStatusLink
            v-if="isAllowedToUpdate"
            data-cy="status-column-edit"
            :status-id="status.id"
            :visible="isHovered" />
    </div>
</template>

<script>
import {
    SIZE,
    THEME,
} from '@Core/defaults/theme';
import WorkflowStatusBadge from '@Workflow/components/Badges/WorkflowStatusBadge';
import WorkflowDesignerEditStatusLink
    from '@Workflow/components/Designers/WorkflowDesignerEditStatusLink';
import PRIVILEGES from '@Workflow/config/privileges';

export default {
    name: 'WorkflowDesignerHeaderLayerCell',
    components: {
        WorkflowStatusBadge,
        WorkflowDesignerEditStatusLink,
    },
    props: {
        status: {
            type: Object,
            required: true,
        },
        hasRightBorder: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isHovered: false,
        };
    },
    computed: {
        isAllowedToUpdate() {
            return this.$hasAccess([
                PRIVILEGES.WORKFLOW.update,
            ]);
        },
        classes() {
            return [
                'workflow-designer-header-layer-cell',
                {
                    'workflow-designer-header-layer-cell--right-border': this.hasRightBorder,
                },
            ];
        },
        title() {
            return this.status.name || `#${this.status.code}`;
        },
        tinySize() {
            return SIZE.TINY;
        },
        secondaryTheme() {
            return THEME.SECONDARY;
        },
    },
    methods: {
        onMouseEnter() {
            this.isHovered = true;
        },
        onMouseLeave() {
            this.isHovered = false;
        },
    },
};
</script>

<style lang="scss" scoped>
    .workflow-designer-header-layer-cell {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 8px 0 4px;
        background-color: $WHITESMOKE;
        color: $GRAPHITE_DARK;
        font: $FONT_MEDIUM_12_16;
        border-left: $BORDER_DASHED_GREY;
        border-top: $BORDER_DASHED_GREY;

        &--right-border {
            border-right: $BORDER_DASHED_GREY;
        }

        &__title {
            flex: 1;
            width: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
</style>
