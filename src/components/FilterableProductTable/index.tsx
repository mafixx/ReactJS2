import { useState } from "react";
import ProductTable from "../ProductTable";
import SearchBar from "../SearchBar";
import styles from "./FilterableProductTable.module.css";


export default function FilterableProductTable(){
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className={styles.container}>
            <SearchBar 
                filterText={filterText} 
                setFilterText={setFilterText}
                inStockOnly={inStockOnly}
                toggleStock={() => setInStockOnly(!inStockOnly)} 
            />
            <hr />
            <ProductTable 
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    )
}