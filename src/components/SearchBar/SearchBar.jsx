import css from "./SearchBar.module.css"
import toast from 'react-hot-toast';
import React from 'react';
export default function SearchBar ({onSearch}){

    const handleSubmit = (e) => {
        e.preventDefault();
        const form =e.target;
        const topic = form.elements.topic.value.trim();
        if(topic === "") {
			toast('Here is your toast.');
			return;
		}
        onSearch(topic);
        form.reset();

        
    }
    return(
        <header className={css.header}>
        <form onSubmit={handleSubmit}>
            <input
            className={css.form}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
        </form>
        </header>
    )
}












