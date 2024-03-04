import GameSmall from "./components/GameSmall";
import LandingCarousel from "./components/LandingCarousel";
import ListCard from "./components/ListCard";
import getHighRatedGames from "./lib/getHighRatedGames";
import getPopularGames from "./lib/getPopularGames";

export default async function Home() {
  const highRatedGames = await getHighRatedGames();
  const topTen = highRatedGames.slice(0, 10);
  const popularGames = await getPopularGames();
  const topTenPopular = popularGames.filter((game) => game.cover).slice(0, 10);
  return (
    <main>
      <LandingCarousel />
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-3 md:col-span-1">
          <ListCard listTitle="Top 10 Games">
            <GameSmall topTen={topTen} />
          </ListCard>
        </div>
        <div className="col-span-3 md:col-span-1">
          <ListCard listTitle="Popular Games">
            <GameSmall topTen={topTenPopular} />
          </ListCard>
        </div>
      </div>
      <iframe
        style={{ width: "1278px", height: "830px" }}
        src="
https://race-to-maranello.vercel.app/"
        data-lf-form-tracking-inspected-xbp1oaegywl7edvj="true"
        data-lf-yt-playback-inspected-xbp1oaegywl7edvj="true"
        data-lf-vimeo-playback-inspected-xbp1oaegywl7edvj="true"
      ></iframe>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi
        tempore delectus nesciunt amet rem optio laborum alias officia, dolorem
        commodi ratione quaerat. Eligendi sit quis sapiente cumque molestiae
        eveniet. Placeat voluptas neque suscipit ratione doloremque incidunt
        libero a cupiditate voluptatum tempora atque, eos cumque culpa animi
        ipsa explicabo aspernatur sequi molestiae aliquam est laudantium cum,
        autem ipsam harum? Magni. Quaerat veritatis vero provident reprehenderit
        officiis amet sed, atque eveniet eaque iste! Quaerat vel iste cumque,
        atque commodi consequuntur molestiae ut deleniti incidunt fugiat
        voluptates alias aut nihil ex nobis? Aliquam tempora itaque, sapiente
        quo omnis laborum ipsa fugit dolor officia nesciunt recusandae, incidunt
        temporibus error culpa? Facilis quod incidunt ullam quia! Odio quae
        illo, quo reiciendis aliquam voluptatibus saepe. Officiis distinctio
        molestiae reprehenderit possimus. Laborum aut dignissimos sit quo,
        quaerat consequuntur voluptatem debitis dolor, molestiae commodi
        corrupti veritatis modi a reiciendis, ratione nemo! Illum beatae eos
        possimus facere nam! Assumenda magnam numquam possimus totam beatae quos
        suscipit unde nam vitae ducimus officia enim veniam, ab minus, non nobis
        aspernatur consequatur, a nesciunt sit nisi rerum. Ducimus sit
        architecto sint. Velit pariatur at enim inventore atque distinctio est
        architecto voluptatibus neque odio, natus ex odit numquam eum dicta cum
        ratione mollitia debitis blanditiis libero voluptate. Aliquid cum sed
        perspiciatis voluptates? Voluptas fugit voluptates aperiam quo possimus
        error excepturi eveniet dolores hic, tenetur, commodi modi enim soluta.
        Mollitia fuga perferendis voluptatibus distinctio rerum at non nam.
        Perferendis odio cumque fugit amet. Dignissimos nisi iure, tempore
        impedit expedita earum adipisci cupiditate at. Aspernatur, corrupti
        quasi pariatur saepe, architecto delectus dicta nemo soluta, consectetur
        vel ipsam! Facere blanditiis rerum cumque beatae enim qui. Repudiandae
        nemo maxime quos consequatur, placeat voluptas cupiditate voluptatibus
        odit perferendis modi repellat quo totam? Quaerat, placeat nisi quas
        accusantium fugiat cupiditate vero fugit similique deleniti! Harum hic
        alias ex?
      </p>
    </main>
  );
}
