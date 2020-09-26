<template>
  <view class="page">
    <DocsHeader title="List 列表" />

    <view class="doc-body">
      <!-- 基本用法 -->
      <view class="panel">
        <view class="panel__title">基本用法</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <List>
              <ListItem title="标题文字" :onClick="handleClick" />
              <ListItem title="标题文字" arrow="right" />
              <ListItem title="标题文字" extraText="详细信息" />
              <ListItem title="禁用状态" disabled extraText="详细信息" />
            </List>
          </view>
        </view>
      </view>

      <!-- 包含描述信息 -->
      <view class="panel">
        <view class="panel__title">包含描述信息</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <List>
              <ListItem title="标题文字" note="描述信息" />
              <ListItem title="标题文字" note="描述信息" arrow="right" />
              <ListItem
                arrow="right"
                note="描述信息"
                title="我是一个很长很长很长的标题文字"
                extraText="详细信息详细信息详细信息详细信息"
              />
            </List>
          </view>
        </view>
      </view>

      <!-- 包含图片 -->
      <view class="panel">
        <view class="panel__title">包含图片</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <List>
              <ListItem
                title="标题文字"
                arrow="right"
                thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
              />
              <ListItem
                title="标题文字"
                note="描述信息"
                arrow="right"
                thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
              />
              <ListItem
                title="标题文字"
                note="描述信息"
                extraText="详细信息"
                arrow="right"
                thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
              />
            </List>
          </view>
        </view>
      </view>

      <!-- 图标 -->
      <view class="panel">
        <view class="panel__title">支持图标(不能与thumb同时存在)</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <List>
              <ListItem
                title="标题文字"
                note="描述信息"
                arrow="right"
                :iconInfo="{
                  size: 25,
                  color: '#78A4FA',
                  value: 'calendar',
                }"
              />
              <ListItem
                title="标题文字"
                note="描述信息"
                extraText="详细信息"
                arrow="right"
                :iconInfo="{
                  size: 25,
                  color: '#FF4949',
                  value: 'bookmark',
                }"
              />
            </List>
          </view>
        </view>
      </view>

      <!-- 无边框 -->
      <view class="panel">
        <view class="panel__title">无边框</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <List :hasBorder="false">
              <ListItem isSwitch title="标题文字" :hasBorder="false" :onSwitchChange="handleChange" />
              <ListItem isSwitch title="标题文字" :hasBorder="false" :onSwitchChange="handleChange" />
            </List>
          </view>
        </view>
      </view>

      <!-- Switch 按钮列表 -->
      <view class="panel">
        <view class="panel__title">Switch 按钮列表</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <List>
              <ListItem
                title="标题文字"
                isSwitch
                :onClick="handleClick"
                :onSwitchChange="handleChange"
              />
              <ListItem
                isSwitch
                disabled
                switchIsCheck
                title="禁用状态"
                :onSwitchChange="handleChange"
              />
              <ListItem isSwitch switchIsCheck title="标题文字" :onSwitchChange="handleChange" />
            </List>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent } from 'vue'
import { List, ListItem } from '/@/swift-ui/src/index.ts'
export default defineComponent({
  name: 'ListPage',
  components: {
    List,
    ListItem
  },
  methods: {
    handleChange(e) {
      alert({
        title: `Change Switch: ${e}`,
        icon: 'none'
      })
    },

    handleClick(e) {
      alert({
        title: `Click Item: ${e}`,
        icon: 'none'
      })
    }
  }
})
</script>
