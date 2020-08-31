<template>
  <div :class="classNames('at-accordion', className)" :style="customStyle">
    <div
      :class="
        classNames('at-accordion__header', {
          'at-accordion__header--noborder': !hasBorder,
        })
      "
      @click="handleClick"
    >
      <div
        v-if="icon && icon.value"
        :class="iconCls"
        :style="{
          color: (icon && icon.color) || '',
          fontSize: (icon && `${icon.size}px`) || '',
        }"
      />
      <div class="at-accordion__info">
        <div class="at-accordion__info__title">
          {{ title }}
        </div>
        <div class="at-accordion__info__note">
          {{ note }}
        </div>
      </div>
      <div
        :class="
          classNames('at-accordion__arrow', {
            'at-accordion__arrow--folded': !!open,
          })
        "
      >
        <div class="at-icon at-icon-chevron-down" />
      </div>
    </div>
    <div
      :style="contentStyle"
      :class="
        classNames('at-accordion__content', {
          'at-accordion__content--inactive':
            (!open && isCompleted) || startOpen,
        })
      "
    >
      <div class="at-accordion__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AtAccordion from './index'
export default AtAccordion
</script>
