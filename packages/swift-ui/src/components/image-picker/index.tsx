import classNames from 'classnames'
import { defineComponent, computed, PropType, toRaw } from 'vue'
import chooseImage, { ChooseImageResponse, ChooseImageOptions } from '../../utils/chooseImage'
import { uuid } from '../../utils'

interface MatrixFile extends Partial<File> {
  type?: 'blank' | 'btn'
  uuid?: string
  url?: string
}

// Generate jsx two-dimensional matrix
const generateMatrix = (files: MatrixFile[], col: number, showAddBtn: boolean) => {
  const matrix: Array<MatrixFile>[] = []
  const length = showAddBtn ? files.length + 1 : files.length
  const row = Math.ceil(length / col)
  for (let i = 0; i < row; i++) {
    if (i === row - 1) {
      // The last row of data add the choose button
      const lastArr = files.slice(i * col)
      /* istanbul ignore else */
      if (lastArr.length < col) {
        if (showAddBtn) {
          lastArr.push({ type: 'btn', uuid: uuid() })
        }
        // Fill in the remaining empty columns
        for (let j = lastArr.length; j < col; j++) {
          lastArr.push({ type: 'blank', uuid: uuid() })
        }
      }
      matrix.push(lastArr)
    } else {
      matrix.push(files.slice(i * col, (i + 1) * col))
    }
  }
  return matrix
}

const ImagePicker = defineComponent({
  name: 'ImagePicker',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Object, String],
      default: ''
    },
    files: {
      type: Array as PropType<MatrixFile[]>,
      default: () => []
    },
    showAddBtn: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    length: {
      type: Number,
      default: 4
    },
    onChange: {
      type: Function,
      default: () => {
        /* */
      }
    },
    onImageClick: {
      type: Function,
      default: () => {
        /* */
      }
    },
    onFail: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Function as PropType<(reason: any) => Promise<unknown> | any>,
      default: () => {
        /* */
      }
    },
    count: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const rootCls = computed(() => {
      return classNames('at-image-picker', props.className)
    })
    const matrix = computed(() => {
      const { files, length, showAddBtn } = props
      const rowLength = length <= 0 ? 1 : length
      return generateMatrix(toRaw(files), rowLength, showAddBtn)
    })
    return {
      rootCls,
      matrix
    }
  },
  methods: {
    chooseFile(): void {
      const { multiple, count, onFail, onChange } = this.$props
      const { files } = this.$props
      const filePathName = 'tempFiles'
      // const count = multiple ? 99 : 1
      const params: ChooseImageOptions = {}
      /* istanbul ignore else */
      if (multiple) {
        params.count = 99
      }
      /* istanbul ignore else */
      if (count) {
        params.count = count
      }

      chooseImage(params)
        .then((res: ChooseImageResponse) => {
          const targetFiles = res.tempFilePaths.map((path, i: number) => ({
            url: path,
            file: res[filePathName][i]
          }))
          const newFiles = [...files, ...targetFiles]
          onChange(newFiles, 'add')
        })
        .catch(onFail)
    },

    handleImageClick(idx: number): void {
      this.$props.onImageClick && this.$props.onImageClick(idx, this.files[idx])
    },

    handleRemoveImg(idx: number): void {
      const { files, onChange } = this.$props
      window.URL.revokeObjectURL(files[idx].url as string)
      const newFiles = files.filter((_, i) => i !== idx)
      onChange(newFiles, 'remove', idx)
    }
  },
  render() {
    const { rootCls, matrix, handleRemoveImg, handleImageClick, chooseFile } = this
    const { customStyle, length } = this.$props
    return (
      <div class={rootCls} style={customStyle}>
        {matrix.map((row, i) => (
          <div class="at-image-picker__flex-box" key={`${i + 1}`}>
            {row.map((item, j) =>
              item.url ? (
                <div class="at-image-picker__flex-item" key={`img${i * length + j}`}>
                  <div class="at-image-picker__item">
                    <div
                      class="at-image-picker__remove-btn"
                      onClick={() => handleRemoveImg(i * length + j)}></div>
                    <img
                      class="at-image-picker__preview-img"
                      src={item.url}
                      onClick={() => handleImageClick(i * length + j)}
                    />
                  </div>
                </div>
              ) : (
                <div class="at-image-picker__flex-item" key={`btn${i * length + j}`}>
                  {item.type === 'btn' ? (
                    <div
                      class="at-image-picker__item at-image-picker__choose-btn"
                      onClick={chooseFile}>
                      <div class="add-bar"></div>
                      <div class="add-bar"></div>
                    </div>
                  ) : null}
                </div>
              )
            )}
          </div>
        ))}
      </div>
    )
  }
})

export default ImagePicker
