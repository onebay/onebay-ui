<template>
  <div :class="rootClass" @tap="handleClick">
    <div class="at-list__item-container">
      <div v-if="thumb" class="at-list__item-thumb item-thumb">
        <img class="item-thumb__info" mode="scaleToFill" :src="thumb" />
      </div>
      <div v-if="iconInfo.value" class="at-list__item-icon item-icon">
        <div :class="iconClass" :style="getIconStyle()"></div>
      </div>
      <div class="at-list__item-content item-content">
        <div class="item-content__info">
          <div class="item-content__info-title">{{ String(title) }}</div>
          <div v-if="note" class="item-content__info-note">{{ note }}</div>
        </div>
      </div>
      <div class="at-list__item-extra item-extra">
        <div v-if="extraText" class="item-extra__info">{{ String(extraText) }}</div>
        <div v-if="extraThumb && !String(extraText)" class="item-extra__image">
          <img class="item-extra__image-info" mode="aspectFit" :src="extraThumb" />
        </div>
        <div v-if="arrow" class="item-extra__icon">
          <div :class="`at-icon item-extra__icon-arrow at-icon-chevron-${arrow}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import classNames from 'classnames'
import { computed, defineComponent } from 'vue'
import { mergeStyle } from '../../../utils'
export interface IconInfo {
  prefixClass?: string
  value?: string
  className?: string | string[]
}
export interface ListItemProps {
  note?: string
  thumb?: string
  disabled?: boolean
  hasBorder?: boolean
  className?: string | string[]
  iconInfo?: IconInfo
  arrow?: string
  extraText?: string
  extraThumb?: string
  title?: string
}
export default defineComponent({
  name: 'ListItem',
  props: {
    className: {
      type: [Array, String],
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    thumb: {
      type: String,
      default: ''
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    extraText: {
      type: String,
      default: ''
    },
    extraThumb: {
      type: String,
      default: ''
    },
    iconInfo: {
      type: Object,
      default: function (): IconInfo {
        return { value: '' }
      }
    },
    arrow: {
      type: String,
      default: '',
      validator: (val: string): boolean => ['up', 'down', 'right', ''].includes(val)
    }
  },
  emits: ['click'],
  setup(props) {
    const rootClass = computed(() => {
      const { note, thumb, disabled, hasBorder, className } = props as ListItemProps
      return classNames(
        'at-list__item',
        {
          'at-list__item--thumb': thumb,
          'at-list__item--multiple': note,
          'at-list__item--disabled': disabled,
          'at-list__item--no-border': !hasBorder
        },
        className
      )
    })
    const iconClass = computed(() => {
      const { iconInfo } = props as ListItemProps
      return classNames(
        iconInfo.prefixClass || 'at-icon',
        {
          [`${iconInfo.prefixClass || 'at-icon'}-${iconInfo.value}`]: iconInfo.value
        },
        iconInfo.className
      )
    })
    return {
      rootClass,
      iconClass
    }
  },
  methods: {
    handleClick(event: Event): void {
      this.$emit('click', event)
    },
    getIconStyle(): unknown {
      const { iconInfo } = this
      return mergeStyle(
        {
          color: iconInfo.color || '',
          fontSize: `${iconInfo.size || 24}px`
        },
        iconInfo.customStyle
      )
    }
  }
})
</script>
