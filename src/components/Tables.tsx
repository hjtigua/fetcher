import React, { useContext } from 'react'
import { ITables } from '../interfaces/ITables'
import { SecureDataContext } from './SecureData'

export default function Tables() {
    const dataContext = useContext(SecureDataContext);
    const tables = dataContext.payload as ITables[];

  return (
    <div> {
        tables.map((table, index) => (
          <div key={table.id}>
            <h2>{table.numero}</h2>
          </div> 
        ))
      }</div>
  )
}
