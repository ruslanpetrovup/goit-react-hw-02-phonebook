import React from 'react';
import style from './Filter.module.css';

const Filter = ({valueFilter}) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Contacts Filter</h2>
        <label className={style.text}>Find Contact by name
                <input className={style.input} type="text" onChange={valueFilter}/>
            </label>
            <ul className={style.contacts} id="Contacts">  
                     
            </ul>
        </div>
    )
}
export default Filter