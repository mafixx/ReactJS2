type Props ={
    category: string;

}

export default function ProductCategoryRow(props: Props){
    return (
        <tr>
            <th colSpan={2}>
                { props.category }
            </th>
        </tr>
    );
}