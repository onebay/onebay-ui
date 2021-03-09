import { defineComponent } from "vue";
import { Badge, Button } from 'onebay-ui'

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
            Button
            </Button>
        </Badge>
      </div>
    )
  }
})