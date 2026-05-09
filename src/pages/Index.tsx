import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_SAND = "https://cdn.poehali.dev/projects/b45ef94b-f17a-4771-a9f6-b1fbbe569b1d/files/847d21e0-b9c9-4d6a-96c1-805cfe0175fd.jpg";
const IMG_WOOD = "https://cdn.poehali.dev/projects/b45ef94b-f17a-4771-a9f6-b1fbbe569b1d/files/90f70542-ba58-49dc-8a60-d3799bd7e816.jpg";
const IMG_TREE = "https://cdn.poehali.dev/projects/b45ef94b-f17a-4771-a9f6-b1fbbe569b1d/files/ca227e70-9d47-424a-b9b9-31e974ba6812.jpg";

type IconName =
  | "Phone" | "Mail" | "MapPin" | "Menu" | "X" | "Truck" | "Package"
  | "TreePine" | "Shovel" | "Home" | "ChevronDown" | "CheckCircle"
  | "Star" | "Clock" | "Shield" | "Warehouse" | "Hammer" | "Leaf";

const NAV_LINKS = [
  { href: "services", label: "Услуги" },
  { href: "catalog", label: "Продукция" },
  { href: "calc", label: "Калькулятор" },
  { href: "about", label: "О компании" },
  { href: "contacts", label: "Контакты" },
];

const SERVICES: { icon: IconName; title: string; desc: string; color: string }[] = [
  {
    icon: "Package",
    title: "Белый песок в мешках",
    desc: "Мешки по 50 кг. Речной белый песок высшего качества для детских песочниц, строительства и ландшафта.",
    color: "hsl(43 90% 56%)",
  },
  {
    icon: "Truck",
    title: "Сыпучие грузы навалом",
    desc: "Доставка песка, щебня, гравия, чернозёма по Челябинску и области. Самосвалы от 5 до 20 тонн.",
    color: "hsl(28 85% 48%)",
  },
  {
    icon: "Hammer",
    title: "Деревянные изделия",
    desc: "Производство детских песочниц, веранд и домиков из натуральной сосны. Под заказ и со склада.",
    color: "hsl(25 45% 40%)",
  },
  {
    icon: "TreePine",
    title: "Спил аварийных деревьев",
    desc: "Профессиональный спил и вывоз аварийных, сухих и опасных деревьев. Работаем по всему Челябинску.",
    color: "hsl(140 40% 38%)",
  },
];

const PRODUCTS = [
  { name: "Белый речной песок", unit: "мешок 50 кг", price: "от 350 ₽", emoji: "🪣", tag: "Хит продаж" },
  { name: "Песок навалом", unit: "от 1 тонны", price: "от 800 ₽/т", emoji: "🚛", tag: null },
  { name: "Щебень фракции 5–20", unit: "навалом / мешки", price: "от 1 200 ₽/т", emoji: "🪨", tag: null },
  { name: "Чернозём", unit: "навалом", price: "от 900 ₽/т", emoji: "🌱", tag: "Популярно" },
  { name: "Детская песочница", unit: "размер 1,5×1,5 м", price: "от 4 900 ₽", emoji: "🏗️", tag: "Под заказ" },
  { name: "Детский домик", unit: "сосна, покраска", price: "от 24 000 ₽", emoji: "🏡", tag: "Под заказ" },
  { name: "Веранда деревянная", unit: "проект индивидуально", price: "от 45 000 ₽", emoji: "🪵", tag: null },
  { name: "Спил дерева", unit: "за единицу", price: "от 1 500 ₽", emoji: "🌳", tag: "Срочно" },
];

const REVIEWS = [
  { name: "Максим Д.", stars: 5, text: "Заказывали 10 мешков белого песка для детской площадки. Привезли в тот же день, качество отличное — чистый, без мусора. Дети довольны!" },
  { name: "Ирина К.", stars: 5, text: "Делали деревянную песочницу под заказ. Сделали быстро, покрасили, установили. Выглядит на 5+. Рекомендую всем с детьми!" },
  { name: "Андрей Л.", stars: 5, text: "Вызывали на спил большого тополя. Приехали вовремя, спилили аккуратно, всё убрали. Цена адекватная. Буду обращаться ещё." },
  { name: "Светлана Н.", stars: 4, text: "Привезли самосвал щебня. Выгрузили точно куда просила. Единственное — чуть дольше ждала чем ожидала, но результатом довольна." },
];

