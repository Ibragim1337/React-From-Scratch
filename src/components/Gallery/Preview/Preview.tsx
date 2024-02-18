import ListItem from "../../List/ListItem/ListItem";
import Link from "../../Link/Link";
import Img from "../../Img/Img";
import Div from "../../Div/Div";

type PreviewProps = {
  anchor: string,
  imgSrc: string,
  imgAlt: string
}

const Preview = ({ anchor, imgSrc, imgAlt }: PreviewProps) => {
    const anchorWithHash = '#' + anchor;

    return (
        <ListItem>
            <Link href={anchorWithHash}>
                <Div>
                    <Img src={imgSrc} alt={imgAlt} />
                </Div>
            </Link>
        </ListItem>
    )
}

export default Preview;