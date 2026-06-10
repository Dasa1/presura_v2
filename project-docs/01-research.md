# **SOTA Web Architecture for Local Technical Service Business**

## **1\. Executive Summary**

Tržište lokalnih tehničkih i servisnih usluga u 2026\. godini prolazi kroz dubinsku transformaciju potaknutu promjenama u korisničkom ponašanju i evolucijom algoritama pretraživača. Tradicionalne, generičke prezentacijske web stranice više ne mogu zadovoljiti kompleksne zahtjeve modernih korisnika niti mogu ostvariti adekvatnu vidljivost u okruženju kojim sve više dominira umjetna inteligencija. Analize pokazuju da je do siječnja 2026\. godine udio potrošača koji koriste AI sustave poput ChatGPT-a za pronalaženje lokalnih tvrtki narastao na čak 45%, dok se očekuje pad tradicionalnog volumena pretraživanja za 25%.1 U takvom ekosustavu, digitalna prisutnost mora biti optimizirana ne samo za ljude, već i za sustave koji generiraju odgovore (Answer Engine Optimization \- AEO).  
Kontekst tvrtke Presura d.o.o. zahtijeva arhitekturu koja može istovremeno podržati dva dijametralno suprotna korisnička toka. S jedne strane, tu su hitne intervencije poput popravaka plinskih bojlera, gdje korisnici u stanju panike pretražuju usluge isključivo putem mobilnih uređaja i zahtijevaju trenutačno učitavanje stranice te sučelje bez ikakvog trenja koje omogućuje poziv jednim klikom.2 S druge strane, instalacije dizalica topline predstavljaju visokotarifne, kapitalne investicije gdje korisnici provode tjedne istražujući opcije, zahtijevajući dubinsku edukaciju, transparentnost cijena, dokaze o stručnosti (E-E-A-T signali) i višekoračne forme za precizne upite.1  
Ovaj dokument predstavlja iscrpnu arhitektonsku preporuku za izgradnju vrhunskog *lead-generation* sustava. Preporuka se temelji na razdvajanju prezentacijskog sloja od sustava za upravljanje sadržajem (Headless arhitektura), uz apsolutni prioritet na performanse bez opterećenja JavaScriptom na klijentskoj strani. Sustav je dizajniran da služi kao iznimno skalabilan predložak koji se može multiplicirati i prilagođavati za druge lokalne servisne tvrtke, uz rigorozno poštivanje najnovijih sigurnosnih, pristupačnih (WCAG 2.2) i analitičkih (GDPR Consent Mode v2) standarda.3

## **2\. Recommended Technology Stack**

Odabir tehnološkog stoga u 2026\. godini definira dugoročnu održivost, brzinu isporuke i operativne troškove projekta. Za platforme usmjerene na lokalni SEO i generiranje upita, primarni tehnički cilj je isporučiti savršene Core Web Vitals metrike, jer one izravno utječu na rangiranje i cijenu po kliku u plaćenim oglasima. Usporedba aktualnih tehnologija otkriva značajne razlike u pristupu renderiranju i isporuci sadržaja.  
Monolitni sustavi, poput tradicionalnog WordPressa, iako poznati netehničkim korisnicima, nose neprihvatljivu razinu tehničkog duga. Zbog oslanjanja na baze podataka pri svakom zahtjevu i teških ekosustava dodataka (*plugins*), monolitni WordPress često pada na testovima brzine (LCP i INP metrike) i predstavlja stalan sigurnosni rizik.5 Headless WordPress rješava sigurnosni aspekt, ali uvodi nepotrebnu kompleksnost održavanja GraphQL ili REST API slojeva koja nije opravdana za lokalnu servisnu tvrtku.6  
SaaS rješenja za vizualni razvoj, poput Webflowa i Framera, nude iznimnu brzinu dizajna i dobar LCP. Međutim, njihov *vendor lock-in* i ograničene mogućnosti programatskog generiranja stotina visokooptimiziranih lokalnih i problemskih *landing* stranica čine ih neprikladnima za izgradnju skalabilnog predloška koji se planira multiplicirati na više klijenata uz naprednu bazu podataka i relacijsko povezivanje entiteta.  
Bitka za optimalni *front-end* u 2026\. godini vodi se između Next.js-a i Astra.7 Next.js, iako industrijski standard za kompleksne interaktivne aplikacije i SaaS platforme, prema zadanim postavkama isporučuje preveliku količinu JavaScripta (React *runtime*) za stranice koje su dominantno informativnog karaktera.8 Astro, s druge strane, koristi arhitekturu otoka (*Islands Architecture*) koja isporučuje potpuno statički HTML bez JavaScripta prema zadanim postavkama, hidrirajući samo specifične interaktivne komponente (poput višekoračnih formi).9 To rezultira prosječno dva do tri puta bržim vremenima učitavanja i značajno nižim troškovima hostinga u usporedbi s Next.js-om.7  
Za sloj upravljanja sadržajem (CMS), Headless pristupi su apsolutni imperativ. Sanity i Strapi nude robusna rješenja, no Payload CMS v3 (izgrađen na Next.js-u i prilagođen modernom TypeScript okruženju) nameće se kao superioran izbor. Payload nudi neusporedivo bolje iskustvo za programere, iznimnu modularnost kroz sustav blokova i ne ograničava vlasništvo nad podacima.10 Netehničkim korisnicima omogućuje slaganje stranica poput Lego kockica, osiguravajući da sadržaj ostane strukturiran.  
Prikaz analize ključnih opcija strukturiran je u sljedećoj tablici.

| Tehnologija | Klasifikacija | Prednosti | Nedostaci | SEO i Performanse |
| :---- | :---- | :---- | :---- | :---- |
| **Astro** | Front-end Framework | Zero-JS prema zadanim postavkama, savršen Lighthouse rezultat, jeftin hosting, arhitektura otoka.7 | Nije idealan za visoko interaktivne SPA aplikacije sa složenim stanjem klijenta.9 | Neprikosnoven potencijal za Core Web Vitals i indeksaciju. |
| **Next.js** | Front-end Framework | Zreo ekosustav, Server Components (RSC), dinamičko usmjeravanje.8 | Veći osnovni paket podataka (JS bundle), složenija konfiguracija predmemoriranja.12 | Odličan, ali zahtijeva znatno više rada za savršen LCP u usporedbi s Astrom. |
| **Payload CMS v3** | Headless CMS | TypeScript native, open-source, modularan sustav blokova, nema *vendor lock-ina*.13 | Zahtijeva vlastitu Node.js infrastrukturu i bazu podataka (MongoDB ili Postgres). | Izvrstan za API isporuku strukturiranih podataka. Ne utječe negativno na front-end. |
| **WordPress (Monolit)** | Tradicionalni CMS | Najveći tržišni udio, brz razvoj osnovnog MVP-a. | Ogroman tehnički dug, sigurnosne ranjivosti dodataka, sporiji TTFB.5 | Ovisan o agresivnom *cachingu*. Često pada na INP metrikama. |
| **Sanity** | Managed Headless CMS | Izvrstan *real-time* editor, duboka prilagodljivost. | Skupi *pricing* modeli pri skaliranju, *vendor lock-in* za infrastrukturu baze. | Odličan API odziv za SSG integracije. |

Na temelju provedene analize, donosi se sljedeća arhitektonska preporuka. Za MVP i dugoročno skaliranje, **Astro** je najbolji *stack* za prezentacijski sloj jer nudi beskompromisnu brzinu, sigurnost i savršenu podlogu za SEO. **Payload CMS v3** preporučuje se kao najbolji *stack* za upravljanje sadržajem jer netehničkom vlasniku tvrtke omogućuje jednostavno, vizualno usmjereno uređivanje uz zadržavanje stroge strukture podataka potrebne za automatsko generiranje lokalnih stranica.11 Ako se predložak planira prodavati drugim lokalnim tvrtkama, ova kombinacija nudi minimalne troškove operativnog održavanja i potpunu neovisnost o platformi. Sustave poput monolitnog WordPressa treba izbjegavati jer zahtijevaju stalno sigurnosno održavanje, a vizualne *buildere* poput Webflowa jer ograničavaju programatsko skaliranje SEO entiteta.  
Preporučena opcija za implementaciju podrazumijeva isporuku Astro front-enda preko *Edge* mreža kao što su Vercel ili Cloudflare Pages, dok Payload CMS može biti udomljen na specijaliziranoj Payload Cloud platformi ili *self-hosted* na virtualnom privatnom poslužitelju (VPS) uz MongoDB bazu podataka.14

## **3\. Architecture Decision Record**

