import styles from "./ProductTable.module.css"
import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

const products = [
    { id: 1, name: "Football", price: 49.99, available: true, category: "Sports Goods" },
    { id: 2, name: "Baseball", price: 9.99, available: true, category: "Sports Goods" },
    { id: 3, name: "Basketball", price: 29.99, available: false, category: "Sports Goods" },
    { id: 4, name: "iPod Touch", price: 99.99, available: true, category: "Eletronics" },
    { id: 5, name: "iPhone 5", price: 399.99, available: false, category: "Eletronics" },
    { id: 6, name: "Nexus 7", price: 199.99, available: true, category: "Eletronics" },
]

type Props ={
    filterText: string;
    inStockOnly: boolean;
}

export default function ProductTable(props: Props) {
    function getRows(): JSX.Element[] {
        const rows: JSX.Element[] = [];
        let lastCategory = "";

        products.forEach(product => {
            // Verificar se o nome do produto é compatível com o filtro
            if (!product.name.toLowerCase().includes(props.filterText.toLowerCase())){
                return;
            }

            // Verificar se é necessário adicionar o cabeçalho da categoria
            if (product.category != lastCategory) {
                rows.push(<ProductCategoryRow key={`cr-${product.id}`} {...product} />);
            }
            // Adicionando a linha do produto
            rows.push(<ProductRow key={product.id} {...product} />)

            lastCategory = product.category;
        });

        return rows;
    }

    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {getRows()}
            </tbody>
        </table>
    );
}