import { db } from '../../firebase'
import swal from 'sweetalert'
import store from '../../store'
import { reset } from 'redux-form'

export const postTask = async (values) => {
  const uid = localStorage.getItem('uid')
  const {
    title,
    description,
    type,
    location,
    due,
    numberOfTaskers,
    budget
  } = values

  const posted = await db.collection('tasks').add({
    title,
    description,
    type,
    location,
    due,
    numberOfTaskers,
    budget,
    availability: true,
    owner: `/users/${uid}`,
    bidders: [],
    approved: []
  })

  if (posted) {
    store.dispatch(reset('wizard'))
    swal(
      'Success!',
      'You have posted a task...',
      'success'
    )
  }
}