Arhitektonske odluke u ovom projektu vođene su principom isporuke maksimalne poslovne vrijednosti kroz tehnološku robusnost. Svaka ključna odluka balansira tehničku izvrsnost s pragmatičnim potrebama malog do srednjeg poduzeća.  
Prva temeljna odluka odnosi se na odabir modela isporuke sadržaja. Arhitektura će koristiti Statičku Generaciju Stranica (SSG \- Static Site Generation) umjesto Renderiranja na Strani Poslužitelja (SSR \- Server-Side Rendering) za većinu ruta. Razlog leži u prirodi poslovanja; usluge, opisi problema i lokalne stranice ne mijenjaju se svake sekunde. SSG pristup kompilira HTML tijekom procesa izgradnje (*build time*), osiguravajući da posjetitelji preuzimaju unaprijed pripremljene, minificirane dokumente s globalne mreže za isporuku sadržaja (CDN). Ovaj pristup eliminira kašnjenje uzrokovano upitima prema bazi podataka (TTFB) i pruža neprobojnu razinu sigurnosti jer napadači nemaju pristup poslužitelju baze podataka. Prepoznati *trade-off* je da ažuriranje cjenika ili dodavanje nove usluge u CMS-u zahtijeva ponovnu izgradnju web stranice. Ovaj nedostatak u potpunosti je neutraliziran implementacijom Vercel Incremental Static Regeneration (ISR) tehnologije i integracijom *webhooks* okidača koji ciljano osvježavaju samo izmijenjene stranice u roku od nekoliko sekundi.14  
Druga strateška odluka je strogo odvajanje (Decoupling) logike podataka od korisničkog sučelja korištenjem Headless pristupa. Tradicionalni monolitni sustavi spajaju bazu, aplikacijsku logiku i vizualni prikaz, što znači da svaka ranjivost u vizualnoj temi ili dodatku potencijalno ugrožava cijeli sustav. Razdvajanjem ovih slojeva, Payload CMS komunicira s Astro front-endom isključivo putem REST ili GraphQL API-ja tijekom procesa izgradnje.10 Čak i u hipotetskom scenariju kompromitacije front-end hostinga, temeljni poslovni podaci i baza korisnika ostaju netaknuti na potpuno odvojenoj infrastrukturi.  
Treća arhitektonska odluka je implementacija dizajnerskog sustava putem Tailwind CSS v4 okvira uz Class Variance Authority (CVA). Umjesto pisanja prilagođenog semantičkog CSS-a koji s vremenom postaje težak za održavanje, Tailwind osigurava da rezultirajući stilski dokument sadrži samo klase koje su stvarno iskorištene u HTML-u. U kombinaciji s CVA pristupom, komponente (poput gumba ili kartica) definiraju se s unaprijed određenim varijacijama (npr. primarni gumb za hitne slučajeve naspram sekundarnog gumba za informativne upite). Ovaj *trade-off* uvodi blagu nepreglednost u HTML kodu tijekom razvoja, ali garantira apsolutnu dosljednost dizajna i nulte regresijske pogreške prilikom skaliranja predloška za druge servisne tvrtke.11

## **4\. Security Architecture**

Sigurnosna arhitektura za sustav usmjeren na generiranje visokokvalitetnih upita ne smije dopustiti kompromise. Tvrtke poput Presura d.o.o. prikupljaju osobne podatke, adrese i specifikacije problema od vlasnika kuća, što ih čini podložnima strogim regulativama i ciljem zlonamjernih automatiziranih skripti. Sigurnost se u ovom modelu provodi kroz višeslojni pristup koji pokriva mrežni sloj, sloj aplikacije i sloj obrade podataka.  
Osnovna mrežna zaštita započinje obaveznim korištenjem modernih SSL/TLS protokola za enkripciju cjelokupnog prometa. Front-end se oslanja na sigurnost *Edge* mreže (primjerice Cloudflare ili Vercel) koja integrira zaštitu od Distribuiranog uskraćivanja usluge (DDoS) na razini infrastrukture i Web Application Firewall (WAF). WAF pravila aktivno analiziraju dolazne zahtjeve, blokirajući prepoznate obrasce napada prije nego što uopće dotaknu statičke datoteke aplikacije. Zaštita od XSS (Cross-Site Scripting) i CSRF (Cross-Site Request Forgery) napada ugrađena je inherentno u Astro okvir, koji automatski neutralizira vanjski unos i izbjegava izvršavanje nesigurnog koda osim u strogo kontroliranim okruženjima. Dodatna linija obrane implementira se kroz stroga HTTP sigurnosna zaglavlja, uključujući Content Security Policy (CSP) koji precizno definira s kojih domena preglednik smije učitavati skripte, slike i stilove, sprječavajući time injekciju vanjskog koda.  
Zaštita kontakt formi jedan je od najkritičnijih operativnih zadataka, jer automatizirani *spam* može zagušiti poslovanje. Zastarjela praksa oslanjanja isključivo na Google reCAPTCHA v2 predstavlja ozbiljan problem za korisničko iskustvo, posebice za korisnike s hitnim problemima na mobilnim uređajima koji nemaju vremena za rješavanje slikovnih zagonetki. Arhitektonska preporuka usmjerava se na implementaciju skrivenih *honeypot* polja na razini HTML obrazaca. Roboti redovito ispunjavaju ta nevidljiva polja, što poslužitelju omogućuje da automatski odbaci takve upite bez interakcije sa stvarnim korisnicima. Za naprednu analizu ponašanja botova implementirat će se Cloudflare Turnstile, koji provodi provjere u pozadini bez vizualnog opterećenja za korisnika. Sve API rute koje obrađuju prikupljene podatke iz formi moraju biti zaštićene mehanizmima ograničavanja brzine pristupa (*Rate Limiting*), čime se onemogućava automatizirano slanje stotina upita u kratkom vremenu s iste IP adrese.  
Na razini upravljanja sadržajem (CMS), sigurnost administrativnog pristupa podliježe strogim pravilima. Payload CMS sučelje ne smije biti indeksirano od strane pretraživača. Pristup administraciji zahtijeva obaveznu dvofaktorsku autentifikaciju (2FA) i snažne politike lozinki, uz implementiranu zaštitu od *Brute Force* napada koja privremeno zaključava račune nakon nekoliko neuspješnih pokušaja. Kontrola pristupa temeljena na ulogama (Role-Based Access Control) osigurava da vlasnik tvrtke ima ovlasti za izmjenu tekstova i cijena, dok pristup konfiguracijama infrastrukture i baze podataka ostaje isključivo domena tehničkog tima.  
Zaštita privatnosti i usklađenost s Općom uredbom o zaštiti podataka (GDPR) iznimno su stroge teme. Obrazac za kontakt ne smije imati unaprijed označene okvire pristanka (*checkbox*). Politika čuvanja prikupljenih osobnih podataka iz formi mora se provoditi automatiziranim procedurama baze podataka koje brišu ili potpuno anonimiziraju podatke o korisnicima 6 do 12 mjeseci nakon završetka servisne intervencije, osiguravajući da arhitektura služi kao prolazni mehanizam, a ne kao stalno spremište osobnih informacija.15 Kako bi se osigurala neprekidna operativnost, infrastruktura uključuje automatizirane dnevne sigurnosne kopije (*backups*) baze podataka te kontinuirani nadzor dostupnosti sustava (Uptime monitoring).  
Checklist za razvojni tim:

* Sustav preusmjerava sav HTTP promet na HTTPS.  
* Integriran WAF i DDoS zaštitni sloj.  
* Forme zaštićene mješavinom *Honeypot* arhitekture i Cloudflare Turnstile tehnologije.  
* API rute osigurane *Rate Limiting* pravilima (npr. maksimalno 5 zahtjeva po minuti s jedne IP adrese).  
* Implementirana HTTP sigurnosna zaglavlja (CSP, X-Content-Type-Options, X-Frame-Options: DENY).  
* Omogućena 2FA autentifikacija za CMS administratora.  
* RBAC (Role-Based Access Control) struktura implementirana i testirana.  
* Konfigurirano automatsko brisanje osjetljivih podataka iz baze obrazaca nakon definiranog perioda.

## **5\. Information Architecture**

Arhitektura informacija (IA) presudan je element koji povezuje SEO potencijal s jasnim korisničkim sučeljem. S obzirom na to da sustav mora poslužiti kao skalabilni predložak za lokalne servisne tvrtke, sitemap struktura mora podržavati logično širenje bez rizika od dupliciranja sadržaja ili stvaranja takozvanih "tankih" stranica (Thin Content). Dobro strukturirana IA omogućuje pretraživačima da jasno razumiju domenu ekspertize i lokalni doseg tvrtke.1  
Osnovna arhitektura obuhvaća početnu stranicu kao centralno čvorište, no ključni promet generirat će se kroz dublje tematske i lokalne silose. Krovna kategorija usluga (/usluge/) služi za navigacijski pregled, dok su pojedinačne stranice usluga (npr. /usluge/servis-vaillant-bojlera/) dizajnirane kao opsežne, dubinske *landing* stranice s visokom komercijalnom namjerom. Koncept "Stranica temeljenih na problemu" predstavlja inovativan pristup IA-u.1 Umjesto da korisnik mora znati da mu je potrebno "kemijsko ispiranje instalacija", on pretražuje svoj specifičan simptom. Kreiranje URL-ova poput /problemi/radijatori-slabo-griju/ izravno presreće informativne i hitne korisničke namjere te nudi konkretnu uslugu kao rješenje. Ova struktura gradi neusporediv semantički autoritet.  
Lokalne *landing* stranice predstavljaju najveći izazov i najveću priliku u lokalnom SEO-u. Uobičajena, ali iznimno loša praksa (često kažnjavana algoritmima) jest kreiranje desetak identičnih stranica na kojima se mijenja samo ime grada (npr. Servis bojlera Osijek, Servis bojlera Bilje). Predložena arhitektura Information Architecture modela izbjegava ovaj rizik modularnim pristupom.17 Strukture poput /lokacije/osijek/ automatski povlače i dinamički generiraju jedinstvene podatke vezane specifično za taj grad: integriraju stvarne, geo-tagirane recenzije korisnika iz Osijeka, prikazuju fotogaleriju dosadašnjih radova obavljenih isključivo na toj lokaciji (s odgovarajućim opisima) te opisuju lokalne specifičnosti (npr. razina tvrdoće vode u određenoj općini koja povećava potrebu za omekšavanjem). Ovime se eliminira problem dupliciranog sadržaja i osigurava jedinstvena vrijednost svake pojedine lokalne stranice.1  
Preporučena struktura URL-ova:

