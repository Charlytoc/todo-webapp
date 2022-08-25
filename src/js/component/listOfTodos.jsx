import React from "react";

const ListOFTodos = ({todoItem}) => {
    return <>
    <table className="table table-dark table-striped">
        <tbody>
            <tr>
                <td>{todoItem}</td>
            </tr>
        </tbody>
</table>
</>
}

export default ListOFTodos;