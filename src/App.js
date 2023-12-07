import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import RootPage from "./pages/RootPage";
import MainPage from "./pages/MainPage";
import ItemPage from "./pages/ItemPage";
import i18n from "./i18n";
import './App.css';

const items = {
  cyberlib: {
    id: 1,
    title: "CyberLib – Баржа",
    description: "Библиотека киберпанковой направленности, существовавшая до 2005 года.",
    route: "cyberlib",
    links: [
      {name: "Открыть", url: "https://museum.netstalking.org/storage/cyberlib"}
    ],
    prefix: "",
    cover_image: "barzha.jfif",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },

  xaknotdie: {
    id: 2,
    title: "xaknotdie",
    description: "xaknotdie.org – проект, на котором размещались русскоязычные электронные журналы 90-х и 2000-х годов, посвящённые хакерству и информационной безопасности. Эти журналы представляют из себя огромную историческую ценность.",
    route: "xaknotdie",
    links: [
      {name: "Открыть", url: "https://museum.netstalking.org/storage/xaknotdie/index.htm"}
    ],
    prefix: "",
    cover_image: "xnd.jpg",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },

  mydora: {
    id: 3,
    title: "MyDora",
    description: "MyDora – проект Кайла Дрейка, который позволяет слушать музыку из архива MySpace Dragon Hoard. Содержит около 490 тысяч треков от 120 тысяч исполнителей. Есть сортировка по жанрам и функция рандома.\nУ проекта интересная, но в то же время очень грустная история, прочитать можно на форуме.",
    route: "mydora",
    links: [
      {name: "Открыть", url: "https://museum.netstalking.org/storage/mydora"},
      {name: "История проекта", url: "https://forum.netstalking.org/index.php?/topic/210-mydora/"},
    ],
    prefix: "",
    cover_image: "mydora.jpg",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },

  voidnet: {
    id: 4,
    title: "VOIDNET",
    description: "voidnet.ru – the future of post-apocalyptic networking",
    route: "voidnet",
    links: [
      {name: "04.2013", url: "https://museum.netstalking.org/storage/voidnet/04_2013.html"},
      {name: "07.2013", url: "https://museum.netstalking.org/storage/voidnet/07_2013.html"},
      {name: "03.2015", url: "https://museum.netstalking.org/storage/voidnet/03_2015.html"},
      {name: "настоящее время", url: "https://museum.netstalking.org/storage/voidnet/"},
    ],
    prefix: "Версия от: ",
    cover_image: "voidnet.png",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },

  scpterm: {
    id: 6,
    title: "SCP Foundation Terminal",
    description: "Терминал фонда SCP. Доступ был получен ████████ в результате событий [ДАННЫЕ УДАЛЕНЫ].",
    route: "scpterm",
    links: [
      {name: "Подключиться", url: "https://museum.netstalking.org/storage/scpterm"},
    ],
    prefix: "",
    cover_image: "scpterm.jpg",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },

  d3w: {
    id: 7,
    title: "d3w",
    description: "d3w.org – сайт группы ISKOPASI, одной из первых нетсталкерских групп в рунете. Среди прочего, группа создала легендарный сканнер NESCA.",
    route: "d3w",
    links: [
      {name: "Страница загрузки и активации сканнера", url: "https://museum.netstalking.org/storage/d3w/nesca.d3w.org.html"},
    ],
    prefix: "",
    cover_image: "dwr.png",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },

  radiotower: {
    id: 8,
    title: "Radio Tower",
    description: "Старая версия радиовышки.",
    route: "radiotower",
    links: [
      {name: "Открыть", url: "http://museum.netstalking.org/storage/radiotower/"},
    ],
    prefix: "",
    cover_image: "radiotower.png",
    created_at: "2023-11-12 11:00:00",
    updated_at: "2023-11-12 11:00:00"
  },

  spaces: {
    id: 9,
    title: "Spaces",
    description: "Spaces – это крупнейшая мобильная социальная сеть. Известна невероятным количеством файлов в зоне обмена и своими сообществами. Каждый пользователь может создать своё сообщество с собственным блогом, форумом, чатом и разделом для файлов.\nБыл одним из мест зарождения нетсталкинга в рунете в конце нулевых.",
    route: "spaces",
    links: [
      {name: "Главная страница в 2008 году", url: "https://museum.netstalking.org/storage/spaces/main_2008.html"},
      {name: "Интерфейс версии 2009 года", url: "https://museum.netstalking.org/storage/spaces/2009"},
    ],
    prefix: "",
    cover_image: "spaces.jpg",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },

  horse: {
    id: 10,
    title: "Little Horse adventures",
    description: "Маленькие приключения Маленькой Лошадки.",
    route: "horse",
    links: [
      {name: "Открыть", url: "https://museum.netstalking.org/storage/horse/"},
    ],
    prefix: "",
    cover_image: "horse.png",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage items={items} />,
    errorElement: <Navigate to="/" />,
    children: [
      {index: true, element: <MainPage items={items} />},
      {path: ":item", element: <ItemPage items={items} />},
    ],
  }
])

export default function App() {
  return <I18nextProvider i18n={i18n}>
    <RouterProvider router={router} />
  </I18nextProvider>
}
