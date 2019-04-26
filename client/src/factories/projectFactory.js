import shortid from 'shortid'
import newPage from './pageFactory'

export default (title) => {
  return {
    id: shortid.generate(),
    title: title,
    components: [],
    pages: [newPage('Home', '/')]
  }
}
