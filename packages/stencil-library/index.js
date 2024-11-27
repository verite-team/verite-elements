function showToast() {
  const toast = document.querySelector('vui-toast')
  toast.show({
    title: 'Hello, world! lorem ipsum dolor sit amet lorem ipsum dolor sit amet ::' + Date.now(),
    type: 'success',
  })
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
})