const SAND_PRICE = 350;
const BULK_PRICE = 800;

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bags, setBags] = useState(10);
  const [bulk, setBulk] = useState(5);
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "" });
  const [sent, setSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[hsl(30_15%_97%)]">

      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-50 bg-[hsl(210_20%_14%)] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[hsl(28_85%_48%)] flex items-center justify-center text-white font-mont font-black text-sm">74</div>
            <div>
              <div className="text-white font-mont font-bold text-base leading-none">СтройПесок</div>
              <div className="text-[hsl(43_90%_56%)] text-xs font-mont font-semibold">Челябинск</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors font-mont"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+73512000000" className="flex items-center gap-2 text-white font-mont font-semibold text-sm">
              <Icon name="Phone" size={15} className="text-[hsl(43_90%_56%)]" />
              +7 (351) 200-00-00
            </a>
            <button className="btn-primary px-5 py-2 rounded-lg text-sm" onClick={() => scrollTo("contacts")}>
              Заказать
            </button>
          </div>

          <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[hsl(210_20%_10%)] px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-white/80 font-mont text-sm py-1.5">
                {l.label}
              </button>
            ))}
            <a href="tel:+73512000000" className="text-[hsl(43_90%_56%)] font-mont font-bold text-base pt-1">
              +7 (351) 200-00-00
            </a>
          </div>
        )}
      </header>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative overflow-hidden bg-[hsl(210_20%_14%)] min-h-[92vh] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMG_SAND})`,
            opacity: 0.18,
          }}
        />
        {/* Diagonal stripe overlay */}
        <div className="absolute inset-0"
          style={{
            background: "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 80px)"
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-3xl anim-up">
            <div className="inline-flex items-center gap-2 bg-[hsl(28_85%_48%)]/20 border border-[hsl(28_85%_48%)]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(43_90%_56%)] animate-pulse"></span>
              <span className="text-[hsl(43_90%_56%)] text-sm font-mont font-semibold">Работаем по Челябинску и области</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-6 font-mont">
              Белый песок.<br />
              <span className="text-[hsl(43_90%_56%)]">Доставка.</span><br />
              Деревянные<br />
              <span style={{ color: "hsl(28 85% 60%)" }}>изделия.</span>
            </h1>

            <p className="text-white/60 text-lg mb-8 max-w-xl leading-relaxed">
              Мешки 50 кг и навал — щебень, песок, чернозём. Детские песочницы, домики, веранды из сосны. Спил аварийных деревьев.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="btn-primary px-8 py-4 rounded-xl text-base" onClick={() => scrollTo("contacts")}>
                Оставить заявку
              </button>
              <button className="btn-outline-white px-8 py-4 rounded-xl text-base" onClick={() => scrollTo("calc")}>
                Рассчитать стоимость
              </button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 anim-up delay-3">
            {[
              ["8 лет", "на рынке"],
              ["2 000+", "довольных клиентов"],
              ["В тот же день", "доставка"],
              ["Собственный", "автопарк"],
            ].map(([n, l]) => (
              <div key={n} className="bg-white/5 border border-white/10 rounded-xl px-4 py-4">
                <div className="text-[hsl(43_90%_56%)] font-mont font-black text-xl">{n}</div>
                <div className="text-white/50 text-sm mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-[hsl(28_85%_48%)] font-mont font-bold text-sm uppercase tracking-widest mb-2">Что мы делаем</p>
            <h2 className="text-4xl font-black text-[hsl(210_20%_14%)] font-mont">Наши услуги</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="bg-[hsl(30_15%_97%)] rounded-2xl p-6 card-lift cursor-pointer anim-up border border-[hsl(30_15%_90%)]"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: s.color + "22" }}
                >
                  <Icon name={s.icon} size={22} style={{ color: s.color }} />
                </div>
                <h3 className="font-mont font-bold text-base text-[hsl(210_20%_14%)] mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-[hsl(25_10%_45%)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CATALOG ═══ */}
      <section id="catalog" className="py-20 bg-[hsl(30_15%_97%)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-[hsl(28_85%_48%)] font-mont font-bold text-sm uppercase tracking-widest mb-2">Цены и наличие</p>
            <h2 className="text-4xl font-black text-[hsl(210_20%_14%)] font-mont">Прайс-лист</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((p, i) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-5 card-lift border border-[hsl(30_15%_90%)] anim-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="text-4xl mb-3">{p.emoji}</div>
                {p.tag && (
                  <span className="inline-block text-xs font-bold font-mont px-2.5 py-0.5 rounded-full bg-[hsl(28_85%_48%)] text-white mb-2">
                    {p.tag}
                  </span>
                )}
                <h4 className="font-mont font-bold text-[hsl(210_20%_14%)] text-sm leading-snug mb-1">{p.name}</h4>
                <p className="text-xs text-[hsl(25_10%_50%)] mb-3">{p.unit}</p>
                <p className="font-mont font-black text-lg text-[hsl(28_85%_48%)]">{p.price}</p>
                <button
                  className="mt-3 w-full py-2 rounded-lg text-xs font-mont font-bold transition-colors"
                  style={{ backgroundColor: "hsl(30 15% 93%)", color: "hsl(210 20% 20%)" }}
                  onClick={() => scrollTo("contacts")}
                >
                  Заказать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CALCULATOR ═══ */}
      <section id="calc" className="py-20 bg-[hsl(210_20%_14%)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="text-[hsl(43_90%_56%)] font-mont font-bold text-sm uppercase tracking-widest mb-2">Быстро и удобно</p>
            <h2 className="text-4xl font-black text-white font-mont">Калькулятор стоимости</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bags calc */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-mont font-bold text-white text-lg mb-1">🪣 Песок в мешках</h3>
              <p className="text-white/40 text-sm mb-6">Мешок 50 кг — {SAND_PRICE} ₽</p>

              <label className="text-white/60 text-sm font-mont font-semibold block mb-2">Количество мешков: <span className="text-[hsl(43_90%_56%)]">{bags} шт.</span></label>
              <input
                type="range"
                min={1} max={500} value={bags}
                onChange={e => setBags(Number(e.target.value))}
                className="w-full mb-6 accent-[hsl(28_85%_48%)]"
              />

              <div className="bg-white/5 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <div className="text-white/50 text-sm">Итого:</div>
                  <div className="text-white font-mont font-black text-2xl">{(bags * SAND_PRICE).toLocaleString("ru")} ₽</div>
                </div>
                <div className="text-right">
                  <div className="text-white/50 text-sm">Вес:</div>
                  <div className="text-[hsl(43_90%_56%)] font-mont font-bold text-lg">{(bags * 50).toLocaleString("ru")} кг</div>
                </div>
              </div>
            </div>

            {/* Bulk calc */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-mont font-bold text-white text-lg mb-1">🚛 Навалом</h3>
              <p className="text-white/40 text-sm mb-6">Тонна — от {BULK_PRICE} ₽</p>

              <label className="text-white/60 text-sm font-mont font-semibold block mb-2">Объём: <span className="text-[hsl(43_90%_56%)]">{bulk} тонн</span></label>
              <input
                type="range"
                min={1} max={50} value={bulk}
                onChange={e => setBulk(Number(e.target.value))}
                className="w-full mb-6 accent-[hsl(28_85%_48%)]"
              />

              <div className="bg-white/5 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <div className="text-white/50 text-sm">Итого:</div>
                  <div className="text-white font-mont font-black text-2xl">{(bulk * BULK_PRICE).toLocaleString("ru")} ₽</div>
                </div>
                <div className="text-right">
                  <div className="text-white/50 text-sm">Объём:</div>
                  <div className="text-[hsl(43_90%_56%)] font-mont font-bold text-lg">{bulk} т</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-white/30 text-sm mt-6">* Точная стоимость с учётом доставки рассчитывается индивидуально</p>

          <div className="text-center mt-6">
            <button className="btn-primary px-10 py-4 rounded-xl text-base" onClick={() => scrollTo("contacts")}>
              Получить точный расчёт
            </button>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-[hsl(28_85%_48%)] font-mont font-bold text-sm uppercase tracking-widest mb-2">Наши работы</p>
            <h2 className="text-4xl font-black text-[hsl(210_20%_14%)] font-mont">Фотогалерея</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: IMG_SAND, label: "Песок и сыпучие грузы" },
              { img: IMG_WOOD, label: "Деревянные изделия" },
              { img: IMG_TREE, label: "Спил деревьев" },
            ].map(item => (
              <div key={item.label} className="relative rounded-2xl overflow-hidden group card-lift">
                <img src={item.img} alt={item.label} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-mont font-bold text-base">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-20 bg-[hsl(30_15%_97%)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[hsl(28_85%_48%)] font-mont font-bold text-sm uppercase tracking-widest mb-2">О нас</p>
              <h2 className="text-4xl font-black text-[hsl(210_20%_14%)] font-mont mb-5 leading-snug">
                Надёжный поставщик<br />для Урала
              </h2>
              <p className="text-[hsl(25_10%_40%)] leading-relaxed mb-4">
                С 2016 года мы поставляем сыпучие материалы и производим деревянные изделия для жителей Челябинска и всей Челябинской области. Собственный автопарк позволяет обеспечивать быструю доставку.
              </p>
              <p className="text-[hsl(25_10%_40%)] leading-relaxed mb-8">
                Работаем с частными заказчиками, строительными компаниями, детскими садами и школами. Все материалы сертифицированы и соответствуют ГОСТу.
              </p>

              <div className="space-y-3">
                {[
                  "Сертифицированный белый речной песок",
                  "Собственные самосвалы — без посредников",
                  "Производство деревянных изделий в Челябинске",
                  "Спил деревьев с вывозом и уборкой",
                  "Работаем с юр. лицами и физ. лицами",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={18} className="text-[hsl(28_85%_48%)] flex-shrink-0" />
                    <span className="text-sm text-[hsl(25_10%_35%)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "8+", l: "лет опыта" },
                { n: "2 000+", l: "выполненных заказов" },
                { n: "15", l: "единиц техники" },
                { n: "24/7", l: "приём заявок" },
              ].map(({ n, l }) => (
                <div key={n} className="bg-white rounded-2xl p-6 text-center border border-[hsl(30_15%_90%)] card-lift">
                  <div className="text-3xl font-mont font-black text-[hsl(28_85%_48%)] mb-1">{n}</div>
                  <div className="text-sm text-[hsl(25_10%_50%)]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-[hsl(28_85%_48%)] font-mont font-bold text-sm uppercase tracking-widest mb-2">Отзывы</p>
            <h2 className="text-4xl font-black text-[hsl(210_20%_14%)] font-mont">Нам доверяют</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-[hsl(30_15%_97%)] rounded-2xl p-5 border border-[hsl(30_15%_90%)] card-lift anim-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-[hsl(43_90%_56%)] text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-[hsl(25_10%_35%)] leading-relaxed mb-4">«{r.text}»</p>
                <p className="font-mont font-bold text-sm text-[hsl(210_20%_20%)]">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACTS ═══ */}
      <section id="contacts" className="py-20 bg-[hsl(30_15%_97%)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-[hsl(28_85%_48%)] font-mont font-bold text-sm uppercase tracking-widest mb-2">Связаться</p>
            <h2 className="text-4xl font-black text-[hsl(210_20%_14%)] font-mont">Оставьте заявку</h2>
            <p className="text-[hsl(25_10%_45%)] mt-3">Перезвоним в течение 15 минут и рассчитаем стоимость</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contacts info */}
            <div className="space-y-5">
              {[
                { icon: "Phone" as IconName, label: "Телефон", value: "+7 (351) 200-00-00", sub: "Пн–Вс 8:00–20:00" },
                { icon: "Mail" as IconName, label: "Email", value: "info@stroypesok74.ru", sub: "Ответим быстро" },
                { icon: "MapPin" as IconName, label: "Адрес", value: "г. Челябинск", sub: "Работаем по всей области" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[hsl(30_15%_90%)]">
                  <div className="w-11 h-11 rounded-xl bg-[hsl(28_85%_48%)] flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[hsl(25_10%_50%)] font-mont font-semibold uppercase tracking-wide">{item.label}</div>
                    <div className="font-mont font-bold text-[hsl(210_20%_14%)] text-sm">{item.value}</div>
                    <div className="text-xs text-[hsl(25_10%_55%)]">{item.sub}</div>
                  </div>
                </div>
              ))}

              <div className="bg-[hsl(28_85%_48%)] rounded-2xl p-5 text-white">
                <div className="font-mont font-black text-lg mb-1">Срочный вызов</div>
                <p className="text-white/70 text-sm mb-3">Спил аварийных деревьев, экстренная доставка — работаем в выходные</p>
                <a href="tel:+73512000000" className="inline-flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2.5 font-mont font-bold text-sm hover:bg-white/25 transition-colors">
                  <Icon name="Phone" size={15} />
                  Позвонить сейчас
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 border border-[hsl(30_15%_90%)] shadow-sm">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[hsl(28_85%_48%)] flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={30} className="text-white" />
                  </div>
                  <h3 className="font-mont font-black text-xl text-[hsl(210_20%_14%)] mb-2">Заявка отправлена!</h3>
                  <p className="text-[hsl(25_10%_45%)] text-sm">Перезвоним вам в течение 15 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-mont font-bold text-[hsl(210_20%_14%)] text-lg mb-4">Оставить заявку</h3>

                  <div>
                    <label className="text-sm font-mont font-semibold text-[hsl(25_10%_35%)] block mb-1.5">Ваше имя *</label>
                    <input
                      required type="text" placeholder="Иван Петров"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:border-[hsl(28_85%_48%)] transition-colors"
                      style={{ borderColor: "hsl(30 15% 85%)" }}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-mont font-semibold text-[hsl(25_10%_35%)] block mb-1.5">Телефон *</label>
                    <input
                      required type="tel" placeholder="+7 (351) ___-__-__"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:border-[hsl(28_85%_48%)] transition-colors"
                      style={{ borderColor: "hsl(30 15% 85%)" }}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-mont font-semibold text-[hsl(25_10%_35%)] block mb-1.5">Услуга</label>
                    <select
                      value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:border-[hsl(28_85%_48%)] transition-colors bg-white"
                      style={{ borderColor: "hsl(30 15% 85%)", color: form.service ? "hsl(210 20% 14%)" : "hsl(25 10% 55%)" }}
                    >
                      <option value="">Выберите услугу...</option>
                      <option>Белый песок в мешках</option>
                      <option>Сыпучие грузы навалом</option>
                      <option>Детская песочница</option>
                      <option>Деревянный домик / веранда</option>
                      <option>Спил деревьев</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-mont font-semibold text-[hsl(25_10%_35%)] block mb-1.5">Комментарий</label>
                    <textarea
                      placeholder="Опишите ваш заказ: объём, адрес доставки..."
                      rows={3} value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:border-[hsl(28_85%_48%)] transition-colors resize-none"
                      style={{ borderColor: "hsl(30 15% 85%)" }}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5 rounded-xl text-base">
                    Отправить заявку
                  </button>
                  <p className="text-xs text-center text-[hsl(25_10%_55%)]">Нажимая кнопку, вы соглашаетесь с политикой обработки данных</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[hsl(210_20%_10%)] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[hsl(28_85%_48%)] flex items-center justify-center font-mont font-black text-sm">74</div>
              <div>
                <div className="font-mont font-bold">СтройПесок</div>
                <div className="text-[hsl(43_90%_56%)] text-xs font-mont">Челябинск и область</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
              {NAV_LINKS.map(l => (
                <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm text-white/50 hover:text-white transition-colors font-mont">
                  {l.label}
                </button>
              ))}
            </div>
            <div className="text-white/30 text-sm font-mont">© 2025 СтройПесок74</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
