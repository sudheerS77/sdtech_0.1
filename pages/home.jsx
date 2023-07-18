import HomeLayout from "@/Layout/Home.layout";
import React, { useState } from "react";

import Link from "next/link";
import styles from "./Navbar.module.css"; // Import the CSS module for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Your Logo</div>

      <div className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ""}`}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        {/* Add more nav items as needed */}
      </div>

      <div className={styles.hamburger} onClick={handleMobileMenuToggle}>
        <div
          className={`${styles.icon} ${isMobileMenuOpen ? styles.open : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      {/* <HomeLayout></HomeLayout> */}
      <Navbar />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione
      laboriosam eveniet cupiditate non sint distinctio sunt porro molestiae
      consequuntur sapiente maxime maiores, dolores mollitia soluta ad, facere
      esse iste! Fugiat animi placeat corporis esse dolorum ad sapiente
      laboriosam suscipit cumque quia quam debitis, numquam perspiciatis
      nesciunt eius provident quis ullam beatae et amet praesentium, molestias
      minus modi! Saepe, repellat? Doloribus, ipsa id vero nulla in, dolores
      facere dicta expedita optio deleniti eius placeat dolorem possimus
      aspernatur ipsam vel architecto ipsum? Accusantium totam hic similique
      obcaecati repellat ad dignissimos quasi? Qui, eos? Quasi magni vel minima
      consequatur sed maxime dolores optio nihil voluptate, architecto voluptas
      itaque deleniti in facere. Veniam voluptatibus eveniet nulla earum a culpa
      illo! Autem, ullam soluta! Deleniti repellat quis, cum nisi inventore
      voluptatum ipsam animi dicta impedit, alias blanditiis at sint culpa
      obcaecati repudiandae, commodi a est corrupti magni. Mollitia perferendis
      at tempora, saepe fuga nisi? Nihil vitae nemo magni neque exercitationem
      accusantium, inventore reprehenderit autem, eius vel earum placeat.
      Repudiandae corrupti veniam voluptatum temporibus, quam praesentium, rerum
      sed in eaque eveniet sint quibusdam recusandae quia. Corrupti aut quaerat
      beatae ducimus dicta suscipit delectus tempora doloribus voluptatem
      exercitationem, et culpa a? Iure, sequi beatae dolores, pariatur doloribus
      ab vel itaque doloremque voluptate culpa labore nulla quam. Reprehenderit
      corrupti provident, libero rerum culpa repellendus amet recusandae maxime
      iure minima odit expedita, beatae esse. Dignissimos, placeat consequatur!
      Optio facere a recusandae ad tempore incidunt exercitationem fugit dolores
      eos. Omnis praesentium quas odio perferendis error beatae unde aliquam
      dolor nihil repellendus dignissimos numquam soluta, sapiente nostrum
      minima in fugiat rem ipsa nisi sunt laborum temporibus eaque nobis
      laboriosam. Nemo? Commodi ut eius voluptas nam veniam corrupti, illum
      minus ab sunt? Ex ullam, enim quia delectus quae sunt consequuntur omnis
      ducimus dolorem, molestiae totam consectetur illo incidunt quo temporibus
      esse. Quae dolore molestiae fuga veniam possimus voluptatem asperiores
      provident dolorem praesentium quos dolor labore, non blanditiis, ut at!
      Magni a at soluta impedit possimus nulla perferendis. Molestias excepturi
      adipisci similique? Accusantium iusto in explicabo provident nesciunt
      doloribus quod cumque consectetur blanditiis iste quaerat aperiam
      reprehenderit fugit ut labore, facilis quibusdam eveniet vel suscipit?
      Praesentium, voluptates eius! Corrupti autem aut cum? Deleniti dolores
      nesciunt esse eaque consectetur culpa commodi sed natus pariatur nemo
      asperiores optio laboriosam corporis amet sunt aperiam, expedita id
      dolorum quo voluptates molestiae impedit quas! Maiores, tempore? Animi?
      Itaque praesentium enim sequi libero impedit culpa aperiam dicta odio
      officia inventore. Sint libero voluptas distinctio commodi voluptate
      debitis eligendi necessitatibus blanditiis et, sit hic cupiditate porro
      unde nostrum dolore! Nostrum ad omnis illo corrupti minima suscipit
      laboriosam nulla, repellat consequatur minus iusto laborum, sed ducimus
      repudiandae facilis neque tempora velit deserunt praesentium nobis
      eveniet, excepturi quidem. Quod, quos animi. Sunt saepe suscipit ea odit
      ipsa! Laboriosam cumque veniam reiciendis sapiente vero perspiciatis
      quibusdam. Nostrum atque in, odio vero recusandae ducimus neque mollitia
      assumenda earum modi, voluptas, fugit adipisci est. Eos sit sequi eligendi
      iure eveniet commodi placeat! Quibusdam suscipit maxime ut? Temporibus,
      fugiat enim aut magnam illum facere fuga debitis sit magni est
      reprehenderit quis, suscipit sapiente vero exercitationem. Facilis a ad
      praesentium, odit maiores ab ipsa quibusdam vero iure quas tenetur totam
      fugiat voluptas? Recusandae quidem harum iure, aperiam obcaecati
      consequuntur voluptatem nobis ut culpa, quam maxime porro. Soluta rem
      tempore sed laborum ipsum illo saepe vitae, veniam earum dicta, eum amet
      neque aut eaque nihil quaerat corporis, dignissimos facilis? Quia illum
      similique repudiandae hic veritatis necessitatibus consectetur. Iusto
      veritatis architecto expedita pariatur dolores ipsum dolorum nam similique
      placeat. Magni neque perferendis obcaecati culpa molestias minus id
      exercitationem modi et commodi, pariatur quos deserunt fugit molestiae
      quod! Dignissimos. Doloremque quam qui optio consectetur, asperiores
      perspiciatis accusantium similique eum ducimus aliquam, maiores fugiat
      unde ad numquam! Nemo aut, non, dicta illum minus facilis laboriosam quo
      nobis optio perferendis ipsum. Alias nihil ullam doloremque voluptates
      velit impedit culpa debitis rerum omnis quas nulla, ad dolore excepturi
      amet illo! Ea laborum suscipit quibusdam provident recusandae debitis quae
      culpa assumenda quas tenetur? Sint, numquam illum. Harum incidunt soluta
      quibusdam perferendis accusantium debitis quisquam cumque porro aliquid
      doloribus! Esse perspiciatis voluptatum cumque unde incidunt, consectetur
      consequuntur facere dolor odio aspernatur repudiandae adipisci minus?
      Veritatis velit ad quas. Architecto tempora iure placeat deserunt ad
      libero magni esse, reiciendis impedit dolorem odio tenetur officiis ab
      velit quidem? Numquam alias, nemo veritatis ad nesciunt ducimus modi. Quam
      nesciunt accusantium ab dicta, consequuntur facere amet alias? Porro ut
      corporis autem non deleniti, illum ipsam voluptates nesciunt iure
      consequuntur quis aut quam recusandae. Eius necessitatibus optio excepturi
      in. Aperiam nulla sapiente quas quasi at. Mollitia neque illo iusto
      dolores cum! Ut necessitatibus doloribus iure quae, eaque maiores et animi
      optio dolorem ex obcaecati molestiae est dolore praesentium ipsa? Ex a id
      illo soluta non officia provident magnam repellat optio vero atque error
      excepturi, fugiat, totam minima quod itaque? Sapiente doloremque explicabo
      vero? Id a ad minus nobis autem. Eveniet enim quis nihil odit. Facilis
      sunt dolor illo aspernatur reiciendis impedit delectus reprehenderit
      tempore soluta ea sed hic debitis voluptatem quas, nobis cumque.
      Accusantium corporis ratione ea maxime ex. Atque illo aliquid quis quo
      nihil excepturi? Optio aliquid temporibus ipsam veritatis omnis
      accusantium commodi vero quaerat, reiciendis libero doloribus voluptate
      veniam quae modi autem asperiores est illo aperiam dolorem? Sint
      praesentium, voluptas magni debitis sed laudantium omnis quaerat obcaecati
      ad, et architecto. Quam saepe quod delectus asperiores magnam totam rerum.
      Veritatis vel quos officiis sed saepe excepturi cumque veniam? A quos
      ipsum ipsa sapiente voluptatem earum incidunt ad aliquid, velit,
      distinctio doloribus eligendi, facere excepturi assumenda. Harum corporis
      quod accusamus quia vitae, perspiciatis porro iusto veritatis praesentium
      nesciunt tenetur. Inventore, vero totam animi accusamus corporis eius
      facere dolorum id ducimus dolore! Dolorem pariatur repellendus facilis
      accusantium voluptate assumenda, libero magnam amet hic, nam explicabo,
      sunt vero esse soluta illo. Explicabo esse eveniet, suscipit assumenda
      animi quibusdam, veritatis provident distinctio autem non eos voluptate
      corrupti a deserunt maiores fugiat officiis accusamus eius inventore quam
      mollitia? Rerum eveniet itaque quo quod. Totam minus porro, consectetur
      veniam maiores laboriosam obcaecati similique laborum in tempora deleniti
      quae officia provident nesciunt quo eius, atque vero odio iste beatae
      consequatur ratione? Molestias beatae quis numquam. Itaque soluta
      distinctio repudiandae praesentium aut doloribus, debitis dolores aliquam,
      molestias mollitia necessitatibus dignissimos modi inventore natus sit ut
      at, totam voluptas sequi. Dolorem magnam saepe atque explicabo eum
      praesentium? Adipisci exercitationem aut soluta ab qui velit esse iste
      doloribus! Porro praesentium, dolor dicta aperiam atque eligendi
      quibusdam, placeat ut id minima, eos numquam sequi assumenda culpa
      dignissimos animi? Illum? Quis optio quae possimus aspernatur
      necessitatibus odit amet iure dolores placeat nesciunt quaerat reiciendis
      aperiam perspiciatis illo magni voluptatem cupiditate velit laborum
      blanditiis ut, dolorum in dolor. Veritatis, corrupti dolorum. Doloribus
      velit fugiat nihil quas delectus harum alias rerum fuga vel maxime ullam
      necessitatibus reiciendis, praesentium facilis iste voluptas amet tempore
      iure saepe eos illum eius? In perferendis corrupti facere. Accusantium
      rem, dicta expedita repellendus vitae natus harum? Veniam sit, libero
      voluptates dolores distinctio exercitationem vitae dicta optio laborum
      omnis ad modi inventore officia corrupti? Quia sapiente minima accusantium
      cumque. Minima nostrum quisquam magni tenetur officiis, beatae, aspernatur
      corporis fuga ab quia, praesentium sunt pariatur deserunt repellat
      repudiandae necessitatibus exercitationem! Magni suscipit architecto ab
      laudantium, quasi esse asperiores repudiandae aliquid! Molestias
      repellendus voluptatem voluptates, obcaecati hic aliquam in. Porro
      architecto rem aut harum magnam quae, quisquam pariatur ipsa perferendis
      perspiciatis itaque, facilis inventore. Quisquam numquam saepe dolor,
      labore modi nostrum. Atque saepe quo fuga inventore numquam odit eum ab
      sunt! Et consectetur, minus sequi saepe animi molestiae exercitationem
      maiores quaerat, eveniet, omnis rerum temporibus nobis obcaecati ad. Vel,
      excepturi deleniti? Laudantium ab nemo vitae odio debitis cumque
      cupiditate. Tempore ratione tempora repellat fuga, obcaecati dolorem
      officia. Quas ad sit cupiditate nobis maiores error possimus sint
      molestias eaque? Laudantium, eligendi excepturi. Fugit optio expedita
      nobis rerum nisi, ab facere unde tempora doloribus iusto adipisci,
      nesciunt nostrum velit inventore exercitationem. At assumenda voluptate
      voluptatibus ullam earum veniam error minima explicabo nostrum non. Dolore
      cum blanditiis nam. Accusamus cupiditate, maiores iure placeat ex velit
      eius molestiae unde rerum itaque, quidem libero aspernatur eligendi
      aliquam porro veniam quis? Reprehenderit unde facere repudiandae modi
      fugiat? Iure, possimus dolores placeat asperiores sint officiis! Quia
      voluptas, saepe nostrum velit, ipsa numquam sunt accusantium quod modi
      officiis est officia. Tempora tenetur vero quasi culpa numquam. Vel,
      dolorum rem! Molestias quod officiis provident cumque obcaecati illo,
      accusantium molestiae temporibus et. Quo at ducimus rem magni explicabo
      laborum repudiandae. Quo, esse. Quaerat saepe blanditiis voluptatem
      possimus tempore perspiciatis ea officia. Earum fugiat voluptatem non
      optio, fuga laboriosam ipsum facilis delectus totam nemo! Repellendus
      incidunt sapiente dolorem minus magni inventore excepturi. Sunt aliquam
      iusto dignissimos similique quasi veniam repellendus blanditiis quia! Quam
      quia ratione ipsam atque obcaecati excepturi id quis quibusdam nobis
      beatae nulla reprehenderit iste qui fuga eligendi sint placeat pariatur
      corrupti illum, modi repellendus est aperiam illo culpa? Perspiciatis!
      Quidem enim esse pariatur perspiciatis iure, architecto vel quis, eveniet
      ea sunt obcaecati fuga assumenda eius, quia illo molestiae! Laborum
      doloremque, minus repudiandae aperiam nemo ullam ut accusamus nam
      obcaecati. Doloremque ratione deserunt eaque provident illum? Libero harum
      repudiandae corporis illo illum, odit voluptatem praesentium est deleniti
      debitis repellat consequatur qui asperiores, mollitia sed deserunt nulla
      error. Quaerat, quasi ducimus? Quaerat doloribus, non ab fuga deleniti quo
      consequuntur recusandae delectus libero error neque. Assumenda placeat non
      illum. Nostrum, placeat. Incidunt ipsam, vitae perferendis rem aliquid
      ducimus corrupti doloremque provident. Itaque? Animi, fugit quae? Aliquid
      similique voluptatum quos reprehenderit labore totam, hic magni veniam
      repellendus. Aliquam in quisquam alias nemo sapiente minima voluptatem ab
      possimus, quod quas vel, cupiditate eum quibusdam? Accusantium, obcaecati!
      Veritatis iste a exercitationem doloribus laboriosam, minima ut error fuga
      animi odit, quia commodi saepe. Deserunt adipisci, exercitationem
      excepturi amet accusantium dolorum repudiandae deleniti aut necessitatibus
      harum molestias! Deleniti incidunt ut repudiandae deserunt quasi? Nisi
      maxime quam accusantium. Repudiandae accusamus velit necessitatibus
      consectetur nisi blanditiis laboriosam possimus dolores! Iusto beatae,
      quaerat similique nulla atque eos reiciendis illum hic? Facere eius iure
      aliquam sequi corporis repellat animi porro. Exercitationem recusandae,
      quis commodi, amet, distinctio libero tempore quia deleniti non accusamus
      blanditiis totam error quos nulla perferendis earum porro vitae! Similique
      asperiores iste sint unde, odio ad commodi consectetur est recusandae,
      velit quaerat officia quae provident maiores sed repellat? Non qui
      voluptatum mollitia facilis est minima a nihil. Aliquam, ad. Amet sed,
      eveniet reprehenderit quibusdam tempora et animi hic eos ut nisi molestias
      quia est expedita aspernatur sit officiis recusandae impedit dignissimos
      reiciendis? Possimus aspernatur, doloribus doloremque delectus quod a.
      Amet dolor dicta aliquam, quia itaque at aut quaerat molestias inventore
      cum eaque sapiente consequatur distinctio accusamus odio laborum
      laudantium perspiciatis esse pariatur voluptatem, animi adipisci
      architecto hic aliquid. Quam. Blanditiis eius exercitationem, deserunt,
      temporibus repellendus fugit dolore quisquam labore alias voluptas sequi
      doloremque libero consequatur porro minus laudantium veniam odit? Ea
      excepturi laboriosam nemo eos dolores fuga enim suscipit. Quia nobis
      recusandae voluptate minus, esse voluptatibus rem incidunt ea, beatae
      exercitationem iusto sed odit. Eaque alias commodi perspiciatis inventore
      odio suscipit harum distinctio quo beatae! Laboriosam sint rem maxime. Ut
      corporis facere esse nesciunt a minima, libero porro obcaecati atque et,
      eaque vitae consequatur! Nulla mollitia, nemo repudiandae doloremque
      vitae, minima odit animi aliquid voluptas sunt totam. Laudantium, tempore.
      Quasi inventore voluptates sed magnam aliquam nobis dolore! Odio fugiat
      dolorem nobis sint aliquam suscipit repellendus ab, numquam nam delectus
      inventore! Voluptas velit odio commodi corporis earum! Similique, in
      ratione. Repudiandae et quasi aspernatur nostrum consectetur est quisquam
      officia, neque vero facere illum ipsum harum iusto minus excepturi odit!
      Dolor, nihil. Nostrum, sint consectetur optio eaque quia sequi architecto
      ex. Quaerat officia consequatur harum deserunt quisquam perferendis nemo
      praesentium quis quas voluptatibus minus deleniti recusandae, pariatur
      similique aliquid sapiente iste blanditiis atque nostrum! Quam sit maiores
      repellendus quae aut odio. Ipsam ratione accusamus corporis temporibus
      sunt dolore, corrupti repellat. Nam sequi quis veritatis, alias similique
      in impedit perferendis, modi beatae debitis ea praesentium incidunt nihil
      fugiat harum magnam. Ex, doloremque. Ipsum minus dignissimos ducimus
      nostrum perspiciatis harum, aut ipsam voluptate animi sint itaque aperiam
      eaque voluptatem veritatis rem doloribus, beatae vel sunt consectetur
      perferendis! Culpa quia labore ipsa repellat saepe. Culpa animi ea
      consectetur et nam cum quo, aspernatur explicabo natus autem. Enim
      voluptas saepe inventore itaque, vitae hic commodi voluptates illo ipsam
      numquam accusamus impedit quas consequuntur ipsa laboriosam. Eos
      aspernatur laudantium repudiandae soluta reprehenderit amet vel aliquid
      minima excepturi quia. Molestias consequuntur ad, cumque iure soluta,
      veniam reprehenderit, repellat nesciunt recusandae esse distinctio quidem
      rerum unde nostrum fugit? Aliquam rerum, vero praesentium soluta nam
      eveniet id aperiam nisi, ratione in ipsam temporibus rem. Molestias
      explicabo dignissimos incidunt. Impedit repellendus vel quaerat error
      iusto ad esse officia distinctio ratione. Ipsum repudiandae dicta, ipsa
      eveniet ipsam mollitia excepturi quod quidem explicabo fugiat ad,
      nesciunt, praesentium sed veritatis. Expedita quae dignissimos illum
      doloremque quasi porro, consequatur sunt, voluptatibus labore voluptatem
      natus? Cum, odio? Voluptate sint excepturi iusto beatae a consequatur,
      odit mollitia, suscipit ducimus cum repellendus sit voluptatum autem ad
      eius nulla. Soluta eligendi impedit velit! Aut laudantium deleniti vero
      unde? Vel voluptatibus nisi exercitationem, nobis ad, nemo voluptas fugit
      magnam eaque obcaecati at minima asperiores? Numquam laudantium voluptatem
      ipsum voluptatibus perferendis maiores pariatur temporibus facilis odit
      non rerum, iusto rem. Laborum incidunt eveniet nesciunt. Ut provident
      numquam saepe esse nulla eius, veritatis quis tempore odit sit!
      Necessitatibus similique ullam vero incidunt nobis in sequi qui dolorum,
      fugiat rem! Ex, distinctio. Incidunt id, dignissimos deserunt ducimus
      repudiandae esse totam alias quae officia sint architecto nam, ipsum
      assumenda dolore aliquid facere animi aut nobis, iusto dolorum eligendi
      consequuntur voluptatibus! Hic, totam dolore. Molestias amet, ab a
      tempore, qui distinctio corporis dolor reprehenderit voluptate, dolorem
      sint animi assumenda veniam doloribus excepturi natus! Ut asperiores est
      animi mollitia assumenda delectus placeat culpa eligendi nobis? At velit
      eveniet expedita maiores, eum architecto vitae qui quos laboriosam
      delectus ipsum soluta voluptas explicabo dolor rem dignissimos, quas
      doloribus culpa provident earum laudantium. Amet dolores obcaecati non
      nisi? Ipsa autem iste quo ipsum blanditiis aut quam iusto pariatur dolores
      excepturi nisi dolorem, earum tempora modi ratione eaque commodi ullam,
      maiores accusantium eos eveniet ipsam? Sapiente impedit neque eaque. Optio
      tempore ratione nemo autem at esse ea, harum beatae debitis molestiae
      voluptates exercitationem, voluptatem odit dolor alias. Illum quis
      incidunt tenetur eaque quasi temporibus eius fugit itaque. Repellat,
      earum. Laborum corporis assumenda earum fuga delectus saepe non quasi sit,
      fugit architecto modi eum asperiores consequuntur reiciendis voluptates
      sunt dolorum? Facere quis excepturi quo earum possimus voluptatibus eaque
      nesciunt ipsa! Animi eos quas repudiandae sequi illo officiis, maiores
      commodi maxime quo eum eligendi omnis deleniti quisquam voluptatum
      corporis, explicabo, accusamus velit laborum odio exercitationem ipsum
      aliquam suscipit. Voluptas, impedit eius! Tempore ab, natus nisi, ullam
      esse molestias nulla qui mollitia est minima quo quidem officia atque
      expedita nemo, error nihil ipsa quasi reprehenderit aliquid? Voluptate,
      fugiat. Dignissimos odit dolorem quas? Doloremque nemo, illum quam iusto
      quod, sit voluptatem laudantium sint magni consequuntur tempore sed
      asperiores accusamus mollitia dolor aperiam deleniti, et cupiditate nulla
      magnam quis? Sunt repellat laudantium ex perspiciatis. Sit nam labore
      similique voluptatem aperiam consequatur consectetur officiis rerum hic
      laborum, quam quae recusandae a quod asperiores autem libero inventore
      expedita sapiente quidem facilis in natus sequi. Delectus, recusandae!
      Inventore, eum maiores mollitia nulla quo explicabo autem provident?
      Deserunt, facere! Ducimus aspernatur, perspiciatis, autem nihil quidem
      esse omnis reiciendis numquam necessitatibus voluptate est aliquam, eos
      id? Necessitatibus, non. Eveniet! Accusantium autem excepturi
      consequuntur, quaerat corrupti eius vel vitae necessitatibus optio
      sapiente, ipsum nobis culpa corporis commodi perferendis velit laborum
      dolore, impedit debitis reprehenderit nemo dolorem minus! Sed, provident
      accusantium. Consequatur, expedita sapiente, eligendi enim aspernatur nemo
      odio facilis iure molestias culpa dolore accusantium cupiditate doloremque
      nam dolorem laboriosam placeat. Voluptatibus incidunt sint repellat quis,
      reprehenderit officiis fuga praesentium pariatur! Corrupti nulla ad eos
      porro cupiditate accusamus dicta molestiae pariatur nihil, cumque,
      mollitia repudiandae perferendis obcaecati illum dolorem iste doloremque
      quam dignissimos sed impedit. Nostrum unde minima in aperiam temporibus?
      Iure praesentium earum, reiciendis aliquam ad officia saepe atque a
      eligendi hic esse, corporis quia laudantium perferendis? Impedit,
      assumenda enim earum repudiandae doloribus, corrupti quae qui a quia
      maiores laudantium. Itaque nihil alias omnis saepe commodi ratione tenetur
      odio nostrum dolore unde odit rerum hic vero dolorem, laborum quibusdam
      aut esse sint sit excepturi, eligendi, autem temporibus! Quaerat, labore.
      Reprehenderit! Aliquam sunt magni quas, praesentium reiciendis quod sequi
      placeat atque amet soluta dolore cum minima aut ipsam optio dolorum,
      dignissimos mollitia magnam? Alias qui adipisci vero fugit quam et
      quibusdam? Nesciunt assumenda ad omnis amet dolorem nisi placeat.
      Praesentium quos esse, tenetur molestias iusto nostrum, quam aliquid est
      tempore neque deserunt aliquam veniam odit illum magni quia voluptas id
      repudiandae. Distinctio, tenetur. Laborum facilis minus corporis,
      blanditiis ea quasi reiciendis est quisquam dolore adipisci assumenda
      inventore modi odit iure repudiandae ipsum autem fugiat repellat commodi,
      praesentium eos distinctio velit possimus! Illum, eaque id. Cumque, ipsam
      voluptates! Nam, ullam, eius nisi dolor distinctio earum, dolores
      aspernatur corporis unde voluptates fuga quas autem accusamus quis. Soluta
      cupiditate magni fuga dolor quo sed? Fugit voluptatum saepe nesciunt sint
      amet eos dolor minus consectetur nam, veritatis doloremque beatae
      necessitatibus ducimus accusantium commodi. Minus ab modi nostrum sunt
      eaque doloribus reprehenderit vel asperiores fugit excepturi. Corrupti
      dolor cupiditate optio dolore error minus quod cum aliquam eveniet placeat
      asperiores, eius adipisci? Vel aspernatur eaque, exercitationem molestias
      incidunt illo esse delectus? Iste possimus sapiente consectetur odit
      molestias. Nostrum possimus consectetur, ad temporibus deleniti, quam
      blanditiis non obcaecati dolorem mollitia ipsam quidem, sint excepturi.
      Praesentium doloremque, repellat quisquam minus, dolorem nesciunt dicta,
      aliquam rem voluptates maxime quod mollitia! Et expedita molestias
      asperiores quidem quaerat nostrum excepturi suscipit explicabo laudantium
      ipsa, voluptatum quod porro impedit fugiat voluptate nesciunt repellendus
      laboriosam dolorem accusantium quo maxime commodi. Placeat quas nihil
      perferendis. Dolor ab aliquam, recusandae consectetur nostrum numquam est
      ut animi iure, odio praesentium quidem optio incidunt soluta pariatur
      rerum voluptatum modi. Debitis necessitatibus aut architecto dicta earum,
      facere at dignissimos? Recusandae vitae autem commodi. Dolor cum libero
      quos explicabo molestiae natus mollitia delectus rerum similique.
      Reiciendis facere at atque quas velit quo, in numquam eligendi est
      dignissimos iste deleniti dolore?
    </>
  );
};

export default Home;
