import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Catalog from '../../components/Catalog'
import { getCatalogAction } from './store'

export default _ => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatalogAction(9, 0))
  }, [])
  const { data, count } = useSelector(({ catalog }) => catalog)
  return (
    <>
      <Catalog total={count} catalog={data} />
    </>
  )
}
