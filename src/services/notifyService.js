import Swal from 'sweetalert2'

export default {

  success (params) {
    return Swal.fire({
      type: 'success',
      ...params
    })
  },
  error (params) {
    return Swal.fire({
      type: 'error',
      ...params
    })
  }
}
