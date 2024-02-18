import Children from "src/types/Children";

type ListitemProps = {
  children: Children
}

const ListItem = ({ children }: ListitemProps) => {
    return (
        <li>
            {children}
        </li>
    )
}

export default ListItem;