import { mount } from '@vue/test-utils'
import Swiper from './index'
import { sleep } from '../../utils/helper'

const factory = (values = {}, slots = { default: [''] }) => {
  return mount(Swiper, {
    slots,
    props: { ...values },
  })
}

const imgs = [
  {
    imgSrc:
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
  },
  {
    imgSrc:
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
  },
  {
    imgSrc:
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
  },
  {
    imgSrc:
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
  }
]

describe('Swiper Snap', () => {
  it('render initial Swiper', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render props -- swiperData', () => {
    const wrapper = mount(
      <Swiper swiperData={imgs} direction="horizontal">
        {
          imgs.map((item, index) => (
            <div key={index} class="ob-swiper-slide">
              <img src={item.imgSrc} style="max-width: 100%" />
            </div>
          ))
        }
      </Swiper>
    )
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Swiper Event', () => {
  it('Swiper touch', async () => {
    const wrapper = mount(
      <Swiper swiperData={[]} direction="horizontal">
        {
          imgs.map((item, index) => (
            <div key={index} class="ob-swiper-slide">
              <img src={item.imgSrc} style="max-width: 100%" />
            </div>
          ))
        }
      </Swiper>
    )
    await sleep(0)
    await wrapper.setProps({ swiperData: imgs })
    await sleep(20)
    wrapper.trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchmove', { changedTouches: [{ pageX: 10, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchend', { changedTouches: [{ pageX: 10, pageY: 60 }] })
  })

  it('Swiper touch with component with lazyLoad', async () => {
    const wrapper = mount(
      <Swiper swiperData={imgs.slice(2)} direction="horizontal" lazyLoad lazyLoadUrl={imgs[0].imgSrc}>
        {
          imgs.slice(2).map((item, index) => (
            <div key={index} class="ob-swiper-slide">
              <img src={item.imgSrc} style="max-width: 100%" />
            </div>
          ))
        }
      </Swiper>
    )
    await sleep(20)
    wrapper.trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchmove', { changedTouches: [{ pageX: 10, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchend', { changedTouches: [{ pageX: 10, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('transitionend')
    await sleep(20)
    wrapper.find('.ob-swiper-wrap').trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchmove', { changedTouches: [{ pageX: 10, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchend', { changedTouches: [{ pageX: 10, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('transitionend')

    wrapper.unmount()
    await sleep(20)
  })

  it('Swiper touch with component loop = true', async () => {
    const wrapper = mount(
      <Swiper swiperData={[imgs[0]]} direction="horizontal" loop>
        {
          imgs.map((item, index) => (
            <div key={index} class="ob-swiper-slide">
              <img src={item.imgSrc} style="max-width: 100%" />
            </div>
          ))
        }
      </Swiper>
    )
    await sleep(0)
    await wrapper.setProps({ swiperData: imgs })
    await sleep(20)
    wrapper.trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchstart', { changedTouches: [{ pageX: 14, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchmove', { changedTouches: [{ pageX: 10, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchend', { changedTouches: [{ pageX: 10, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('transitionend')
    await sleep(20)
  })
  it('Swiper touch prev page', async () => {
    const wrapper = mount(
      <Swiper swiperData={imgs} direction="horizontal" initPage={2}>
        {
          imgs.map((item, index) => (
            <div key={index} class="ob-swiper-slide">
              <img src={item.imgSrc} style="max-width: 100%" />
            </div>
          ))
        }
      </Swiper>
    )
    await sleep(20)
    wrapper.trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchstart', { changedTouches: [{ pageX: 10, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchmove', { changedTouches: [{ pageX: 60, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchend', { changedTouches: [{ pageX: 60, pageY: 60 }] })
    await sleep(20)
  })
  it('Swiper touch vertical diretion', async () => {
    const wrapper = mount(
      <Swiper swiperData={[imgs[0]]} direction="vertical">
        {
          imgs.map((item, index) => (
            <div key={index} class="ob-swiper-slide">
              <img src={item.imgSrc} style="max-width: 100%" />
            </div>
          ))
        }
      </Swiper>
    )
    await sleep(0)
    await wrapper.setProps({ swiperData: imgs })
    await sleep(20)
    wrapper.trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchstart', { changedTouches: [{ pageX: 14, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchmove', { changedTouches: [{ pageX: 10, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchend', { changedTouches: [{ pageX: 10, pageY: 60 }] })
  })
  it('Swiper auto play', async () => {
    const wrapper = mount(
      <Swiper swiperData={[imgs[0]]} autoPlay={3000}>
        {
          imgs.map((item, index) => (
            <div key={index} class="ob-swiper-slide">
              <img src={item.imgSrc} style="max-width: 100%" />
            </div>
          ))
        }
      </Swiper>
    )
    await sleep(0)
    await wrapper.setProps({ swiperData: imgs })
    await sleep(3000)
  })
  it('Swiper touch with component', async () => {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame = void 0
    const wrapper = mount(
      <Swiper swiperData={[imgs[0]]} direction="horizontal" lazyLoad>
        {
          imgs.map((item, index) => (
            <div key={index} class="ob-swiper-slide">
              <img src={item.imgSrc} style="max-width: 100%" />
            </div>
          ))
        }
      </Swiper>
    )
    await sleep(0)
    await wrapper.setProps({ swiperData: imgs })
    await sleep(20)
    wrapper.trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchstart', { changedTouches: [{ pageX: 20, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchmove', { changedTouches: [{ pageX: 10, pageY: 40 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchend', { changedTouches: [{ pageX: 10, pageY: 40 }] })
  })

  it('Swiper touch with lazyLoad image', async () => {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame = void 0
    const wrapper = mount(
      <Swiper swiperData={imgs} direction="horizontal" lazyLoad={true}>
        {
          imgs.map((item, index) => (
            <div key={index} class="ob-swiper-slide">
              <img data-src={item.imgSrc} style="max-width: 100%" class="ob-img-lazyload" />
            </div>
          ))
        }
      </Swiper>
    )
    await sleep(20)
    wrapper.trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 60 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchstart', { changedTouches: [{ pageX: 0, pageY: 0 }] })
    await sleep(20)
    expect(wrapper.element).toMatchSnapshot()

    wrapper.find('.ob-swiper-wrap').trigger('touchstart', { changedTouches: [{ pageX: 100, pageY: 40 }] })
    wrapper.vm.dragging = false
    console.log(1111, wrapper.vm.dragging);
    wrapper.find('.ob-swiper-wrap').trigger('touchmove', { changedTouches: [{ pageX: 0, pageY: 40 }] })
    wrapper.find('.ob-swiper-wrap').trigger('touchend', { changedTouches: [{ pageX: 0, pageY: 40 }] })
  })
})
