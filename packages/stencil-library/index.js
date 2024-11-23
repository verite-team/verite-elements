function showToast() {
  const toast = document.querySelector('vui-toast')
  toast.show({ title: 'Hello, world! ::' + Date.now(), type: 'success' })
}
