import { defineComponent, reactive, toRaw } from 'vue'
import { ImagePicker } from 'swift-ui/src/index'
import toast from 'swift-ui/src/plugins/toast'
import DocsHeader from '../../../components/DocHeader/DocsHeader'

const dogaImages = [
  {
    url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
  },
  {
    url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
  },
  {
    url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
  }
]

export default defineComponent({
  name: 'ImagePickerPage',
  components: {
    ImagePicker
  },
  setup() {
    const state = reactive({
      files1: dogaImages,
      files2: dogaImages,
      files3: dogaImages,
      files4: dogaImages.concat([
        {
          url:
            'https://storage.360buyimg.com/mtd/home/36549825_887087111478302_5745542532574478336_n1543234831971.jpg'
        }
      ])
    })

    const onChange = (stateName, files) => {
      console.log('onChange :>> ', files);
      state[stateName] = files
    }

    const onFail = (mes) => {
      toast({
        text: `onFail: ${mes}`
      })
    }

    const onImageClick = (index, file) => {
      toast({
        text: `onImageClick: ${index}${file}`
      })
    }

    return () => {
      console.log('state.files1', toRaw(state.files1))
      return (
        <div class="page">
          {/* <!-- S Header --> */}
          <DocsHeader title="ImagePicker"></DocsHeader>
          {/* <!-- E Header --> */}

          {/* <!-- S Body --> */}
          <div class="doc-body">
            {/* <!-- Basic usage --> */}
            <div class="panel">
              <div class="panel__title">Basic usage</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <ImagePicker files={state.files1} onChange={(file) => onChange('files1', file)} />
                </div>
              </div>
            </div>

            {/* <!-- Select multiple pictures --> */}
            <div class="panel">
              <div class="panel__title">Select multiple pictures</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <ImagePicker
                    multiple
                    files={state.files2}
                    onChange={(file) => onChange('files2', file)}
                    onFail={(e) => onFail(e)}
                    onImageClick={onImageClick}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Customize the number of rows --> */}
            <div class="panel">
              <div class="panel__title">Customize the number of rows</div>
              <div class="panel__content no-padding">
                <div class="example-item">
                  <ImagePicker
                    multiple
                    length={3}
                    files={state.files3}
                    onChange={(file) => onChange('files2', file)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})