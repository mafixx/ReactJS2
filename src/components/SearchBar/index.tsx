import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
    const [filterText, setFilterText] = useState("");

    return (
        <form className={styles.form}>
            {/* Componente controlado */}
            <input 
                type="text" 
                placeholder="Search..."
                onChange={e => setFilterText(e.target.value)}
                value={filterText} 
            />
            <label>
                <input type="checkbox" />Only show products in stock
            </label>
        </form>
    )
}