* / (Početna stranica: Navigacijski hub, izgradnja povjerenja, primarni kontakt.)  
* /usluge/ (Indeks svih tehničkih rješenja.)  
  * /usluge/servis-vaillant-bojlera/ (Detalji usluge, SEO namjera: Transakcijska.)  
  * /usluge/strojno-ispiranje-radijatora/  
  * /usluge/ispiranje-podnog-grijanja/  
  * /usluge/omeksavanje-vode/  
  * /usluge/dijagnostika-i-odrzavanje/  
  * /usluge/dizalice-topline/ (Posebna pažnja zbog edukacijske potrebe visokotarifne usluge.)  
* /problemi/ (Edukacijski hub i mapiranje namjere.)  
  * /problemi/radijatori-slabo-griju/  
  * /problemi/bojler-javlja-gresku/  
  * /problemi/hladni-radijatori-pri-dnu/  
  * /problemi/podno-grijanje-slabo-grije/  
* /lokacije/ (Hub za lokalni SEO.17)  
  * /lokacije/osijek/  
  * /lokacije/bilje/  
* /brandovi/  
  * /brandovi/vaillant/  
* /cjenik/ (Fiksne usluge, raspon cijena, mehanizmi procjene i transparentnost.18)  
* /radovi/ (E-E-A-T dokazi, detaljne studije slučaja, fotografije prije i poslije.1)  
* /blog/ (Dubinski informativni i savjetodavni sadržaj za izgradnju autoriteta domene.)  
* /kontakt/ (Primarni CTA hub, interaktivna karta područja pokrivenosti, forme, kontakt podaci.)

Svaka komercijalno usmjerena stranica mora završavati s jasnim primarnim pozivom na akciju (CTA), najčešće usmjerenim prema ostvarivanju telefonskog poziva putem mobilnog uređaja, te sekundarnim CTA usmjerenim na ispunjavanje zahtjeva za ponudom.

## **6\. UX Strategy**

Korisničko iskustvo (UX) za tehničko-servisne tvrtke fundamentalno se razlikuje od standardne e-trgovine. Emocionalno stanje korisnika diktira arhitekturu sučelja. Hitnost i povjerenje su jedini važni okidači konverzije.2 Analiza pokazuje da korisnik s razbijenim bojlerom usred prosinca neće čitati povijest tvrtke; on traži telefonski broj i obećanje brzog dolaska. S druge strane, korisnik koji planira uložiti znatna sredstva u dizalicu topline analizirat će svaku riječ i recenziju. UX strategija rješava te suprotnosti kroz specifične korisničke tokove (User Flows).  
Za korisnika s hitnim problemom grijanja (Tok 1\) ili s bojlerom koji javlja grešku, ulazna točka (Entry point) najčešće je Google pretraga putem pametnog telefona koja vodi na rezultate unutar lokalnog paketa (Google Local Pack) ili izravno na organski rezultat. U prvih pet sekundi, korisnik mora vizualno dekodirati tri stvari: nudi li tvrtka rješenje za taj problem, rade li na njegovom području i jesu li dostupni odmah. Njegovi strahovi usmjereni su na hladnoću i dugotrajno čekanje servisera. UX rješenje za ovaj scenarij temelji se na agresivnoj primjeni mobile-first paradigme. Dizajn predviđa implementaciju stalno vidljivog, fiksiranog pozivnog gumba (Sticky Call Button) prikupljenog na dnu ili vrhu zaslona.2 CTA mora biti eksplicitan (npr. "Nazovite dežurni servis"). Ovdje ne postoje višekoračne forme; cilj je isključivo generirati klikabilni telefonski poziv.  
Korisnik koji razmišlja o dizalici topline ili strojnom kemijskom ispiranju (Tokovi 5 i 6\) nalazi se u istraživačkoj fazi. Ovi tokovi zahtijevaju edukativni UX pristup. Njihova glavna sumnja leži u opravdanosti visokog troška. Stranica ih mora uvesti u problem, prezentirajući dokaze kroz stvarne studije slučaja i prije/poslije blokove fotografija koji prikazuju mulj i naslage izvađene iz radijatora. Idealan CTA za ovakvog korisnika nije neposredan poziv, već višekoračna forma za prikupljanje informacija (npr. "Izračunajte okvirnu uštedu" ili "Zatražite neobvezujuću procjenu"), koja postupno vodi korisnika kroz pitanja o kvadraturi kuće, postojećoj izolaciji i tipu grijanja. Razdvajanjem ovih kompleksnih pitanja u korake, značajno se smanjuje trenje i povećava stopa ispunjavanja forme u usporedbi s dugačkim, zastrašujućim jedno-straničnim obrascem.  
Korisnik koji želi okvirnu cijenu (Tok 7\) zahtijeva potpunu transparentnost. UX strategija za takvog korisnika oslanja se na jasno odvojenu sekciju "Cjenik" koja eliminira anksioznost prije kontakta. Čak i ako su cijene varijabilne, prikaz početnih cijena (npr. "Servis plinskog bojlera od X €") uz jasno navedeno što je uključeno u cijenu značajno gradi povjerenje.18 Korisnici koji ne razumiju tehničke usluge (Tok 9\) upućuju se na jednostavnu dijagnostičku navigaciju temeljenu na problemima, gdje klikom na ikonu radijatora koji slabo grije dolaze do rješenja.  
Ukupni mobilni UX dizajn zahtijeva kratke krovne hero sekcije (Short Hero), mogućnost brzog vizualnog skeniranja usluga pomoću prepoznatljivih ikona, velike mete dodira (Touch Target Sizes) prema WCAG 2.2 standardima (najmanje 44x44 piksela) te slike optimizirane za širinu ekrana koje ne ometaju čitljivost.4

## **7\. UI Direction**

Vizualni smjer za premium servisnu stranicu u 2026\. godini raskida s tradicijom neurednih, pretrpanih web stranica zanatskih radionica koje obiluju lošim generičkim fotografijama (stock photos) majstora u čistim pregačama.2 Dizajn mora projicirati sliku visoko tehnološki opremljene, pouzdane i čiste inženjerske tvrtke, bez da zastrani u nepristupačnu korporativnu hladnoću koja djeluje poput nedodirljivog SaaS proizvoda.  
Ukupni vizualni stil temelji se na asimetričnom mrežnom sustavu (Grid System) koji omogućuje čiste linije, izdašan prazan prostor (Whitespace) i strukturiranu tipografsku hijerarhiju. Tipografski par sastoji se od snažnog, geometrijskog *sans-serif* fonta za naslove (npr. Montserrat ili Inter) koji odiše inženjerskom stabilnošću, i visoko čitljivog fonta za odlomke (npr. Roboto ili slično) s adekvatnim proredom.  
Paleta boja konstruirana je oko psiholoških okidača povjerenja i hitnosti. Temeljna boja brenda je tamna, mornarsko plava koja sugerira vodu, stručnost, mehaniku i pouzdanost, dok signalna, vibrantno narančasta ili crvena boja preuzima ulogu naglašavanja ključnih interaktivnih elemenata (CTA gumbi) vezanih uz toplinu i hitnost. Kontrast boja strogo prati WCAG 2.2 smjernice pristupačnosti, osiguravajući lako čitanje u uvjetima jakog osvjetljenja (npr. kada korisnik s mobitelom stoji u osunčanom dvorištu).4  
Jedan od ključnih elemenata za postizanje premium dojma je apsolutna redukcija ili zabrana jeftinih *stock* fotografija.2 Klijente ne zanima ilustracija savršenog modela; oni žele vidjeti autentične, oštre fotografije pravih radova. UI smjer naglašava galerije stvarnih intervencija, termovizijske snimke koje prikazuju nevidljive probleme sustava, fotografije urednih tehničara Presure u zaštitnoj opremi pokraj brendiranih servisnih vozila te jasne slike visokotehnoloških alata u uporabi. Tehnike mikrointerakcija (poput suptilnog izdizanja i pojave sjene prilikom prelaska pokazivača miša preko kartice usluge) daju osjećaj responzivnosti i kvalitete izrade bez opterećivanja klijenta teškim JavaScript animacijama.  
Na početnoj stranici, ispod impresivne ali optimizirane hero sekcije, nalazi se vitalan UI element: Traka Povjerenja (Trust Bar). Ovaj segment sadrži vizualne bedževe ovlaštenja (Vaillant servis), ikone osiguranja kvalitete i zvjezdice s vanjskih agregatora (poput Google Recenzija), što trenutno komunicira E-E-A-T signale.1 Elementi s dokazima, poput vrtuljka (carousel) sa svjedočanstvima stvarnih korisnika i komparativnim *Before/After* blokovima vizualno su izdvojeni jasnim kontrastnim podlogama.  
Obrasci za unos (Forms) dizajnirani su da budu privlačni, s jasnim labelema iznad polja, vizualnim povratnim informacijama o validaciji unosa i statusima (uspjeh/greška) koji poštuju načela pristupačnosti, omogućavajući netehničkim korisnicima laku navigaciju.4

