import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/b45ef94b-f17a-4771-a9f6-b1fbbe569b1d/files/f2d5ebcd-a637-4bb7-914d-9dbe31facd87.jpg";
const FAMILY_IMG = "https://cdn.poehali.dev/projects/b45ef94b-f17a-4771-a9f6-b1fbbe569b1d/files/77d6c4ef-d23f-4b17-a1ae-2af5fbb70cb6.jpg";
const PRODUCTS_IMG = "https://cdn.poehali.dev/projects/b45ef94b-f17a-4771-a9f6-b1fbbe569b1d/files/11b1e329-cb53-4b78-aab4-5604f66188e1.jpg";

const NAV_LINKS = [
  { href: "#catalog", label: "Каталог" },
  { href: "#delivery", label: "Доставка" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#about", label: "О нас" },
  { href: "#contacts", label: "Контакты" },
];

const CATEGORIES = ["Все", "Игрушки", "Одежда", "Питание", "Уход", "Безопасность"];

const PRODUCTS = [
  { id: 1, name: "Мягкий мишка Тимоша", category: "Игрушки", price: "1 290 ₽", badge: "Хит", color: "hsl(270 35% 88%)", emoji: "🧸" },
  { id: 2, name: "Боди хлопковое 3 шт.", category: "Одежда", price: "890 ₽", badge: "Новинка", color: "hsl(25 80% 88%)", emoji: "👶" },
  { id: 3, name: "Каша овсяная 6 мес+", category: "Питание", price: "320 ₽", badge: null, color: "hsl(160 40% 88%)", emoji: "🥣" },
  { id: 4, name: "Шампунь без слёз", category: "Уход", price: "590 ₽", badge: "Эко", color: "hsl(160 40% 88%)", emoji: "🛁" },
  { id: 5, name: "Угловые накладки (8 шт.)", category: "Безопасность", price: "240 ₽", badge: null, color: "hsl(25 80% 88%)", emoji: "🛡️" },
  { id: 6, name: "Конструктор деревянный", category: "Игрушки", price: "1 850 ₽", badge: "Хит", color: "hsl(270 35% 88%)", emoji: "🧩" },
  { id: 7, name: "Комбинезон утеплённый", category: "Одежда", price: "2 190 ₽", badge: null, color: "hsl(25 80% 88%)", emoji: "🧥" },
  { id: 8, name: "Пюре яблоко-груша", category: "Питание", price: "89 ₽", badge: "Новинка", color: "hsl(160 40% 88%)", emoji: "🍎" },
];

const REVIEWS = [
  { name: "Анна К.", text: "Заказываю здесь уже год! Качество товаров отличное, доставка всегда вовремя. Дочка обожает мишку Тимошу!", stars: 5, avatar: "👩" },
  { name: "Мария В.", text: "Отличный магазин для молодых мам. Всё безопасно, натурально. Консультанты всегда помогут с выбором.", stars: 5, avatar: "👱‍♀️" },
  { name: "Светлана Р.", text: "Быстрая доставка и удобная упаковка. Заказывала одежду и игрушки — всем довольна!", stars: 5, avatar: "👩‍🦰" },
  { name: "Олег М.", text: "Покупали подарок для племянника. Продавец помог подобрать возрастную игрушку. Рекомендую!", stars: 4, avatar: "👨" },
];

type IconName = "ShoppingCart" | "CreditCard" | "Package" | "Truck" | "Gift" | "Shield" | "Phone" | "Mail" | "MapPin" | "ShoppingBag" | "X" | "Menu";

const DELIVERY_STEPS: { icon: IconName; title: string; desc: string }[] = [
  { icon: "ShoppingCart", title: "Оформите заказ", desc: "Выберите товары и добавьте в корзину" },
  { icon: "CreditCard", title: "Оплатите удобным способом", desc: "Картой, по СБП или при получении" },
  { icon: "Package", title: "Мы соберём посылку", desc: "В течение 1 рабочего дня" },
  { icon: "Truck", title: "Быстрая доставка", desc: "Курьером, СДЭК или Почтой России" },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", phone: "", message: "" });

  const filtered = activeCategory === "Все"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40 30% 98%)" }}>

      {/* ───── HEADER ───── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[hsl(40_20%_88%)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold" style={{ color: "hsl(160 35% 40%)" }}>МалышОК</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href.slice(1))}
                className="text-sm font-medium text-[hsl(25_20%_35%)] hover:text-[hsl(160_35%_44%)] transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold btn-mint"
            onClick={() => scrollTo("catalog")}
          >
            <Icon name="ShoppingBag" size={16} />
            В каталог
          </button>

          <button className="md:hidden p-2 rounded-lg" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[hsl(40_20%_88%)] px-4 py-3 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href.slice(1))}
                className="text-left text-sm font-medium py-1 text-[hsl(25_20%_35%)]"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ───── HERO ───── */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "hsl(160 40% 92%)", color: "hsl(160 35% 35%)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[hsl(160_35%_52%)]"></span>
              Безопасно для детей
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4" style={{ color: "hsl(25 20% 18%)" }}>
              Всё для детства
              <br />
              <span style={{ color: "hsl(160 35% 52%)" }}>с заботой</span> и любовью
            </h1>

            <p className="text-lg mb-8" style={{ color: "hsl(25 15% 45%)" }}>
              Сертифицированные товары для малышей от 0 до 12 лет.
              Только проверенные производители, безопасные материалы.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="btn-mint px-8 py-3 rounded-full font-semibold text-base"
                onClick={() => scrollTo("catalog")}
              >
                Смотреть каталог
              </button>
              <button
                className="px-8 py-3 rounded-full font-semibold text-base border-2 transition-colors"
                style={{ borderColor: "hsl(160 35% 52%)", color: "hsl(160 35% 40%)" }}
                onClick={() => scrollTo("contacts")}
              >
                Связаться с нами
              </button>
            </div>

            <div className="flex gap-8 mt-10">
              {[["5 000+", "довольных семей"], ["100%", "сертифицировано"], ["1–3 дня", "доставка"]].map(([n, l]) => (
                <div key={n}>
                  <div className="text-2xl font-black" style={{ color: "hsl(160 35% 45%)" }}>{n}</div>
                  <div className="text-xs mt-0.5" style={{ color: "hsl(25 15% 55%)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-up delay-200">
            <div
              className="absolute -top-8 -right-8 w-64 h-64 blob opacity-40"
              style={{ backgroundColor: "hsl(270 35% 88%)" }}
            />
            <div
              className="absolute -bottom-8 -left-4 w-48 h-48 blob opacity-40"
              style={{ backgroundColor: "hsl(25 80% 88%)" }}
            />
            <img
              src={HERO_IMG}
              alt="Товары для детей"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
              style={{ height: 420 }}
            />
          </div>
        </div>

        <div style={{ backgroundColor: "hsl(40 30% 98%)" }}>
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40 C360 0 1080 0 1440 40 V40 H0Z" fill="hsl(160 40% 92%)" />
          </svg>
        </div>
      </section>

      {/* ───── CATALOG ───── */}
      <section id="catalog" style={{ backgroundColor: "hsl(160 40% 92%)" }} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "hsl(25 20% 18%)" }}>
              Наш каталог
            </h2>
            <p style={{ color: "hsl(25 15% 45%)" }}>Качественные товары для каждого возраста</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={
                  activeCategory === cat
                    ? { backgroundColor: "hsl(160 35% 52%)", color: "white" }
                    : { backgroundColor: "white", color: "hsl(25 20% 35%)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-4 card-hover cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div
                  className="w-full h-32 rounded-xl flex items-center justify-center text-5xl mb-3"
                  style={{ backgroundColor: p.color }}
                >
                  {p.emoji}
                </div>

                {p.badge && (
                  <span
                    className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-1"
                    style={{ backgroundColor: "hsl(160 40% 92%)", color: "hsl(160 35% 35%)" }}
                  >
                    {p.badge}
                  </span>
                )}

                <p className="text-sm font-semibold leading-tight mb-1" style={{ color: "hsl(25 20% 18%)" }}>{p.name}</p>
                <p className="text-xs mb-2" style={{ color: "hsl(25 15% 55%)" }}>{p.category}</p>
                <p className="text-base font-black" style={{ color: "hsl(160 35% 45%)" }}>{p.price}</p>

                <button className="mt-3 w-full py-2 rounded-xl text-xs font-semibold btn-mint">
                  В корзину
                </button>
              </div>
            ))}
          </div>
        </div>

        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full mt-12">
          <path d="M0 0 C360 40 1080 40 1440 0 V40 H0Z" fill="hsl(40 30% 98%)" />
        </svg>
      </section>

      {/* ───── DELIVERY ───── */}
      <section id="delivery" className="py-16 md:py-20" style={{ backgroundColor: "hsl(40 30% 98%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "hsl(25 20% 18%)" }}>
                Доставка по всей<br />
                <span style={{ color: "hsl(160 35% 52%)" }}>России</span>
              </h2>
              <p className="mb-8" style={{ color: "hsl(25 15% 45%)" }}>
                Бережно упаковываем каждый заказ, чтобы товары дошли в идеальном состоянии.
              </p>

              <div className="space-y-4">
                {DELIVERY_STEPS.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "hsl(160 40% 92%)" }}
                    >
                      <Icon name={step.icon} size={18} className="text-[hsl(160_35%_44%)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "hsl(25 20% 18%)" }}>{step.title}</p>
                      <p className="text-sm" style={{ color: "hsl(25 15% 55%)" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {([
                  { label: "Бесплатно от 3 000 ₽", icon: "Gift" as IconName },
                  { label: "Страхование посылок", icon: "Shield" as IconName },
                ] as { label: string; icon: IconName }[]).map(item => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                    style={{ backgroundColor: "hsl(25 80% 92%)" }}
                  >
                    <Icon name={item.icon} size={16} className="text-[hsl(25_60%_55%)]" />
                    <span className="text-sm font-medium" style={{ color: "hsl(25 30% 30%)" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl -rotate-3"
                style={{ backgroundColor: "hsl(270 35% 88%)" }}
              />
              <img
                src={PRODUCTS_IMG}
                alt="Доставка"
                className="relative rounded-3xl shadow-lg w-full object-cover"
                style={{ height: 380 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── ABOUT ───── */}
      <section id="about" style={{ backgroundColor: "hsl(270 30% 95%)" }} className="py-16 md:py-20">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full -mt-4">
          <path d="M0 40 C360 0 1080 0 1440 40 V0 H0Z" fill="hsl(40 30% 98%)" />
        </svg>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div
                className="absolute inset-0 rounded-3xl rotate-2"
                style={{ backgroundColor: "hsl(25 80% 88%)" }}
              />
              <img
                src={FAMILY_IMG}
                alt="О компании"
                className="relative rounded-3xl shadow-lg w-full object-cover"
                style={{ height: 380 }}
              />
            </div>
            <div className="order-1 md:order-2">
              <span
                className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
                style={{ backgroundColor: "hsl(270 35% 88%)", color: "hsl(270 30% 35%)" }}
              >
                О компании
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "hsl(25 20% 18%)" }}>
                Мы создаём счастливое<br />
                <span style={{ color: "hsl(270 35% 55%)" }}>детство</span>
              </h2>
              <p className="mb-4" style={{ color: "hsl(25 15% 45%)" }}>
                МалышОК — это семейный магазин, основанный в 2019 году. Мы сами родители, поэтому знаем, как важно, чтобы товары для детей были по-настоящему безопасными.
              </p>
              <p style={{ color: "hsl(25 15% 45%)" }}>
                Каждый продукт проходит строгий отбор: только экологичные материалы, сертификаты качества и проверенные поставщики.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[["2019", "год основания"], ["450+", "товаров"], ["★ 4.9", "рейтинг"]].map(([n, l]) => (
                  <div
                    key={n}
                    className="text-center p-3 rounded-2xl"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="text-xl font-black" style={{ color: "hsl(270 35% 50%)" }}>{n}</div>
                    <div className="text-xs mt-1" style={{ color: "hsl(25 15% 55%)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── REVIEWS ───── */}
      <section id="reviews" className="py-16 md:py-20" style={{ backgroundColor: "hsl(40 30% 98%)" }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full -mt-4">
          <path d="M0 0 C360 40 1080 40 1440 0 V40 H0Z" fill="hsl(270 30% 95%)" />
        </svg>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "hsl(25 20% 18%)" }}>
              Отзывы покупателей
            </h2>
            <p style={{ color: "hsl(25 15% 45%)" }}>Нам доверяют тысячи семей по всей России</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 card-hover animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: "hsl(160 40% 92%)" }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "hsl(25 20% 18%)" }}>{r.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.stars }).map((_, j) => (
                        <span key={j} className="text-yellow-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(25 15% 45%)" }}>«{r.text}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CONTACTS ───── */}
      <section id="contacts" style={{ backgroundColor: "hsl(25 80% 94%)" }} className="py-16 md:py-20">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full -mt-4">
          <path d="M0 40 C360 0 1080 0 1440 40 V0 H0Z" fill="hsl(40 30% 98%)" />
        </svg>

        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "hsl(25 20% 18%)" }}>
                Свяжитесь с нами
              </h2>
              <p className="mb-8" style={{ color: "hsl(25 15% 45%)" }}>
                Мы рады ответить на любые вопросы и помочь с выбором товаров для вашего малыша.
              </p>

              <div className="space-y-4">
                {([
                  { icon: "Phone" as IconName, text: "+7 (800) 123-45-67", sub: "Бесплатно по России" },
                  { icon: "Mail" as IconName, text: "hello@malyshok.ru", sub: "Ответим в течение часа" },
                  { icon: "MapPin" as IconName, text: "г. Москва, ул. Детская, 12", sub: "Пн–Пт 10:00–19:00" },
                ] as { icon: IconName; text: string; sub: string }[]).map(item => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "hsl(25 80% 82%)" }}
                    >
                      <Icon name={item.icon} size={18} className="text-[hsl(25_50%_40%)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "hsl(25 20% 18%)" }}>{item.text}</p>
                      <p className="text-xs" style={{ color: "hsl(25 15% 55%)" }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-5" style={{ color: "hsl(25 20% 18%)" }}>Написать нам</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "hsl(25 20% 30%)" }}>Ваше имя</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:border-[hsl(160_35%_52%)] transition-colors"
                    style={{ borderColor: "hsl(40 20% 85%)" }}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "hsl(25 20% 30%)" }}>Телефон</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={e => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:border-[hsl(160_35%_52%)] transition-colors"
                    style={{ borderColor: "hsl(40 20% 85%)" }}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "hsl(25 20% 30%)" }}>Сообщение</label>
                  <textarea
                    value={contactForm.message}
                    onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Ваш вопрос или пожелание..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none focus:border-[hsl(160_35%_52%)] transition-colors resize-none"
                    style={{ borderColor: "hsl(40 20% 85%)" }}
                  />
                </div>
                <button className="w-full py-3 rounded-xl font-semibold btn-mint">
                  Отправить сообщение
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="bg-[hsl(25_20%_18%)] text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold text-white">МалышОК</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {NAV_LINKS.map(l => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href.slice(1))}
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity text-white"
                >
                  {l.label}
                </button>
              ))}
            </div>
            <p className="text-sm opacity-40">© 2025 МалышОК</p>
          </div>
        </div>
      </footer>
    </div>
  );
}