import { SparklesIcon } from "@heroicons/react/outline";
import Post from "./Post";
import Input from "./Input";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Steve Rogers",
      username: "Cap",
      userImg:
        "https://w0.peakpx.com/wallpaper/223/397/HD-wallpaper-captain-america-avengers-endgame-captain-america-marvel-marvel-comics-marvel-superheroes-superheroes.jpg",
      img: "https://cdn.vox-cdn.com/thumbor/nNU6oP549KYvbc5Vk-M-zaLHFog=/0x0:1920x1080/1200x800/filters:focal(887x293:1193x599)/cdn.vox-cdn.com/uploads/chorus_image/image/64224190/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg",
      text: "Get Ready Avengers .... ",
      timestamp: "4 hours ago",
    },
    {
      id: "2",
      name: "Tony Stark",
      username: "Ironman",
      userImg:
        "https://i.pinimg.com/736x/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg",
      img: "https://www.thefactsite.com/wp-content/uploads/2021/06/iron-man-facts-740x370.webp",
      text: "On my way CAP .... ",
      timestamp: "3 hours ago",
    },
    {
      id: "3",
      name: "Natasha Romanoff",
      username: "Black Widow",
      userImg:
        "https://i.etsystatic.com/17162529/r/il/92a43a/3305360589/il_570xN.3305360589_8ip8.jpg",
      img: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Natasha-Romanoff.Iron-Man-Series.webp",
      text: "Hey Fellows, Joining the party now .... ",
      timestamp: "2 hours ago",
    },
    {
      id: "4",
      name: "Nick Fury",
      username: "Fury",
      userImg:
        "https://ovicio.com.br/wp-content/uploads/2022/10/20221018-nick-furys-555x555.jpg",
      img: "https://www.slashfilm.com/img/gallery/samuel-l-jackson-was-cast-as-nick-fury-after-marvel-used-his-face-without-permission/intro-1683729195.jpg",
      text: "Glad to see all of you here now .... ",
      timestamp: "1 hours ago",
    },
    {
      id: "5",
      name: "Clint Barton",
      username: "Halkeye",
      userImg:
        "https://mediaproxy.tvtropes.org/width/350/https://static.tvtropes.org/pmwiki/pub/images/1f92373a_50d8_4800_8025_be7f2b840103.jpeg",
      img: "https://sportshub.cbsistatic.com/i/2021/11/07/e7f1d0dd-0d12-4ff8-ae52-14d99a89645a/marvel-hawkeye-clint-barton-kate-bishop.jpg",
      text: "Glad to be here too .... ",
      timestamp: "1 hours ago",
    },
    {
      id: "6",
      name: "Wanda Maximoff",
      username: "Scarlet Witch",
      userImg:
        "https://upload.wikimedia.org/wikipedia/en/d/d9/Elizabeth_Olsen_as_Wanda_Maximoff.jpg",
      img: "https://staticg.sportskeeda.com/editor/2023/06/8d124-16863912009071-1920.jpg?w=840",
      text: "Greetings All .... ",
      timestamp: "1 hours ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
