let counter = 1

function showToast() {
  const toast = document.querySelector('vui-toast')
  toast.show({
    title: 'Hello, world! lorem ipsum dolor sit amet lorem ipsum dolor sit amet ::' + counter++,
    type: 'success',
  })

  // const { animate, scroll } = Motion
  // const box = document.querySelector('.box')
  // animate(box, { translateZ: -100, rotate: 90 }, { duration: 0.2, type: 'spring', stiffness: 300 }).then(evt => {
  //   animate(
  //     '.box',
  //     {
  //       zoom: 1,
  //       rotateX: 360,
  //       rotateY: 360,
  //       translateZ: 100,
  //     },
  //     {
  //       duration: 0.5,
  //       easing: 'ease-out',
  //     }
  //   )
  // })
}

document.addEventListener('onVeriteReady', async evt => {
  const vui = evt.detail
  await vui.configure({
    i18n: {
      translationsPath: '/assets/locales/{locale}.json',
      translations: {
        hello: 'Hello, world! :: {time}',
      },
    },
  })
  console.log(vui.t('hello', { time: Date.now() }))
  // counter++
})
