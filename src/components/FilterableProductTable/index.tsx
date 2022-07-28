import ProductTable from "../ProductTable";
import SearchBar from "../SearchBar";
import styles from "./FilterableProductTable.module.css";

export default function FilterableProductTable(){
    return (
        <div className={styles.container}>
            <SearchBar />
            <hr />
            <ProductTable />
        </div>
    )
}