import Children from "src/types/Children";

type ListProps = {
  children: Children
}

const List = ({ children }: ListProps) => {
    return (
        <ul>
            {children}
        </ul>
    )
}

export default List;