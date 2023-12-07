import ItemTiles from "../components/ItemTIles/ItemTiles";
import NavLine from "../components/ItemPageInfo/NavLine/NavLine";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";

export default function MainPage(props) {
  const sortedItems = Object.values(props.items)
    .sort((a, b) => a.id - b.id);

  return <>
      <LanguageSelector position="top" />
      <NavLine page="main" />
      <ItemTiles items={sortedItems} />
    </>
}
