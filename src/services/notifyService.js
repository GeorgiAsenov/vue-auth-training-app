import Swal from 'sweetalert2'

const fireNotification = defaults => params => {
  if (typeof params === 'string') {
    params = { text: params }
  }
  return Swal.fire({
    ...defaults,
    ...params
  })
}

export default {
  success: fireNotification({
    type: 'success',
    title: 'Success',
    text: 'message is send',
    footer: 'some text here',
    position: 'center'

  }),
  error: fireNotification({
    type: 'error',
    title: 'Error',
    text: 'Message isn\'t send',
    footer: '<a href>Why do I have this issue?</a>',
    position: 'center'
  }),
  question: fireNotification({
    type: 'question',
    title: 'how and why?',
    text: 'you received a quiestion',
    footer: '<a href>Why do I have this issue?</a>',
    position: 'center'
  })

  // success (params) {
  //   return Swal.fire({
  //     type: 'success',
  //     title: 'Success',
  //     text: 'message is send',
  //     footer: 'some text here',
  //     position: 'center',
  //     ...params
  //   })
  // },
  // error (params) {
  //   return Swal.fire({
  //     type: 'error',
  //     title: 'Error',
  //     text: 'Message isn\'t send',
  //     footer: '<a href>Why do I have this issue?</a>',
  //     position: 'center',
  //     ...params
  //   })
  // },
  // quiestion (params) {
  //   return Swal.fire({
  //     type: 'question',
  //     title: 'how and why?',
  //     text: 'you received a quiestion',
  //     footer: '<a href>Why do I have this issue?</a>',
  //     position: 'center',
  //     ...params
  //   })
  // }
}
