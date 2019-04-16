import Swal from 'sweetalert2'

export default {

  success (title, text) {
    return Swal.fire({
      type: 'success',
      title: title,
      text: text,
      position: 'top-end',
      showConfirmButton: false
    })
  },
  error (title, text) {
    return Swal.fire({
      type: 'error',
      title: title,
      text: text,
      showConfirmButton: false
    })
  }
}
