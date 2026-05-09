import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_SAND = "https://cdn.poehali.dev/projects/b45ef94b-f17a-4771-a9f6-b1fbbe569b1d/files/a3e1989c-ad69-48cb-8a90-4738197e15d3.jpg";
const IMG_WOOD = "https://cdn.poehali.dev/projects/b45ef94b-f17a-4771-a9f6-b1fbbe569b1d/files/be4b05c5-02be-41ab-b528-ecf933e1db63.jpg";
const IMG_TRUCK = "https://cdn.poehali.dev/projects/b45ef94b-f17a-4771-a9f6-b1fbbe569b1d/files/6b1c0c5b-ba18-44a5-a9d2-b6b54980be2a.jpg";

/* ─── palette shortcuts ─── */
const BLUE = "hsl(210 80% 38%)";
const AMBER = "hsl(38 85% 52%)";
const DARK = "hsl(220 25% 12%)";

/* ─── nav ─── */
const NAV = [
  { id: "services", label: "Услуги" },
  { id: "sand", label: "Песок" },
  { id: "bulk", label: "Сыпучие" },
  { id: "wood", label: "Деревянные изделия" },
  { id: "trees", label: "Спил деревьев" },
  { id: "contacts", label: "Контакты" },
];

/* ─── services overview ─── */
const SERVICES = [
  {
    emoji: "🪣",
    title: "Белый песок в мешках",
    sub: "50 кг / мешок",
    desc: "Чистый речной белый песок для детских песочниц в садах, школах, дворах. Без примесей, сертифицирован.",
    color: BLUE,
    bg: "hsl(210 80% 38% / 0.08)",
    id: "sand",
  },
  {
    emoji: "🚛",
    title: "Сыпучие грузы навалом",
    sub: "Самосвалы от 5 до 20 т",
    desc: "Доставка песка, щебня, гравия, ПГС, чернозёма по Челябинску и всей области. Быстро и в срок.",
    color: AMBER,
    bg: "hsl(38 85% 52% / 0.08)",
    id: "bulk",
  },
  {
    emoji: "🏡",
    title: "Деревянные изделия",
    sub: "Сосна, покраска, монтаж",
    desc: "Производство детских песочниц, домиков и веранд из натуральной сосны. Под заказ и в наличии.",
    color: "hsl(25 55% 38%)",
    bg: "hsl(25 55% 38% / 0.08)",
    id: "wood",
  },
  {
    emoji: "🌳",
    title: "Спил аварийных деревьев",
    sub: "С вывозом и уборкой",
    desc: "Профессиональный спил и вывоз аварийных, сухостойных и опасных деревьев по Челябинску.",
    color: "hsl(140 45% 33%)",
    bg: "hsl(140 45% 33% / 0.08)",
    id: "trees",
  },
];

/* ─── sand products ─── */
const SAND_PRODUCTS = [
  { name: "Белый речной песок", qty: "1 мешок × 50 кг", price: "350 ₽", note: "Для детских песочниц" },
  { name: "Белый речной песок", qty: "10 мешков × 50 кг", price: "3 200 ₽", note: "Экономия 300 ₽" },
  { name: "Белый речной песок", qty: "20 мешков × 50 кг", price: "6 000 ₽", note: "Для сада / школы" },
  { name: "Белый речной песок", qty: "от 50 мешков", price: "Договорная", note: "Оптовые поставки" },
];

/* ─── bulk products ─── */
const BULK_PRODUCTS = [
  { name: "Песок строительный", unit: "тонна", price: "от 800 ₽" },
  { name: "Щебень фр. 5–20", unit: "тонна", price: "от 1 200 ₽" },
  { name: "Щебень фр. 20–40", unit: "тонна", price: "от 1 100 ₽" },
  { name: "ПГС (песчано-гравийная смесь)", unit: "тонна", price: "от 750 ₽" },
  { name: "Чернозём", unit: "тонна", price: "от 900 ₽" },
  { name: "Отсев", unit: "тонна", price: "от 650 ₽" },
];

