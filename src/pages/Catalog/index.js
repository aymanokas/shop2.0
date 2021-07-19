import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Catalog from '../../components/Catalog'
import { getCatalogAction } from './store'

export default _ => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatalogAction())
  }, [])
  const { data } = useSelector(({ catalog }) => catalog)
  console.warn(data)
  return (
    <>
      <Catalog catalog={data} />
    </>
  )
}
