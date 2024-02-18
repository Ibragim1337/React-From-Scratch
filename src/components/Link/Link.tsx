import Children from "src/types/Children";

type LinkProps = {
  href: string,
  children: Children
}

const Link = ({ href, children }: LinkProps) => {
    return (
        <a href={href}>
            {children}
        </a>
    )
}

export default Link;