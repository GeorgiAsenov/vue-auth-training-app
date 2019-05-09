import Swal from 'sweetalert2'

export default {

  success (params) {
    return Swal.fire({
      type: 'success',
      title: 'Success',
      text: 'message is send',
      footer: 'some text here',
      position: 'center',
      ...params
    })
  },
  error (params) {
    return Swal.fire({
      type: 'error',
      title: 'Error',
      text: 'Message isn\'t send',
      footer: '<a href>Why do I have this issue?</a>',
      position: 'center',
      ...params
    })
  },
  quiestion (params) {
    return Swal.fire({
      type: 'question',
      title: 'how and why?',
      text: 'you received a quiestion',
      footer: '<a href>Why do I have this issue?</a>',
      position: 'center',
      ...params
    })
  }
}
