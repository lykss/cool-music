import {DEFAULT_PAGE} from 'constant/routes/default'
import {RECOMMEND_PAGE} from 'constant/routes/recommend'

export default [
  {
    path: DEFAULT_PAGE,
    redirect: RECOMMEND_PAGE
  }
]
