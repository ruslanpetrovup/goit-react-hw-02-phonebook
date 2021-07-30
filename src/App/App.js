import React from 'react';
import ReactDOM from 'react-dom'
import { v4 as uuidv4 } from 'uuid';
import AddedBtn from '../addedBtn/AddedBtn'
import Filter from '../filter/Filter'

class Contacts extends React.Component {
    state = {
        contacts: [],
        name: '',
        number: '',
        filter: ''
    };
    valueName = (even) => {
        this.setState({
            name: even.target.value
        })
    }
    valueNumber = (even) => {
        this.setState({
            number: even.target.value
        })

    }
    valueFilter = (even) => {
        this.setState({
            filter: even.target.value
        })
        this.filterContacts();

    }
    addNameContact = () => {
        this.clear()
        if (this.state.contacts.find(num => num.name.toLowerCase() === this.state.name.toLowerCase())) {
            alert('Its name never used');
            return
        }
        this.state.contacts.push({ idCont: uuidv4(), name: this.state.name, number: this.state.number});
        console.log(this.state.contacts);
        this.renderContacts();
    }
    clear = () => {
       const clearName = document.getElementById('valueName');
        const clearNumber = document.getElementById('valueNumber');
        clearName.value = '';
        clearNumber.value = '';
    }
    filterContacts = () => {
        if (this.state.filter.length === 1) {
            this.renderContacts()
            return
        }
       const filterEl = this.state.contacts.filter(num => num.name.toLowerCase().includes(this.state.filter.toLowerCase()))
       ReactDOM.render(filterEl.map(num => <li><span>{num.name}</span>: {num.number} <button type="button" id={num.idCont} onClick={this.deleteContact}>Delete</button></li>), document.getElementById('Contacts'));
    }
    deleteContact = (idDelete) => {
        this.setState({
            contacts: this.state.contacts.filter(num => num.idCont !== idDelete.target.id)
        })
        console.log(this.state.contacts)
        setTimeout(() => {
            this.renderContacts()
        }, 250)
    }
    renderContacts = () => {
        ReactDOM.render(this.state.contacts.map(num => <li><span>{num.name}</span>: {num.number} <button type="button" id={num.idCont} onClick={this.deleteContact}>Delete</button></li>), document.getElementById('Contacts'));
        
    }
    render(){
        return (
            <>
                <AddedBtn valueName={this.valueName} valueNumber={this.valueNumber} addNameContact={this.addNameContact}/>
                <Filter valueFilter={this.valueFilter}/>
            </>
        )
    }
}
export default Contacts