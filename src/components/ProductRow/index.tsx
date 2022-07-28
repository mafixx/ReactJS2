import styles from "./ProductRow.module.css";
type Props ={
    name: string;
    price: number;
    available: boolean;
}



export default function ProductRow(props: Props){
    const style = !props.available ? styles.red : "";

    return (
        <tr className={style}>
            <td>{props.name}</td>
            <td>${props.price}</td>
        </tr>
    )
}