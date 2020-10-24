import $ from 'jquery'
import axios from 'modules/axios'

const ListenInactiveHeartEvent = (articleId) => {
  $('.inactive-heart').on('click', () => {
    axios.post(`/api/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === 'ok'){
          $('.active-heart').removeClass('hidden')
          $('.inactive-heart').addClass('hidden')
        }
      })
  
      .catch((e) => {
        window.alert('not-rounded')
        console.log(e)
      })
  })

}

const ListenActiveHeartEvent = (articleId) => {
  $('.active-heart').on('click', () => {
    axios.delete(`/api/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === 'ok'){
          $('.active-heart').addClass('hidden')
          $('.inactive-heart').removeClass('hidden')
        }
      })

      .catch((e) => {
        window.alert('not-rounded')
        console.log(e)
      })
  })
}

export {
  ListenInactiveHeartEvent,
  ListenActiveHeartEvent
}