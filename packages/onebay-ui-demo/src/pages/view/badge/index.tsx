import { defineComponent } from "vue";
import { Badge, Button } from '/@/onebay-ui/src/index'

export default defineComponent({
  name: 'BadgePage',
  components: {
    Badge,
    Button
  },
  data() {
    return {
      dot: '...',
    }
  },
  render(): JSX.Element {
    return (
      <div>
        <Badge value="NEW">
          <Button size="small" circle>
            按钮
            </Button>
        </Badge>
      </div>
    )
  }
})