/* ─── wooden products ─── */
const WOOD_PRODUCTS = [
  { emoji: "🏗️", name: "Детская песочница", size: "1,5 × 1,5 м", price: "от 4 900 ₽" },
  { emoji: "🏗️", name: "Детская песочница с навесом", size: "1,5 × 1,5 м", price: "от 7 500 ₽" },
  { emoji: "🏡", name: "Детский домик", size: "Стандарт", price: "от 24 000 ₽" },
  { emoji: "🏡", name: "Детский домик с горкой", size: "Расширенный", price: "от 38 000 ₽" },
  { emoji: "🪵", name: "Веранда деревянная", size: "Индивидуально", price: "от 45 000 ₽" },
  { emoji: "🌿", name: "Беседка", size: "Индивидуально", price: "от 35 000 ₽" },
];

/* ─── reviews ─── */
const REVIEWS = [
  { name: "Елена В.", role: "Заведующая детским садом", text: "Заказываем белый песок для наших четырёх песочниц уже третий год. Привозят вовремя, качество всегда отличное — чистый, без мусора и камней. Дети счастливы!", stars: 5 },
  { name: "Максим Д.", role: "Частный заказчик", text: "Привезли 15 кубов щебня и 10 кубов чернозёма. Самосвал приехал точно в указанное время, выгрузили аккуратно. Буду обращаться ещё.", stars: 5 },
  { name: "Ирина С.", role: "Мама двоих детей", text: "Заказали деревянный домик с горкой и песочницу. Сделали за две недели, установили прямо во дворе. Качество дерева отличное, дети не вылезают!", stars: 5 },
  { name: "Андрей Л.", role: "Председатель ТСЖ", text: "Вызывали на спил большого старого тополя. Приехали быстро, спилили аккуратно, весь мусор вывезли. Двор чистый. Рекомендую.", stars: 5 },
];

const SAND_PRICE = 350;
const BULK_PRICE = 800;