## **8\. Design System**

Za osiguravanje dugoročne skalabilnosti, mogućnosti održavanja i olakšavanje razvoja predloška za buduće klijente, definiran je osnovni sustav dizajna (Design System). Razvojnom timu preporučuje se organizacija arhitekture dizajna unutar Figme, uz izravno preslikavanje tokena u Tailwind CSS v4 konfiguracijsku datoteku koristeći CSS varijable (tailwind.config.mjs).11  
Sustav se sastoji od sljedećih kategorija tokena i komponenti:

* **Tipografska Skala (Typography Scale):** Bazirana na bazičnoj veličini od 16px. Skala naslova od text-sm do text-5xl (ili 6xl za velike hero naslove).  
* **Prostorna Skala (Spacing Scale):** Strogi razmaci utemeljeni na bazi 4 (4px, 8px, 16px, 24px, 32px, 64px, 128px) kako bi se osigurala vizualna harmonija layouta.  
* **Tokeni Boja (Color Tokens):**  
  * Semantic Colors: primary-brand (plava), accent-cta (narančasta/crvena).  
  * Status Colors: success (zelena), error (crvena za greške formi), warning (žuta).  
  * Neutral Scale: Paleta od slate-50 (najsvjetlija za pozadine) do slate-900 (tamna za primarni tekst).  
* **Varijante Gumba (Button Variants):** Koristeći CVA (Class Variance Authority) obrazac.  
  * Solid/Primary: Pozadina accent-cta, tekst bijel, minimalna visina 44px (za prilagodbu dodira).4 Koristi se za telefonske pozive i glavni upit.  
  * Outline/Secondary: Prozirna pozadina s primary-brand obrubom. Koristi se za preusmjeravanje na detalje usluga ili pregled portfelja.  
  * Ghost: Suptilan stil za sporedne interakcije u navigaciji.  
* **Komponente Kartica (Card Components):** Moduli s ujednačenim kutovima radijusa (border-radius), primijenjenim blagim sjenama, rezervirani za prikaz pojedinačnih usluga i isticanje prednosti (uspjeha).  
* **Elementi Obrazaca (Form Components):** Input polja, *checkbox* komponente i padajući izbornici koji imaju jasno izražena stanja zadržavanja kursora (hover), fokusa pristupačnosti (focus-visible uz prsten jake boje) te zaključana (disabled) stanja.4  
* **Pristupačnost (Accessibility States):** Stroga definicija .focus-visible obrisa kako bi se zadovoljili zahtjevi Criterion 2.4.11 i 2.4.13, izbjegavajući preklapanje fokusiranog elementa i osiguravajući visoki kontrast fokusa.4

Sve komponente moraju biti dizajnirane uzimajući u obzir prefers-reduced-motion CSS pravilo kako bi se poštovale preferencije korisnika koji isključuju animacije u postavkama operativnog sustava.4

## **9\. Content & Copywriting Strategy**

Sadržajna strategija za servisnu platformu Presura d.o.o. mora funkcionirati kao virtualni prodajni predstavnik i dijagnostičar. Ton komunikacije odmiče se od napadnog, jeftinog marketinga; on mora biti stručan, tehnički precizan ali objašnjen jasnim jezikom, duboko lokalno relevantan i primarno orijentiran na rješavanje problema korisnika.2 Glavni cilj je "prevesti" inženjersku specifikaciju u konkretnu korist za korisnika (npr. ne opisivati samo "ispiranje sustava s 5 bara pritiska", već "vraćanje ravnomjerne topline i ušteda na plinu").  
**Primjeri Copywriting obrazaca:**

* **Hero Naslov (Početna stranica):** "Brz i pouzdan servis sustava grijanja u Osijeku. Povjerite toplinu vašeg doma ovlaštenim stručnjacima."  
* **Hero Podnaslov:** "Od hitnih popravaka Vaillant plinskih bojlera do ugradnje naprednih dizalica topline i strojnog ispiranja radijatora. Stručnost, transparentne cijene i rješenja koja traju."  
* **CTA tekstovi:** Umjesto generičkog "Saznaj više", koristiti usmjereno djelovanje: "Zatražite besplatnu ponudu", "Nazovite dežurni servis", "Provjerite okvirne cijene".  
* **Uvod za strojno ispiranje radijatora:** "Radijatori su vam topli samo pri vrhu, a dno je potpuno hladno? Sustav stvara neobične zvukove lupkanja, a računi za plin rastu? Rješenje nije zamjena cijelog sustava. Specijaliziranim strojnim kemijskim ispiranjem uklanjamo nataloženi mulj i kamenac iz vaših instalacija. Vraćamo 100% efikasnost sustavu grijanja i drastično produžujemo radni vijek vašeg bojlera."  
* **Uvod za Vaillant servis:** "Kao ovlašteni Vaillant partner za područje Osijeka i okolice, osiguravamo da vaš sustav radi besprijekorno. Bilo da se radi o redovitom godišnjem održavanju, dijagnostici kvara uz pomoć najmodernijih instrumenata, ili hitnom popravku kada ostanete bez tople vode – naš tim garantira stručnu intervenciju ugrađujući isključivo originalne dijelove."  
* **Sekcija 'Koliko traje':** "Transparente informacije o trajanju radova. Strojno ispiranje sustava prosječne kuće traje između 4 do 6 sati, ovisno o stupnju onečišćenja. Sustav možete normalno koristiti odmah po završetku."  
* **Sekcija 'Okvirne cijene':** Transparentno navođenje početnih cijena.18 "Servis i dijagnostika od X €. Cijena strojnog ispiranja ovisi o broju grijaćih tijela (radijatora). Kontaktirajte nas za točnu ponudu."  
* **Mikrocopy za formu i telefon:** Uz glavni broj navesti: *"Dostupni smo za hitne intervencije."* Uz formu za upit: *"Odgovaramo s detaljnom ponudom unutar 24 sata. Podaci se koriste isključivo za izradu ponude."*

Greške formi (Error messages) ne smiju biti programerski generične (npr. "Invalid field format"). Trebaju komunicirati jasno: "Molimo unesite ispravan format telefonskog broja kako bismo vas mogli kontaktirati."

## **10\. SEO Strategy**

Lokalna SEO strategija u 2026\. godini udaljila se od pukog ponavljanja ključnih riječi i preselila u područje arhitekture subjekata (Entities), signala povjerenja (E-E-A-T) i optimizacije za sustave generativne umjetne inteligencije (Answer Engine Optimization \- AEO).1 Sustavi poput Googleovog Gemini modela ili ChatGPT-a, koji posreduju u značajnom dijelu pretraga, ne oslanjaju se na jednostavne popise ključnih riječi, već na strukturirane, vjerodostojne izvore s jasnim odgovorima na upite naravnog jezika.1  
**Keyword Clustering i Mapiranje Namjera:**  
Ciljanje dugorepih ključnih riječi (Long-tail keywords) koje odgovaraju specifičnim, razgovornim pitanjima (Voice Search) ključno je za pobjedu. Frazu "Vaillant serviser Osijek" treba tretirati kao transakcijsku ključnu riječ koja vodi izravno na "Service Landing Page", dok informativna fraza "zašto su radijatori hladni pri dnu" cilja na problematsku "Problem Landing Page" ili post na blogu dizajniran za prikupljanje edukativnog prometa na vrhu prodajnog lijevka (Top of Funnel).  
**Strukturirani Podaci (Schema Markup):** Upotreba naprednog JSON-LD označavanja apsolutni je prioritet za izgradnju povjerenja i omogućavanje obogaćenih rezultata pretraživanja (Rich Snippets). Umjesto korištenja generičkog LocalBusiness entiteta, implementira se visoko specifični HVACBusiness podtip u kombinaciji s Service podacima.19 Svaka usluga izložena je kao podentitet glavne organizacije.  
*Primjer preporučenog JSON-LD bloka (za integraciju u Astro/Headless konfiguraciju):*

JSON  
{  
  "@context": "https://schema.org",  
  "@type": "HVACBusiness",  
  "@id": "https://www.presura.hr/\#organization",  
  "name": "Presura d.o.o.",  
  "image": "https://www.presura.hr/images/logo.png",  
  "url": "https://www.presura.hr/",  
  "telephone": "+385914110001",  
  "priceRange": "€€",  
  "address": {  
    "@type": "PostalAddress",  
    "streetAddress": "Ul. Žrtava Domovinskog Rata 33",  
    "addressLocality": "Bilje",  
    "postalCode": "31327",  
    "addressCountry": "HR"  
  },  
  "geo": {  
    "@type": "GeoCoordinates",  
    "latitude": 45.6179,  
    "longitude": 18.7423  
  },  
  "openingHoursSpecification":,  
      "opens": "08:00",  
      "closes": "16:00"  
    }  
  \],  
  "sameAs": \[  
    "https://www.facebook.com/presura.hr"  
  \],  
  "hasOfferCatalog": {  
    "@type": "OfferCatalog",  
    "name": "Tehničke i servisne usluge",  
    "itemListElement":  
  }  
}

**Optimizacija na stranici (On-Page SEO):**

