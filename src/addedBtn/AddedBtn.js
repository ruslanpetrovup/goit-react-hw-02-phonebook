import React from 'react';
import style from './AddedBtn.module.css'


const AddedBtn = ({valueName,valueNumber,addNameContact}) => {
    return (
        <div className={style.btnContainer}>
        <h1 className={style.title}>PhoneBook</h1>
            <label className={style.valueName}>Name    
            <input
            className={style.inputName}
            id="valueName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={valueName}            
            />
            </label>
            <label className={style.valueNumber}>Number
            <input
            className={style.inputNumber}
            id="valueNumber"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={valueNumber} 
            />
            </label>
            <button className={style.btnOn} type="button" onClick={addNameContact}>Add Contact</button>
            </div>
    )
}
export default AddedBtn