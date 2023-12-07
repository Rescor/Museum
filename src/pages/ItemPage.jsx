import { useParams } from "react-router-dom";
import ItemPageInfo from "../components/ItemPageInfo/ItemPageInfo";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";

export default function ItemPage(props) {
  const { item } = useParams();

  return <>
    <LanguageSelector position={"bottom"} />
    <ItemPageInfo item={props.items[item]} />
  </>
}