* **Title tag:** Servis Vaillant bojlera Osijek | Hitne intervencije | Presura d.o.o.  
* **Meta Description:** Stručni servis plinskih bojlera u Osijeku. Kao ovlašteni Vaillant partner, nudimo brzu dijagnostiku, hitne popravke i redovita održavanja. Nazovite odmah\!  
* **H1 Naslov:** Jasan, obavezno sadrži ključnu riječ i lokaciju (npr. "Ovlašteni Servis Vaillant Bojlera za Osijek i Okolicu").

**Lokalni SEO, GBP i Dosljednost Podataka:** Kritičan aspekt SEO uspjeha je savršena podudarnost i dosljednost Naziva, Adrese, Telefona i Weba (NAPW \- Name, Address, Phone, Website) preko svih lokalnih direktorija i unutar strukturiranih podataka. Uski sinkronicitet s detaljno optimiziranim i aktivnim Google Business Profilom (GBP), redovito prikupljanje recenzija klijenata te poticanje istih da spominju specifične obavljene usluge u tekstovima recenzija pruža masivan vjetar u leđa rangiranju na mapama (Local Pack).1 Učestalo osvježavanje GBP profila kroz novosti, dodavanje fotografija s lokacija intervencija (sa zadržanim geografskim koordinatama slike) dodatno podiže lokalni doseg. Kako bi platforma iskoristila prilike koje nudi *Answer Engine Optimization*, strukturirani FAQPage schema blokovi integriraju se u dno svake uslužne i lokalne stranice.1

## **11\. Accessibility Requirements**

U godini 2026., pristupačnost (Accessibility) prestala je biti isključivo pitanje etike i prerasla u važan zakonski imperativ te moćan mehanizam koji utječe na korisničko zadovoljstvo i SEO. Arhitektura zahtijeva striktnu usklađenost s WCAG 2.2 Level AA normativima, uz poseban naglasak na specifične prepreke povezane s mobilnim korisnicima te osobama s motoričkim i kognitivnim poteškoćama.4  
**Checklist pristupačnosti za razvojni tim (prema WCAG 2.2):**

* \[ \] **Fokus nije prekriven (Criterion 2.4.11 \- Focus Not Obscured):** Prilikom kretanja po stranici pomoću tipkovnice (Tab), trenutni fokusirani element apsolutno nikada ne smije biti zaklonjen fiksnim ili preklapajućim elementima poput "Sticky" zaglavlja ili banera za obavijest o kolačićima.4 Razvojni tim mora osigurati adekvatan skrol *padding* prema gornjem rubu ekrana.  
* \[ \] **Izgled fokusa (Criterion 2.4.13 \- Focus Appearance):** Standardni zadani preglednički obrub oko fokusiranih gumba, formi i navigacijskih elemenata nije dovoljan. Dizajn mora propisati očit i visokokontrastan CSS :focus-visible okvir debljine od barem 2 piksela (primjerice u narančastoj boji akcenta) oko interaktivnih komponenti.4  
* \[ \] **Alternativa povlačenju (Criterion 2.5.7 \- Dragging Movements):** Komponente na sučelju poput vizualnih "Before/After" usporednih modula radijatora ne smiju zahtijevati povlačenje (*drag*) mišem ili prstom na mobilnim zaslonima kao jedinu operativnu gestu. Mora postojati i jednostavna funkcionalna alternativa aktivacije kroz dodir i klik (npr. jednostavni gumbi sa strelicama).4  
* \[ \] **Sprječavanje redundantnog unosa (Criterion 3.3.7 \- Redundant Entry):** Ukoliko kontakt procedura zahtijeva višekoračni proces, prethodno navedeni podaci (npr. poštanski broj) ne smiju se ponovno zahtijevati. Sva polja u obliku obavezna su imati adekvatne autocomplete (automatsko popunjavanje) atribute čime se smanjuje mentalno i manualno opterećenje pri unosu.4  
* \[ \] **Veličina mete dodira (Touch Target Sizes):** Apsolutno svi interaktivni elementi na sučelju prilagođenom za mobilne uređaje moraju obuhvaćati površinu od minimalno 44x44 CSS piksela. Manje područje izaziva frustraciju pri navigaciji palcem.4  
* \[ \] **Semantika i hijerarhija:** Implementirati ispravnu, semantičku HTML5 strukturu koja koristi tagove \<main\>, \<nav\>, \<article\>, uz iznimno strogo izbjegavanje preskakanja razina naslova u hijerarhiji (npr. prelazak s H1 na H3 bez prisutnosti H2).  
* \[ \] **Podrška za prekinutu animaciju (Prefers Reduced Motion):** Sve tranzicije sučelja moraju poštivati korisničke postavke računala ili mobitela o minimizaciji vizualnih pokreta te isključiti pokrete unutar prefers-reduced-motion medijskog upita.4  
* \[ \] **Alternativni opisi i jezični atributi:** Deklarirati \<html lang="hr"\> atribut. Informativne fotografije zahtijevaju detaljne alt atribute, dok čisto dekorativni vizuali koriste prazan opisni atribut (alt="") kako bi ih čitači zaslona zanemarili i time smanjili šum.

## **12\. Performance Requirements**

Maksimalna brzina izvedbe (Performance) ne tretira se samo kao inženjerski standard, nego je jedan od temeljnih načina za maksimizaciju stope konverzije (CRO). Googleove Core Web Vitals metrike postavljaju prage uspješnosti ispod kojih rangiranje drastično opada, pogotovo u konkurentnim sektorima hitnih lokalnih usluga.5 Arhitektura bazirana na Astro frameworku ("Islands Architecture") prirodno eliminira višak nepotrebnih datoteka na putanji klijenta.  
**Ciljevi izvedbe:**

* **LCP (Largest Contentful Paint):** Mora se ostvariti unutar maksimalno 1.5 sekundi (čak do 1.2 sekunde).5 Ovo se postiže forsiranjem predmemoriranja gornjeg dijela vizuala (Hero slika) uz atribute loading="eager" i fetchpriority="high", čime preglednik stavlja sliku na vrh prioriteta preuzimanja prije ostatka skripti.  
* **CLS (Cumulative Layout Shift):** Strogo fiksiran na 0.00. Elementi na stranici tijekom učitavanja ne smiju "skakati", što se osigurava eksplicitnim deklariranjem širine (width) i visine (height) svih responzivnih slika i medijskih kontejnera kako bi rezervirali točan prazan prostor u pregledniku.  
* **INP (Interaction to Next Paint):** Potrebno je održati latenciju odziva na manje od 100 milisekundi. Zbog ograničene i strogo hidrirane logike JavaScripta kroz Astro framework, klijent ne troši dragocjeno procesorsko vrijeme za interpretiranje masivnih okvira sučelja, što automatski čuva vrhunski domet performansi čak i na starijim pametnim telefonima.5

**Tehničke smjernice (Checklist za implementaciju):**

* **Optimizacija prikaza i fotografija:** Slike se automatski optimiziraju tijekom procesa kompilacije te služe posjetitelju isključivo u najnovijim standardima poput WebP ili AVIF arhitekture.  
* **Izolacija resursa i Lazy Loading:** Sav sporedni medijski sadržaj izvan neposrednog ekrana (Below the Fold) obavezno integrira atribute loading="lazy".  
* **Ekstrakcija kritičnog CSS-a:** Korištenjem alata za pakiranje na front-endu integriranog unutar Tailwinda i Astra, uklanjaju se svi neupotrijebljeni stilovi, dok se isključivo bitna i upotrebljiva vizualna konfiguracija postavlja u HTML glavu (Critical CSS inlining).  
* **Upravljanje skriptama trećih strana:** Vanjski moduli za praćenje i marketinški analitički servisi implementiraju se isključivo preko alata kao što je Partytown, koji premješta izvršavanje istih na pozadinski nit procesa unutar web-preglednika (*Web Worker*). Ovim pristupom blokovi obavijesti ili oglasa ne zamrzavaju glavno sučelje niti blokiraju odaziv konverzija.

Stack koji ovo najlakše omogućuje je apsolutno **Astro**, s obzirom na to da njegov osnovni kompajlerski proces odbacuje nepotreban JavaScript umjesto da ga optimizira.

## **13\. Conversion Strategy**

Strategija povećanja stope konverzije (CRO) usredotočena je na jednostavan, siguran put bez tehničkog žargona od pojave prvog problema (istraživanje) do akcije (zahtjev za kontakt). Različite usluge zahtijevaju asimetričan pristup komunikaciji, što podrazumijeva duboko segmentiranje dizajna interakcije.  
Hijerarhija obveze komunicira se kroz vrstu postavljenih zahtjeva:

