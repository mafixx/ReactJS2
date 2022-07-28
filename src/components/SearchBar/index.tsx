import { useState } from "react";
import styles from "./SearchBar.module.css";

type Props ={
    inStockOnly: boolean;
    filterText: string;
    setFilterText: React.Dispatch<React.SetStateAction<string>>;
    toggleStock: VoidFunction;
};

export default function SearchBar(props: Props) {
    

    return (
        <form className={styles.form}>
            {/* Componente controlado */}
            <input 
                type="text" 
                placeholder="Search..."
                onChange={e => props.setFilterText(e.target.value)}
                value={props.filterText} 
            />
            <label>
                <input type="checkbox" 
                onChange={props.toggleStock} 
                checked={props.inStockOnly} />Only show products in stock
            </label>
        </form>
    )
}