type F = { name: string; phone: string; service: string; comment: string };

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bags, setBags] = useState(10);
  const [tons, setTons] = useState(5);
  const [form, setForm] = useState<F>({ name: "", phone: "", service: "", comment: "" });
  const [sent, setSent] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(40 20% 97%)", color: DARK }}>

      {/* ══════ HEADER ══════ */}
      <header className="sticky top-0 z-50 shadow-md" style={{ background: "hsl(220 28% 13%)" }}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => go("hero")} className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-mont font-black text-sm text-white"
              style={{ background: BLUE }}>
              74
            </div>
            <div className="leading-none">
              <div className="font-mont font-extrabold text-white text-[15px]">УралПесок</div>
              <div className="text-[11px] font-mont font-semibold" style={{ color: AMBER }}>Челябинск · Область</div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {NAV.map(n => (
              <button key={n.id} onClick={() => go(n.id)}
                className="text-[13px] font-mont font-medium text-white/65 hover:text-white transition-colors whitespace-nowrap">
                {n.label}
              </button>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href="tel:+73512000000"
              className="flex items-center gap-1.5 text-sm font-mont font-bold text-white/90 hover:text-white transition-colors">
              <Icon name="Phone" size={14} style={{ color: AMBER }} />
              +7 (351) 200-00-00
            </a>
            <button onClick={() => go("contacts")}
              className="px-5 py-2 rounded-lg text-sm font-mont font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: BLUE }}>
              Заказать
            </button>
          </div>

          {/* Burger */}
          <button className="xl:hidden text-white p-1" onClick={() => setMobileOpen(v => !v)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden px-4 pb-4 pt-2 flex flex-col gap-1" style={{ background: "hsl(220 28% 10%)" }}>
            {NAV.map(n => (
              <button key={n.id} onClick={() => go(n.id)}
                className="text-left py-2 text-sm text-white/75 font-mont hover:text-white transition-colors">
                {n.label}
              </button>
            ))}
            <a href="tel:+73512000000"
              className="mt-2 flex items-center gap-2 font-mont font-bold text-base" style={{ color: AMBER }}>
              <Icon name="Phone" size={16} />
              +7 (351) 200-00-00
            </a>
          </div>
        )}
      </header>

      {/* ══════ HERO ══════ */}
      <section id="hero" className="relative overflow-hidden min-h-[88vh] flex items-center"
        style={{ background: "hsl(220 28% 13%)" }}>
        {/* BG image */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG_SAND})`, opacity: 0.15 }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(220 28% 10% / 0.9) 40%, hsl(210 80% 38% / 0.15))" }} />

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl anim-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-7"
              style={{ borderColor: `${AMBER}55`, background: `${AMBER}15` }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: AMBER }} />
              <span className="text-xs font-mont font-bold uppercase tracking-widest" style={{ color: AMBER }}>
                Челябинск и Челябинская область
              </span>
            </div>

            <h1 className="font-mont font-black text-white leading-[1.06] mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}>
              Белый песок<br />
              <span style={{ color: AMBER }}>для детских садов</span><br />
              и сыпучие грузы<br />
              <span style={{ color: "hsl(210 80% 72%)" }}>с доставкой</span>
            </h1>

            <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-xl">
              Мешки 50 кг и навал: песок, щебень, чернозём. Деревянные песочницы, домики и веранды. Спил и вывоз аварийных деревьев.
            </p>

            <div className="flex flex-wrap gap-3">
              <button onClick={() => go("contacts")}
                className="px-8 py-4 rounded-xl text-base font-mont font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: BLUE }}>
                Оставить заявку
              </button>
              <button onClick={() => go("services")}
                className="px-8 py-4 rounded-xl text-base font-mont font-semibold border transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)" }}>
                Все услуги
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 anim-up delay-3">
            {[
              ["8 лет", "на рынке"],
              ["2 500+", "клиентов"],
              ["Доставка", "в тот же день"],
              ["10+", "единиц техники"],
            ].map(([v, l]) => (
              <div key={v} className="rounded-xl border px-4 py-4"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="font-mont font-black text-xl" style={{ color: AMBER }}>{v}</div>
                <div className="text-xs text-white/45 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SERVICES GRID ══════ */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-xs font-mont font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>Что мы делаем</p>
            <h2 className="text-4xl font-mont font-black" style={{ color: DARK }}>Наши услуги</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <button key={s.id} onClick={() => go(s.id)}
                className="text-left rounded-2xl p-6 border card-hover anim-up"
                style={{ background: s.bg, borderColor: s.color + "30", animationDelay: `${i * 0.08}s` }}>
                <div className="text-4xl mb-4">{s.emoji}</div>
                <div className="text-xs font-mont font-bold uppercase tracking-wide mb-1" style={{ color: s.color }}>{s.sub}</div>
                <h3 className="font-mont font-bold text-base leading-snug mb-2" style={{ color: DARK }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(220 10% 45%)" }}>{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-mont font-semibold" style={{ color: s.color }}>
                  Подробнее <Icon name="ChevronRight" size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SAND SECTION ══════ */}
      <section id="sand" className="py-20" style={{ background: "hsl(40 20% 97%)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div className="anim-up">
              <p className="text-xs font-mont font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>Главный продукт</p>
              <h2 className="text-4xl font-mont font-black leading-snug mb-4" style={{ color: DARK }}>
                Белый речной песок<br />
                <span style={{ color: BLUE }}>для детских учреждений</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "hsl(220 10% 42%)" }}>
                Поставляем чистый белый речной песок специально для детских песочниц: в детских садах, школах, на детских площадках и в частных дворах. Песок промытый, без примесей и крупных включений.
              </p>
              <div className="space-y-2.5 mb-8">
                {[
                  "Мешок 50 кг — удобно для переноски и хранения",
                  "Промытый речной песок — безопасен для детей",
                  "Соответствует санитарным нормам",
                  "Оптовые поставки для детских садов и школ",
                  "Доставка по Челябинску — бесплатно от 20 мешков",
                ].map(t => (
                  <div key={t} className="flex items-start gap-2.5">
                    <Icon name="CheckCircle" size={17} className="flex-shrink-0 mt-0.5" style={{ color: BLUE }} />
                    <span className="text-sm" style={{ color: "hsl(220 10% 35%)" }}>{t}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => go("contacts")}
                className="px-8 py-3.5 rounded-xl font-mont font-bold text-white text-base transition-all hover:opacity-90"
                style={{ background: BLUE }}>
                Заказать песок
              </button>
            </div>

            {/* Price table + img */}
            <div className="space-y-4 anim-up delay-2">
              <img src={IMG_SAND} alt="Белый песок в мешках"
                className="w-full h-52 object-cover rounded-2xl mb-4" />
              {SAND_PRODUCTS.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex items-center justify-between border card-hover"
                  style={{ borderColor: "hsl(40 15% 87%)" }}>
                  <div>
                    <div className="font-mont font-bold text-sm" style={{ color: DARK }}>{p.qty}</div>
                    <div className="text-xs mt-0.5" style={{ color: "hsl(220 10% 55%)" }}>{p.note}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mont font-black text-lg" style={{ color: BLUE }}>{p.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ BULK SECTION ══════ */}
      <section id="bulk" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* img side */}
            <div className="order-last lg:order-first anim-up">
              <img src={IMG_TRUCK} alt="Доставка сыпучих грузов"
                className="w-full h-72 object-cover rounded-2xl mb-6" />
              {/* mini features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { ico: "Truck", t: "Самосвалы 5–20 т" },
                  { ico: "Clock", t: "Доставка в день заказа" },
                  { ico: "MapPin", t: "Вся Челябинская область" },
                  { ico: "Shield", t: "Замер по факту" },
                ].map(({ ico, t }) => (
                  <div key={t} className="rounded-xl p-3.5 flex items-center gap-2.5 border"
                    style={{ background: "hsl(38 85% 52% / 0.07)", borderColor: "hsl(38 85% 52% / 0.2)" }}>
                    <Icon name={ico as never} size={16} style={{ color: AMBER }} />
                    <span className="text-xs font-mont font-semibold" style={{ color: DARK }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* text + table */}
            <div className="anim-up delay-1">
              <p className="text-xs font-mont font-bold uppercase tracking-widest mb-2" style={{ color: AMBER }}>Навалом по всей области</p>
              <h2 className="text-4xl font-mont font-black leading-snug mb-4" style={{ color: DARK }}>
                Сыпучие материалы<br />
                <span style={{ color: AMBER }}>с доставкой</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "hsl(220 10% 42%)" }}>
                Доставляем песок, щебень, гравий, ПГС и чернозём самосвалами по Челябинску и Челябинской области. Работаем с частными и юридическими лицами.
              </p>
              <div className="space-y-2 mb-8">
                {BULK_PRODUCTS.map(p => (
                  <div key={p.name} className="rounded-xl p-3.5 flex items-center justify-between border card-hover"
                    style={{ borderColor: "hsl(40 15% 87%)", background: "hsl(40 20% 97%)" }}>
                    <div>
                      <div className="font-mont font-semibold text-sm" style={{ color: DARK }}>{p.name}</div>
                      <div className="text-xs" style={{ color: "hsl(220 10% 55%)" }}>за {p.unit}</div>
                    </div>
                    <div className="font-mont font-black text-base" style={{ color: AMBER }}>{p.price}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => go("contacts")}
                className="px-8 py-3.5 rounded-xl font-mont font-bold text-sm transition-all hover:opacity-90"
                style={{ background: AMBER, color: DARK }}>
                Рассчитать доставку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CALCULATOR ══════ */}
      <section id="calc" className="py-20" style={{ background: "hsl(220 28% 13%)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-mont font-bold uppercase tracking-widest mb-2" style={{ color: AMBER }}>Быстрый расчёт</p>
            <h2 className="text-4xl font-mont font-black text-white">Калькулятор стоимости</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bags */}
            <div className="rounded-2xl p-6 border"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="text-2xl mb-2">🪣</div>
              <h3 className="font-mont font-bold text-white text-lg mb-1">Песок в мешках</h3>
              <p className="text-xs text-white/40 mb-5">{SAND_PRICE} ₽ / мешок 50 кг</p>

              <label className="block text-sm font-mont font-semibold text-white/60 mb-2">
                Количество: <span style={{ color: AMBER }}>{bags} мешков</span>
              </label>
              <input type="range" min={1} max={200} value={bags}
                onChange={e => setBags(+e.target.value)}
                className="w-full mb-6 accent-blue-500" />

              <div className="rounded-xl p-4 flex justify-between"
                style={{ background: "rgba(255,255,255,0.05)" }}>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Итого</div>
                  <div className="font-mont font-black text-2xl text-white">{(bags * SAND_PRICE).toLocaleString("ru")} ₽</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/40 mb-0.5">Вес</div>
                  <div className="font-mont font-bold text-lg" style={{ color: AMBER }}>{bags * 50} кг</div>
                </div>
              </div>
            </div>

            {/* Bulk */}
            <div className="rounded-2xl p-6 border"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="text-2xl mb-2">🚛</div>
              <h3 className="font-mont font-bold text-white text-lg mb-1">Сыпучие навалом</h3>
              <p className="text-xs text-white/40 mb-5">от {BULK_PRICE} ₽ / тонна</p>

              <label className="block text-sm font-mont font-semibold text-white/60 mb-2">
                Объём: <span style={{ color: AMBER }}>{tons} тонн</span>
              </label>
              <input type="range" min={1} max={100} value={tons}
                onChange={e => setTons(+e.target.value)}
                className="w-full mb-6 accent-yellow-400" />

              <div className="rounded-xl p-4 flex justify-between"
                style={{ background: "rgba(255,255,255,0.05)" }}>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Ориентировочно</div>
                  <div className="font-mont font-black text-2xl text-white">{(tons * BULK_PRICE).toLocaleString("ru")} ₽</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/40 mb-0.5">Объём</div>
                  <div className="font-mont font-bold text-lg" style={{ color: AMBER }}>{tons} т</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-white/25 text-xs mt-5">
            * Цены ориентировочные. Точная стоимость с учётом доставки — по запросу.
          </p>
          <div className="text-center mt-6">
            <button onClick={() => go("contacts")}
              className="px-10 py-4 rounded-xl font-mont font-bold text-white text-base transition-all hover:opacity-90"
              style={{ background: BLUE }}>
              Получить точный расчёт
            </button>
          </div>
        </div>
      </section>

      {/* ══════ WOOD SECTION ══════ */}
      <section id="wood" className="py-20" style={{ background: "hsl(40 20% 97%)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="anim-up">
              <p className="text-xs font-mont font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(25 55% 38%)" }}>Производство в Челябинске</p>
              <h2 className="text-4xl font-mont font-black leading-snug mb-4" style={{ color: DARK }}>
                Деревянные изделия<br />
                <span style={{ color: "hsl(25 55% 38%)" }}>из натуральной сосны</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "hsl(220 10% 42%)" }}>
                Изготавливаем детские песочницы, домики и веранды под заказ. Используем только сухую строганую сосну, обработанную безопасными красками. Доставка и монтаж по Челябинску.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Натуральная сосна без сучков",
                  "Обработка безопасными красками и пропитками",
                  "Изготовление от 7 дней",
                  "Доставка и сборка на месте",
                  "Гарантия 2 года",
                ].map(t => (
                  <div key={t} className="flex items-center gap-2.5">
                    <Icon name="CheckCircle" size={16} style={{ color: "hsl(25 55% 38%)" }} />
                    <span className="text-sm" style={{ color: "hsl(220 10% 38%)" }}>{t}</span>
                  </div>
                ))}
              </div>
              <img src={IMG_WOOD} alt="Деревянные изделия"
                className="w-full h-56 object-cover rounded-2xl" />
            </div>

            <div className="space-y-3 anim-up delay-2">
              <h3 className="font-mont font-bold text-lg mb-4" style={{ color: DARK }}>Прайс-лист</h3>
              {WOOD_PRODUCTS.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex items-center justify-between border card-hover"
                  style={{ borderColor: "hsl(40 15% 87%)" }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.emoji}</span>
                    <div>
                      <div className="font-mont font-bold text-sm" style={{ color: DARK }}>{p.name}</div>
                      <div className="text-xs" style={{ color: "hsl(220 10% 55%)" }}>{p.size}</div>
                    </div>
                  </div>
                  <div className="font-mont font-black text-base" style={{ color: "hsl(25 55% 38%)" }}>{p.price}</div>
                </div>
              ))}
              <button onClick={() => go("contacts")}
                className="mt-2 w-full py-3.5 rounded-xl font-mont font-bold text-white text-sm transition-all hover:opacity-90"
                style={{ background: "hsl(25 55% 38%)" }}>
                Заказать изделие
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ TREES SECTION ══════ */}
      <section id="trees" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Info */}
            <div className="anim-up">
              <p className="text-xs font-mont font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(140 45% 33%)" }}>Безопасно и оперативно</p>
              <h2 className="text-4xl font-mont font-black leading-snug mb-4" style={{ color: DARK }}>
                Спил аварийных<br />
                <span style={{ color: "hsl(140 45% 33%)" }}>деревьев с вывозом</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "hsl(220 10% 42%)" }}>
                Профессионально спиливаем аварийные, сухостойные и опасные деревья на частных участках, во дворах и на предприятиях Челябинска. Полный цикл: спил → вывоз → уборка.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { ico: "TreePine", t: "Любой диаметр ствола" },
                  { ico: "Truck", t: "Вывоз и утилизация" },
                  { ico: "Shield", t: "Страховка ответственности" },
                  { ico: "Clock", t: "Срочный выезд за 2 часа" },
                ].map(({ ico, t }) => (
                  <div key={t} className="rounded-xl p-3.5 flex items-center gap-2.5 border"
                    style={{ background: "hsl(140 45% 33% / 0.06)", borderColor: "hsl(140 45% 33% / 0.2)" }}>
                    <Icon name={ico as never} size={16} style={{ color: "hsl(140 45% 33%)" }} />
                    <span className="text-xs font-mont font-semibold" style={{ color: DARK }}>{t}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-5 mb-6 border"
                style={{ background: "hsl(140 45% 33% / 0.06)", borderColor: "hsl(140 45% 33% / 0.2)" }}>
                <div className="font-mont font-bold text-base mb-1" style={{ color: DARK }}>Стоимость спила</div>
                <div className="text-sm" style={{ color: "hsl(220 10% 42%)" }}>
                  Зависит от высоты, диаметра ствола и сложности доступа. Выезд мастера для оценки — бесплатно.
                </div>
                <div className="mt-3 font-mont font-black text-xl" style={{ color: "hsl(140 45% 33%)" }}>от 1 500 ₽</div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => go("contacts")}
                  className="flex-1 py-3.5 rounded-xl font-mont font-bold text-white text-sm transition-all hover:opacity-90"
                  style={{ background: "hsl(140 45% 33%)" }}>
                  Вызвать мастера
                </button>
                <a href="tel:+73512000000"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl border font-mont font-semibold text-sm transition-all hover:bg-gray-50"
                  style={{ borderColor: "hsl(40 15% 82%)", color: DARK }}>
                  <Icon name="Phone" size={15} />
                  Позвонить
                </a>
              </div>
            </div>

            {/* Visual right */}
            <div className="rounded-2xl overflow-hidden anim-up delay-2"
              style={{ background: "hsl(220 28% 13%)", minHeight: "420px", position: "relative" }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="text-7xl mb-5">🌳</div>
                <h4 className="font-mont font-black text-white text-2xl mb-3">Срочный вызов</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Дерево упало или угрожает постройкам? Выезжаем экстренно в любой день — включая выходные и праздники.
                </p>
                <a href="tel:+73512000000"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mont font-bold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: "hsl(140 45% 33%)" }}>
                  <Icon name="Phone" size={16} />
                  +7 (351) 200-00-00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ REVIEWS ══════ */}
      <section className="py-20" style={{ background: "hsl(40 20% 97%)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-xs font-mont font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>Отзывы клиентов</p>
            <h2 className="text-4xl font-mont font-black" style={{ color: DARK }}>Нам доверяют</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border card-hover anim-up"
                style={{ borderColor: "hsl(40 15% 87%)", animationDelay: `${i * 0.08}s` }}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-sm" style={{ color: AMBER }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(220 10% 38%)" }}>«{r.text}»</p>
                <div>
                  <div className="font-mont font-bold text-sm" style={{ color: DARK }}>{r.name}</div>
                  <div className="text-xs" style={{ color: "hsl(220 10% 55%)" }}>{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CONTACTS ══════ */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-mont font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>Связаться с нами</p>
            <h2 className="text-4xl font-mont font-black mb-3" style={{ color: DARK }}>Оставьте заявку</h2>
            <p style={{ color: "hsl(220 10% 50%)" }}>Перезвоним в течение 15 минут и рассчитаем стоимость</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-4">
              {[
                { ico: "Phone", label: "Телефон", val: "+7 (351) 200-00-00", sub: "Пн–Вс 8:00–20:00" },
                { ico: "Mail", label: "E-mail", val: "info@uralpesok.ru", sub: "Ответим в тот же день" },
                { ico: "MapPin", label: "Зона работы", val: "Челябинск и область", sub: "Выезд по всей Челябинской области" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl p-4 border"
                  style={{ borderColor: "hsl(40 15% 87%)", background: "hsl(40 20% 97%)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                    style={{ background: BLUE }}>
                    <Icon name={item.ico as never} size={17} />
                  </div>
                  <div>
                    <div className="text-xs font-mont font-bold uppercase tracking-wide" style={{ color: "hsl(220 10% 55%)" }}>{item.label}</div>
                    <div className="font-mont font-bold text-sm" style={{ color: DARK }}>{item.val}</div>
                    <div className="text-xs" style={{ color: "hsl(220 10% 55%)" }}>{item.sub}</div>
                  </div>
                </div>
              ))}

              {/* CTA block */}
              <div className="rounded-2xl p-5 text-white"
                style={{ background: `linear-gradient(135deg, ${BLUE}, hsl(210 80% 28%))` }}>
                <div className="font-mont font-black text-lg mb-1">Срочный заказ?</div>
                <p className="text-white/65 text-sm mb-4">
                  Позвоните — обсудим детали и организуем доставку в удобное время.
                </p>
                <a href="tel:+73512000000"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-mont font-bold text-sm transition-all hover:bg-white/20"
                  style={{ background: "rgba(255,255,255,0.14)", color: "white" }}>
                  <Icon name="Phone" size={15} />
                  Позвонить сейчас
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 border shadow-sm"
              style={{ borderColor: "hsl(40 15% 87%)" }}>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white"
                    style={{ background: BLUE }}>
                    <Icon name="CheckCircle" size={28} />
                  </div>
                  <h3 className="font-mont font-black text-xl mb-2" style={{ color: DARK }}>Заявка отправлена!</h3>
                  <p style={{ color: "hsl(220 10% 50%)" }} className="text-sm">Перезвоним вам в течение 15 минут</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <h3 className="font-mont font-bold text-lg mb-4" style={{ color: DARK }}>Форма заявки</h3>

                  <div>
                    <label className="block text-sm font-mont font-semibold mb-1.5" style={{ color: "hsl(220 10% 38%)" }}>Ваше имя *</label>
                    <input required type="text" placeholder="Иван Петров"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors"
                      style={{ borderColor: "hsl(40 15% 85%)" }} />
                  </div>

                  <div>
                    <label className="block text-sm font-mont font-semibold mb-1.5" style={{ color: "hsl(220 10% 38%)" }}>Телефон *</label>
                    <input required type="tel" placeholder="+7 (351) ___-__-__"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors"
                      style={{ borderColor: "hsl(40 15% 85%)" }} />
                  </div>

                  <div>
                    <label className="block text-sm font-mont font-semibold mb-1.5" style={{ color: "hsl(220 10% 38%)" }}>Услуга</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none bg-white transition-colors"
                      style={{ borderColor: "hsl(40 15% 85%)", color: form.service ? DARK : "hsl(220 10% 60%)" }}>
                      <option value="">Выберите услугу...</option>
                      <option>Белый песок в мешках 50 кг</option>
                      <option>Сыпучие грузы навалом</option>
                      <option>Детская песочница</option>
                      <option>Деревянный домик / веранда</option>
                      <option>Спил и вывоз деревьев</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-mont font-semibold mb-1.5" style={{ color: "hsl(220 10% 38%)" }}>Комментарий</label>
                    <textarea placeholder="Количество, адрес доставки, сроки..." rows={3}
                      value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none resize-none transition-colors"
                      style={{ borderColor: "hsl(40 15% 85%)" }} />
                  </div>

                  <button type="submit"
                    className="w-full py-3.5 rounded-xl font-mont font-bold text-white text-base transition-all hover:opacity-90"
                    style={{ background: BLUE }}>
                    Отправить заявку
                  </button>
                  <p className="text-xs text-center" style={{ color: "hsl(220 10% 60%)" }}>
                    Нажимая кнопку, вы соглашаетесь с политикой обработки данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="py-10" style={{ background: "hsl(220 28% 10%)" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mont font-black text-xs text-white"
              style={{ background: BLUE }}>74</div>
            <div>
              <div className="font-mont font-bold text-white text-sm">УралПесок</div>
              <div className="text-xs font-mont" style={{ color: AMBER }}>Челябинск и область</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
            {NAV.map(n => (
              <button key={n.id} onClick={() => go(n.id)}
                className="text-xs font-mont text-white/40 hover:text-white/80 transition-colors">
                {n.label}
              </button>
            ))}
          </div>
          <div className="text-xs font-mont" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 УралПесок. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