* **Trenutačni pozivi za hitne situacije (Primarni CTA):** Za probleme koji se tiču sigurnosti ili hitne sanacije šteta (npr. curenje plinskog bojlera), u gornji vidljivi dio na mobitelima integrira se fiksirana traka ("Sticky CTA") na kojoj se nalazi isključivo hiperlink za telefonski poziv (\<a href="tel:..."\>). Ovaj način obilaženja dugih tekstova maksimizira isporuku kvalitetnih poziva.  
* **Prikupljanje leadova kod složenih usluga (Sekundarni CTA):** Ukoliko korisnik istražuje kompleksnu tehnologiju kao što je implementacija cjelovitog sustava dizalice topline, izravno upućivanje preko standardnih generičkih formi izaziva osjećaj gubitka povjerenja, nesigurnosti oko očekivane cijene i odbijanja. Alternativa je preusmjeriti navedenog posjetitelja unutar dinamične kvalifikacijske višekoračne forme (Multi-step Form) koja usko segmentirano, korak-po-korak, prikuplja mikropodvrde od korisnika kroz nezahtjevna pitanja o prirodi nekretnine (broj etaža, kvadratura prostora, trenutačni način zagrijavanja). Posljednji korak prikuplja podatke za isporuku preliminarne analize. Ovi koraci značajno povećavaju ukupnu stopu konverzije i filtriraju niskokvalitetne upite iz kanala.  
* **Prikazi transparentnosti cijena i "Trust Signali":** Prema industrijskim analizama platformi za optimizaciju narudžbi (kao npr. arhitektura platforme BOXT) 18, skrivanje informacija o cijenama odbija kupce jer pospješuje strah. Strategija stoga definira pozicioniranje prepoznatljivih sidrišta cijena (Pricing Anchors) – "od 50 €", ili jasna podjela tarifa na manje zahvate. Uz cjenik i ispod svake kontaktne forme, moraju se pojaviti vizualni simboli ovlaštenja (ikone Vaillant, znakovi osiguranja i izvadci iz kvalitetnih lokalnih Google recenzija).  
* **Prikaz galerije rješenog problema:** Pozicioniranje jasnog slidera slike s izvadcima crnog radijatorskog taloga ("Prije strojne obrade") i bistrom vodom ("Poslije"), vizualno oslobađa klijenta nedoumica hoće li usluga stvarno donijeti poboljšanje.

Za potrebe optimizacije planira se uvođenje strogog nadzora ključnih metričkih pokazatelja, ne prateći samo puke prikaze sadržaja nego mjereći konkretne konverzijske *evente*: postotke započinjanja višekoračnih formi i stopu napuštanja svake stranice na različitim dionicama formulara, kvalitetu *leada* povezanog s ulaznom lokalnom stranicom, te "Click-through" na kontakt broj.

## **14\. Benchmark Findings**

Opsežna usporedna (Benchmark) analiza usmjerena je na visoko konverzijske industrijske predvodnike unutar instalacijskog tržišta kako u Europi tako i Sjedinjenim Državama (npr. prakse agencija Built-Right Digital za "HVAC emergency" industriju, te modeli rasta tehnološki osviještene instalaterske britanske tvrtke BOXT).2  
**Prakse preuzete u strategiju arhitekture:**

1. **Dizajn usmjeren isključivo na konverziju u nuždi:** Studije agencije Built-Right Digital naglašavaju ključnu ulogu ekstremno laganih verzija mobilnih stranica, gdje *Hero section* sadrži kratke tekstove i jasne dispečerske funkcionalnosti, s prepoznatljivom izrazitom "Click-to-call" arhitekturom unutar zaglavlja.2 Posljedica ovog pristupa su višestruko smanjene stope napuštanja web stranice.  
2. **Platformizacija transakcija umjesto običnog weba:** Slučaj platforme BOXT (koja dominira mrežnim planiranjem i prodajom plinskih bojlera u Velikoj Britaniji) ilustrira kako je digitalna disruptivna transformacija procesa postignuta eliminiranjem dvotjednog procesa čekanja ponude, pretačući ga u fluidnu 20-minutnu "mobilnu interakciju".21 Korisnici navigiraju vođenim putovanjem do formiranja fiksnih cijena.18 Ovaj obrazac je preuzet prilikom osmišljavanja dizajnerskog predloška za složenu uslugu "Dizalica topline".  
3. **Namjenske stranice prema specifičnom pod-zadatku usluga:** Razbijanjem generičkog indeksa poslovanja na individualne stranice namijenjene problemu i popravcima (Pillars), sustav izrazito jača mogućnosti privlačenja visokorelevantnog organskog SEO prometa za pojmove duge repice.2

**Elementi koje strategija strogo isključuje:**  
U suštini poslovanja odbačen je uobičajeni agencijski model integriranja generičkih *Stock* portreta jer je analizom potvrđeno gubljenje vjerodostojnosti te snižavanje pozicioniranja unutar pretraživačkih algoritama. Izbjegavaju se teški "Hero Slider" karuseli na vrhu jer ne donose konverzije, značajno kompromitiraju performanse renderiranja i narušavaju pristupnost uslijed pomicanja fokusa. Također, tradicionalne preduge web kontakt forme s preko 8 izravnih obaveznih cjelina uklonjene su zbog prevelike izlaznosti posjetitelja i zamijenjene spomenutim višekoračnim varijantama.

## **15\. CMS and Content Model**

Implementacija Headless CMS rješenja kroz **Payload CMS v3** sustav temeljena je na načelu neograničenog skaliranja i stvaranja dinamičkog presjeka informacija za generiranje specifičnih lokalnih ruta, a da se pritom ne stvara repetitivna i degradirajuća arhitektura sadržaja na stotinu stranica ("Thin Content").1  
Sustav definira robusne i modularne baze (Collections / Content Models) i povezuje ih strogo relacionim poljima. Preporučeni modeli unutar baze obuhvaćaju:

* **Model Usluga (Services):** Primarni relacijski repozitorij.  
  * *Polja:* title, slug, shortDescription, longContent (blokovi bogatog teksta), komponente hero vizualizacija, relacijski prikazi pripadajućih slika i najznačajnijih FAQ objekata (često postavljanih pitanja vezanih uz taj problem), strukturirana polja za SEO metapodatke i schemaType oznaku.  
* **Model Problema (Problems):** Služi presretanju korisničkog problema i upite prema usluzi.  
  * *Polja:* problemStatement, symptoms, relacijska veza sa stvarnim entitetom Services koji popravlja problem. Time se održava baza bez dupliciranja istih rješenja.  
* **Model Lokacija / Područja (Locations):** Služi dinamičkoj fuziji lokalnog sadržaja.  
  * *Polja:* cityName, postalCode, geografske koordinate područja. Iznimno važno: Pripadajući podaci specifični za lokalnu zajednicu i upečatljive izjave, prikazi intervencija localImages, i svjedočanstva iz regije koji pune automatsku strukturu te stvaraju apsolutno unikatne rezultate za posjetitelja prilikom pretrage izvan glavnog grada.17  
* **Prikaz Modela Cjenika i Certifikata:** Izdvojene, strukturirane liste koje omogućuju CMS-u dinamičko umetanje pojedinačne komponente s važećom cijenom kroz tekstualne *Rich-text* editor blokove u aplikaciji.11  
* **Model Studija Slučajeva (Case Studies / Works):** Koncipiran prvenstveno zbog validacije znanja. Zahtijeva umetanje metapodataka o zahvatu i vizualne dokaze te poveznicu s kojom Lokacijom i kojom Uslugom je povezan proces.

Razdvajanje baze i klijentskog dizajna osigurava potpunu prenosivost. Ukoliko je sutra potrebno aktivirati isti programski portal za partnersku tvrtku, svi relacijski modeli i tipovi polja samo se kloniraju u novu Payload instancu i spajaju na istu Astro *Front-end* konfiguraciju kako bi automatski stvorili gotov "Template".

## **16\. Analytics & Tracking**

Tranzicija prema naprednoj arhitekturi 2026\. godine podrazumijeva duboko prilagođavanje mjerenja konverzija ekosustavu poslovanja koje podliježe iznimnim restrikcijama web-preglednika ("cookieless" tehnologijama) te striktnoj implementaciji sigurnosti prema odredbama GDPR direktiva.16  
Slijepa ovisnost i primjena tradicionalnih praksi Google Analytics alata preko izravne klijentske komponente gubi značajan dio, često od 30% do 40%, dragocjenih podataka, zahvaljujući strogim pravilima AdBlockera i Appleovih tehnologija prevencije (ITP okruženje).16 Zbog ovoga, infrastruktura podrazumijeva uspostavljanje platforme po hibridnom modelu privatno orijentirane analitike uz serversko maskiranje (*Server-side tagging*).  
**Arhitektonski postav mjerenja i GDPR rješenje:**

1. **Platforma i udomljavanje baze:** Sustav primjenjuje instalaciju *self-hosted* instancije poput softvera Matomo ili rješenja Plausible Analytics.16 Ovime se postiže 100% legalan nadzor baze na serverima Europske unije koji izbjegavaju sporni međukontinentalni transfer na američke servere.16  
2. **Consent Mode v2 mehanizam:** Kako bi komercijalne kampanje u sklopu sustava Google AdWords i Local Service oglasa preživjele, Google Tag Manager prilagođava se izdanju V2 platforme Google Consent Mode uz instalaciju platforme za privole (CMP) sukladno zahtjevima TCF 2.2.3 To znači da integracijske skripte, kada se učitaju, zadano emitiraju signale blokiranja (ad\_storage: 'denied', analytics\_storage: 'denied', te dodatne parametre poput ad\_user\_data i ad\_personalization) sve do trenutka specifičnog i jasnog odobrenja korisnika na transparentnom baneru. Ovaj dizajn omogućava zadržavanje bitnog agregiranog prikaza volumena posjeta preko poslužiteljskog prometa ("Pings"), istovremeno poštujući pristanak i anonimnost na lokalnoj klijentskoj razini.3  
3. **Server-side Tracking Container:** Osigurano kreiranje subdomene (npr. *analytics.presura.hr*) čija je namjera prihvatiti primarne signale analitike i provući ih kroz napredne *bot* zaštitne filtere, tek poslije proslijeđujući obrađene konverzijske *evente* reklamnim platformama (API konverzije) radi očuvanja integriteta marketinškog algoritma.16  
4. **Konkretan plan praćenja i konverzijski indikatori (Event Tracking):**  
   * Klik i dodirni signal telefonskog kontakta sa sučelja pametnih telefona.  
   * Event pokretanja prvog dijela analitičke forme / Odustajanje i napuštanje od pojedinačnog koraka u naprednim formama.  
   * Stupanj prijelomnog dolaska i konzumacija stranica blogova (*Scroll Depth* interakcije).  
   * Praćenje uspješne konverzije, povezane parametrima UTM oznaka iz točno specifične izvorne platforme organskog ili plaćenog oglasnog kanala za naknadnu optimizaciju konverzijskih udjela (Lead attribution).

