import Swal from 'sweetalert2'

export default {

  success (params) {
    return Swal.fire({
      type: 'success',
      title: params.title,
      text: params.text
    })
  },
  error (params) {
    return Swal.fire({
      type: 'error',
      title: params.title,
      text: params.text
    })
  }
}
