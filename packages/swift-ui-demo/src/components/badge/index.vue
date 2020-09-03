<template>
  <div class="page">
    <!-- S Header -->
    <div title="Badge 徽标">Badge 徽标</div>
    <!-- E Header -->

    <!-- S Body -->
    <div class="doc-body">
      <!-- 数字 -->
      <div class="panel">
        <div class="panel__title">数字</div>
        <div class="panel__content">
          <div class="badge-item">
            <div class="subitem">
              <Badge value="10" :maxValue="99">
                <button size="small" circle>
                  按钮
                </button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge value="100" :maxValue="99">
                <button size="small">按钮</button>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- 小红点 -->
      <div class="panel">
        <div class="panel__title">小红点</div>
        <div class="panel__content">
          <div class="badge-item">
            <div class="subitem">
              <Badge dot>
                <button size="small" circle>
                  按钮
                </button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge dot>
                <button size="small">按钮</button>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- 文本 -->
      <div class="panel">
        <div class="panel__title">文本</div>
        <div class="panel__content">
          <div class="badge-item">
            <div class="subitem">
              <Badge value="NEW">
                <button size="small" circle>
                  按钮
                </button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge value="NEW">
                <button size="small">按钮</button>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- 省略号 -->
      <div class="panel">
        <div class="panel__title">省略号</div>
        <div class="panel__content">
          <div class="badge-item">
            <div class="subitem">
              <Badge :value="dot">
                <button size="small" circle>
                  按钮
                </button>
              </Badge>
            </div>
            <div class="subitem">
              <Badge :value="dot">
                <button size="small">按钮</button>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Badge } from '/@/swift-ui/src/index.ts'
import './index.scss'
export default defineComponent({
  name: 'BadgePage',
  components: {
    Badge
  },
  data() {
    return {
      dot: '...',
    }
  },
})
</script>