## **17\. MVP Scope**

Kreiranje napredne prve verzije web rješenja (Minimal Viable Product) ima za cilj implementirati snažnu strukturu, brzinsku superiornost tehnološkog okvira te stabilizirati organski i plaćeni angažman bez nepotrebnog produživanja procesa izrade uslijed tehničkog perfekcionizma sporednih detalja.  
**Što MVP obuhvaća:**

* Postavljanje stabilnog tehnološkog okvira kompiliranog u SSG formatu (Astro JS \+ Tailwind \+ osnovne instance Payload CMS administracije baze na poslužitelju).11  
* Dizajn, izrada i implementacija **glavne Početne stranice** (Fokus na usmjeravanje u usluge, E-E-A-T signale te sekciju "Zašto odabrati nas" uz primjenu brzih navigacijskih putova).  
* Kreiranje do **6 primarnih detaljnih uslužnih domena**, npr. za radijatore, Vaillant ovlaštenja, cjelokupni servis grijanja, instalaciju dizalica topline, ispiranje instalacija te probleme vezane za tretiranje i omekšavanje vode.  
* Implementacija sekcije sa stranicom "**Područje rada**", uslugom "**Upit/Cjenik**" i krovnom dometom FAQ modula s implementiranom oznakom strukture FAQPage.  
* Postavljanje od **2 do 3 probna problema** kako bi se omogućilo pokrivanje hiper-specijaliziranih "Zero-click" pretraga naravnog govora i informativnih zahtjeva te **2 do 3 inicijalne landing lokacije** radi ranog SEO prepoznavanja regije (npr. Bilje, Osijek).1  
* Integracija potpuno konfiguriranog CTA "Sticky" sustava po standardima mobilne tehnologije, bazični sigurnosni moduli uz *Honeypot*/Turnstile mehanizme na stranici forme.  
* Aktivacija privatnog analitičkog modela, strukturiranih podataka entiteta (Schema Markup za tvrtku) i optimizacijske jezgre slika u modernom prikazu formata WebP.

**Što se izostavlja iz faze MVP-a i zašto:**  
Rana arhitektura sustava odgađa razvoj složenih funkcionalnosti napredne API povezanosti s eksternim administrativnim softverom CRM sustava i kompliciranim sustavima za A/B multivarijatno testiranje konverzije. Također se prolongira stvaranje masivnog automatiziranog rasta stotina regijskih stranica dok se algoritmi tražilica ne sinkroniziraju sa svježim E-E-A-T modelom povjerenja, smanjujući time inicijalni pritisak i rizik prekomjerne kanibalizacije SEO ranga.  
**Kriteriji prihvaćanja isporuke (Acceptance Criteria):**  
Platforma mora ispuniti preporuke unutar savršenog prolaznog 100/100 koeficijenta prema sintetičkim standardima alata Google Lighthouse mjerenja. Forma za prikupljanje kontakata mora obraditi i isporučiti podatke iz domene tvrtke pod odgovarajućim antispam normama, prepoznatljivim testnim kanalima za pristupačnost uz apsolutni izostanak tehničkih prijavljenih preklapanja prema postavkama WCAG 2.2 na desktop pregledu.

## **18\. Phase 2 Roadmap**

Strateški nacrt procesa u periodu od šest mjeseci do godine dana po pokretanju MVP infrastrukture nadograđuje sustav u punokrvnu iteracijsku *lead-generation* mašinu. Ovaj razvoj usmjeren je primarno prema hiper-lokaliziranoj organskoj penetraciji tržišta.

* **Mjesec 1 – 3: Izgradnja lokalnog povjerenja:** Razrada modula unutar sustava CMS koji se fokusira na masovno prikupljanje studija pojedinih završenih zahvata (Radovi). Planira se izravna automatizacija objava na stranicama i strukturiranje galerija prije i poslije slika, sinkronizacija istih sa objavama lokalnog Google Business profila. Objavljivanje dubinskog i obimnijeg sadržaja oko specifičnih *Problem-based* landing dionica te integracija poveznica s recenzijama koje su dobivene kroz Google platformu uz mogućnost uvođenja anonimnih verifikacija korisnika sukladno aktualnim trendovima sigurnosti identiteta.1  
* **Mjesec 4 – 6: Okomito SEO skaliranje i Povećanje Konverzije:** Pokretanje skripte zadužene za programatsku generaciju mnoštva dodatnih regionalnih landing područja na kojima tvrtka efikasno upravlja poslom bez rizika od tzv. tankog sadržaja spomenutih modula Lokacija.17 Optimizacija mehanizma napredne forme i testiranje uvođenja višekoračnog dinamičkog konfiguratora s pitanjima i kvalifikatorima *leada* za sustav i ponudu "Dizalica topline". Mjerenje mikrokonverzije iz padova pretraživanja unutar analitike.  
* **Mjesec 7 – 12: Uvećanje arhitekture za više klijenata (B2B Template model):** Tehnološki tim konsolidira globalne predloške front-end strukture. Dizajn sustav i prilagodba prepoznaju specifične vizualne varijable iz Tailwind CSS okvira koje je potrebno prilagoditi te time pripremaju stabilan gotovi proizvod/platformu koji se može bezbolno duplicirati. Ista infrastruktura za tvrtku u Dalmaciji s novim domenama, uz minimalne troškove implementacije i izrazitu brzinu postavljanja (*Time-to-market*).

## **19\. Risks & Trade-offs**

Implementacija rješenja unutar moderne arhitektonske strukture zahtijeva svijest o prisutnim rizicima te spremne sigurnosne alternative.

1. **Potencijalna tehnička kompleksnost Stacka naspram tradicionalnih praksi:** Odabir strukture kao što su Astro i Payload CMS generira visoku tehnološku izvrsnost, no povlači nužnost stručnog inženjerskog razvojnog okvira. Netehnički korisnik više se ne može osloniti na instalaciju brzinskog prilagođenog rješenja kroz klikanje besplatnih "Dodataka" kao na WordPress platformi.  
   * *Ublažavanje rizika:* Izrađuje se jasna baza strukturiranih i zaštićenih modula komponenti s propisanim postavkama u platformi baze. Klijent upravlja samo tekstovima i slikama koje ulaze u zadane kalupe za stranicu kroz jednostavan i izoliran Payload administratorski sustav.11  
2. **Rizici kod generiranja lokalnog sadržaja ("Thin pages"):** Automatizacija postupka proizvodnje hiperlokalnog dometa povećava vjerojatnost detektiranja algoritamskog kažnjavanja pretraživača zbog masovne proizvodnje vrlo sličnog niza fraza za stotine regija.  
   * *Ublažavanje rizika:* Arhitektura podataka je programirana sa ciljem da zabranjuje automatsku izradu takvih lokacija bez prisutnosti dodatnih dubinskih informacija, relevantnih geografskih točaka, koordinata i jedinstvenih izjava/komentara usko lokaliziranog klijenta iz regije koja stvara stvarni unikatni semantički signal.1  
3. **Generički AI sadržaj i izostanak specifičnog povjerenja:** Laka produkcija mrežnog edukativnog sadržaja pomoću umjetne inteligencije rezultira razočaravajućim konverzijama posjetitelja, narušava E-E-A-T reputaciju stručne inženjerske tvrtke.1  
   * *Ublažavanje rizika:* Zabranjuje se objava tehničkih elaborata bez ljudskog zahvata. Objava mora poslužiti kao kalup unutar kojeg stručnjak tvrtke, s biografijom autora objave (Author schema i Byline), unosi suštinsku provjeru iz stvarnih rješavanja instalacija, dodavanjem zbiljskih iznosa intervencije te pravih nestiliziranih mobilnih i radnih fotografija tvrtke.1  
4. **GDPR propusti i zlouporaba marketinških alata:** Loša postavka kolačića dovodi pred rizik inspekcijske kazne.  
   * *Ublažavanje rizika:* Primijenjen je isključiv pristup bez ikakvog pred-definiranog prijenosa marketinških signala u pregledniku prije nedvojbenog privolnog koraka instaliranim V2 CMP postavkama s Google Consent okvirom i zadržavanjem na razini vlastitog podatkovnog servera (*Server-side tracking*).3

## **20\. Developer Handoff Checklist**

