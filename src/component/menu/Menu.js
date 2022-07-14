import React, { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Style from "./menu.module.css";
import { useGlobalContext } from "../../context/Context";

const Menu = () => {
  const { state } = useGlobalContext();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('')
  const submit = () => {
    if (user==='test' && pass==='pass') {
      setIsLogin(true)
    }
    else{
      alert('invalid credentials')
    }
  }

  if (isLogin) {
    return (
      <div className={Style.menuParent}>
      {state.data.map((item, index) => {
        return (
          <ProductCard
            key={index}
            imgUrl={item.image}
            itemName={item.item}
            price={item.price}
            total={item.total}
            cost={item.cost}
            item={item}
          />
        );
      })}
    </div>
    )
  }
  return (
    <div className={Style.menuLogin}>
      <h2>
        Please Login...
      </h2>
      <input type='text' placeholder='username' onChange={(e) => setUser(e.target.value)}/>
      <input type='password' placeholder='pass' onChange={(e) => setPass(e.target.value)}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Menu;
