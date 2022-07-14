import React from 'react';
import { useGlobalContext } from '../../context/Context';
import Style from  './header.module.css';
import {Link} from 'react-router-dom'

const Header = () => {
  const { state } = useGlobalContext();
  const numofitem = state.data.filter((item) => {
      return item.total!==0;
  })
console.log(numofitem);
  return (
    <div className={Style.header}>
        <div className={Style.headerleft}>
       <h3> Food's Restuarant</h3>

        </div>
        <div className={Style.headerright}>

         {
          numofitem.length>0 ? 
          
          <Link to='/checkout'><a href='/checkout' >Cart:<span>{numofitem.length}</span></a> </Link>
          : ''
         }
        </div>
    </div>
  )
}

export default Header