Popis kontrolnih elemenata koji propisuju pravilan prijenos razvojnog sustava tehničkoj struci:  
**Postavljanje repozitorija i platforme za posluživanje:**

* \[ \] Inicijaliziranje pnpm monorepozitorijskih okruženja uz postavljanje Node okvira s integriranim modulom za Payload CMS instalaciju verzije 3.0 te *Astro.js* projekt s Tailwind CSS v4 podrškom.11  
* \[ \] Podizanje radnog prostora okruženja lokalne baze MongoDB te prijenos parametarskih .env okruženja za rad preko klijentskih i administrativnih okvira bez narušavanja preklapanja vrijednosti.11  
* \[ \] Priprema postavki sustava za preuzimanje SSG isporuka koda na infrastrukturni "Edge" mrežni okvir kao što je platforma Vercel uz osiguravanje rutinskog osvježavanja procesa aplikacije putem ISR i "Webhooks" okidača promjena stanja CMS-a.14

**Programiranje entiteta i SEO shema metadataka:**

* \[ \] Programiranje funkcije automatskog generiranja izvoza unificirane JSON-LD strukture na krovnu rutu \<head\> tagova s pod-prikazom specijalizirane HVACBusiness te spojenih Service instanci koje klijent lako dodaje u administraciji.19  
* \[ \] Povezivanje generiranih polja Lokacije i integracija geografskih pozicija za obavijesne sustave te dinamička poveznica svake lokacije s uslugama na stablo lokalne sitemap komponente.1

**Implementacija pristupačnosti i konverzija (WCAG 2.2 / UX):**

* \[ \] Izvršenje integracijskih promjena i nadzora veličina meta za klijentske uređaje iznad predloženih 44x44 dimenzija, konfiguracija CVA Tailwind elemenata gumba, postavljanje i potvrđivanje strogog :focus-visible obrisa bez blokiranja kretnje tipkovnicom nad obavijesnom CSS trakom.4  
* \[ \] Programiranje obveznog uvođenja nevidljivog skrivenog formata "Honeypot" obrasca na frontendu formata, i uklanjanje vizualnih provjernih mehanizama (zastarjele reCAPTCHA tehnologije) koji ometaju pristup s uvođenjem brzih Cloudflare Turnstile pravila pozadinske provjere.

## **21\. Final Recommendation**

Da sam principal architect na ovom projektu, gradio bih vrhunski asinkroni sustav implementiran unutar prezentacijskog predloška izgrađenog tehnologijama Astro frameworka i Tailwind CSS-a te usmjeren isključivo za mobilnu "Edge" konverziju. Kao centralno čvorište pouzdanog sustava baze za nestrukturirano klijentsko znanje integrirao bih Payload CMS verzije 3 kroz Headless arhitekturu. Kreirao bih modularnu strukturu stabla URL-ova primarno usmjerenu ka problemskim točkama korisnika te usko povezanom, geografski profiliranom generiranju entiteta usluga po regijama koje eliminira duplicirani sadržaj injekcijama jedinstvenih recenzija, koordinatora i fotografija prije i poslije svakog lokalnog mjesta. Cijeli sustav MVP iteracije i izrade izveo bih prema navedenom minimalnom obuhvatu s prioritetom uspostavljanja glavnih konverzijskih obrazaca i osnova pristupačnosti sustava unutar tjedan dana od početka rada, a tek poslije automatizirao izgradnju lokacija i CRM usavršavanja kako bih osigurao beskompromisno brzo osvajanje "Zero-click" pretraga naravnog govora i organskih plasiranja, maksimalno štiteći privatnost korisnika serverskom analitikom.

#### **Works cited**

1. 18 Local SEO Mistakes Killing Your Rankings in 2026 (And How to ..., accessed May 29, 2026, [https://www.connecticallc.com/local-seo-mistakes/](https://www.connecticallc.com/local-seo-mistakes/)  
2. 8 Best HVAC Web Design Agencies to Book More Calls, accessed May 29, 2026, [https://builtrightdigital.com/best-hvac-web-design-agencies/](https://builtrightdigital.com/best-hvac-web-design-agencies/)  
3. Google Consent Mode V2 Setup Guide (2026) | CookieHub CMP, accessed May 29, 2026, [https://www.cookiehub.com/blog/google-consent-mode-v2-setup-gtm-guide](https://www.cookiehub.com/blog/google-consent-mode-v2-setup-gtm-guide)  
4. WCAG 2.2 | What's new & how it improves web accessibility, accessed May 29, 2026, [https://www.wcag.com/blog/wcag-2-2-aa-summary-and-checklist-for-website-owners/](https://www.wcag.com/blog/wcag-2-2-aa-summary-and-checklist-for-website-owners/)  
5. HVAC Website Design: The Complete Guide for Contractors in 2026 ..., accessed May 29, 2026, [https://www.nopio.com/blog/hvac-website-design/](https://www.nopio.com/blog/hvac-website-design/)  
6. Headless WordPress & Astro | Docs, accessed May 29, 2026, [https://docs.astro.build/en/guides/cms/wordpress/](https://docs.astro.build/en/guides/cms/wordpress/)  
7. Astro vs Next.js (2026): Pros, Cons & Popularity Compared | Senorit, accessed May 29, 2026, [https://senorit.de/en/blog/astro-vs-nextjs-2025](https://senorit.de/en/blog/astro-vs-nextjs-2025)  
8. Astro vs Next.js: Which Framework Should You Use in 2026? \- Cosmic JS, accessed May 29, 2026, [https://www.cosmicjs.com/blog/astro-vs-nextjs-2026](https://www.cosmicjs.com/blog/astro-vs-nextjs-2026)  
9. Astro in 2026: Why It's Beating Next.js for Content Sites (And What Cloudflare's Acquisition Means) \- DEV Community, accessed May 29, 2026, [https://dev.to/polliog/astro-in-2026-why-its-beating-nextjs-for-content-sites-and-what-cloudflares-acquisition-means-6kl](https://dev.to/polliog/astro-in-2026-why-its-beating-nextjs-for-content-sites-and-what-cloudflares-acquisition-means-6kl)  
10. Payload CMS & Astro | Docs, accessed May 29, 2026, [https://docs.astro.build/en/guides/cms/payload/](https://docs.astro.build/en/guides/cms/payload/)  
11. CLAUDE.md \- jhb-software/payload-astro-website-template \- GitHub, accessed May 29, 2026, [https://github.com/jhb-software/payload-astro-website-template/blob/main/CLAUDE.md](https://github.com/jhb-software/payload-astro-website-template/blob/main/CLAUDE.md)  
12. Best Next.js Alternatives (2026): Remix, Astro, SvelteKit & More \- Naturaily, accessed May 29, 2026, [https://naturaily.com/blog/best-nextjs-alternatives](https://naturaily.com/blog/best-nextjs-alternatives)  
13. PayloadCMS \+ AstroJS, the killer marketing site combo of 2025? \- Makers Den, accessed May 29, 2026, [https://makersden.io/blog/is-payloadcms-with-astros-the-killer-marketing-site-combo-of-2025](https://makersden.io/blog/is-payloadcms-with-astros-the-killer-marketing-site-combo-of-2025)  
14. jhb-software/payload-astro-website-template: A fully ... \- GitHub, accessed May 29, 2026, [https://github.com/jhb-software/payload-astro-website-template](https://github.com/jhb-software/payload-astro-website-template)  
15. The 9 best GDPR-compliant analytics tools \- PostHog, accessed May 29, 2026, [https://posthog.com/blog/best-gdpr-compliant-analytics-tools](https://posthog.com/blog/best-gdpr-compliant-analytics-tools)  
16. Best privacy-friendly analytics 2026 | DataCops, accessed May 29, 2026, [https://www.joindatacops.com/resources/best-privacy-friendly-analytics-2026/](https://www.joindatacops.com/resources/best-privacy-friendly-analytics-2026/)  
17. Local SEO in 2026: How Local Businesses Win in Search | emfluence Digital Marketing, accessed May 29, 2026, [https://emfluence.com/blog/local-seo-in-2026-how-local-businesses-win-in-search](https://emfluence.com/blog/local-seo-in-2026-how-local-businesses-win-in-search)  
18. Boxt – Hub.MyBoiler.com, accessed May 29, 2026, [https://hub.arated.com/boxt/](https://hub.arated.com/boxt/)  
19. Local Business Schema Markup: 2026 Ultimate Guide \- Zumeirah, accessed May 29, 2026, [https://zumeirah.com/local-business-schema-markup-2026-ultimate-guide/](https://zumeirah.com/local-business-schema-markup-2026-ultimate-guide/)  
20. HVACBusiness \- Schema.org Type, accessed May 29, 2026, [https://schema.org/HVACBusiness](https://schema.org/HVACBusiness)  
21. 2018 winner, Boxt, new brand \- case study | The Marketing Society, accessed May 29, 2026, [https://www.marketingsociety.com/the-library/2018-winner-boxt-new-brand-case-study](https://www.marketingsociety.com/the-library/2018-winner-boxt-new-brand-case-study)  
22. Routing \- Astro Docs, accessed May 29, 2026, [https://docs.astro.build/en/guides/routing/](https://docs.astro.build/en/guides/routing/)  
23. Plausible Analytics | Simple, privacy-friendly Google Analytics alternative, accessed May 29, 2026, [https://plausible.io/](https://plausible.io/)