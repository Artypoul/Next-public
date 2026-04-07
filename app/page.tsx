const speakers = [
  {
    name: "Анна Смирнова",
    role: "Staff Frontend Engineer, Nebula",
    topic: "Архитектура интерфейсов в эпоху AI"
  },
  {
    name: "Илья Петров",
    role: "Platform Lead, Proton",
    topic: "Переезд на event-driven без боли"
  },
  {
    name: "Екатерина Власова",
    role: "DX Engineer, Polaris",
    topic: "TypeScript 2026: реальные кейсы"
  }
];

const schedule = [
  ["09:30", "Открытие дверей и welcome coffee"],
  ["10:30", "Keynote: Инженерная культура и скорость"],
  ["12:00", "Поток Frontend / Backend / Data"],
  ["15:00", "Panel talk: AI в production"],
  ["18:00", "Afterparty и нетворкинг"]
];

const tickets = [
  {
    title: "Student",
    price: "4 900 ₽",
    features: ["Все доклады", "Записи", "Чат участников"]
  },
  {
    title: "Standard",
    price: "12 900 ₽",
    features: ["Все доклады", "Workshops", "Afterparty"],
    highlight: true
  },
  {
    title: "Team",
    price: "от 49 000 ₽",
    features: ["5+ билетов", "Приоритетная регистрация", "Скидка на стенд"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 bg-hero-grid">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between">
          <div className="space-y-6 md:max-w-2xl">
            <p className="inline-flex rounded-full border border-neonBlue/40 px-4 py-1 text-sm text-neonBlue">
              16-й фестиваль технологий
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              CODEFEST 16
              <span className="block bg-gradient-to-r from-neonBlue to-neon bg-clip-text text-transparent">
                18–19 сентября 2026
              </span>
            </h1>
            <p className="text-lg text-slate-300">
              Два дня докладов, практикумов и живого общения для frontend, backend, mobile, data и engineering
              managers.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-xl bg-neon px-6 py-3 font-semibold hover:bg-violet-500" href="#tickets">
                Купить билет
              </a>
              <a className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:border-neonBlue" href="#program">
                Смотреть программу
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-glow backdrop-blur">
            <p className="text-sm text-slate-400">Локация</p>
            <p className="mt-1 text-xl font-bold">Новосибирск · Экспоцентр</p>
            <p className="mt-4 text-sm text-slate-300">Офлайн + онлайн-трансляция для всех участников.</p>
          </div>
        </div>
      </section>

      <section id="speakers" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Спикеры</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="rounded-2xl border border-white/10 bg-surface p-6">
              <div className="mb-4 h-28 rounded-xl bg-gradient-to-br from-neon/30 to-neonBlue/20" />
              <h3 className="text-xl font-semibold">{speaker.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{speaker.role}</p>
              <p className="mt-4 text-slate-200">{speaker.topic}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="program" className="border-y border-white/10 bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold">Программа</h2>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            {schedule.map(([time, event]) => (
              <div key={time} className="grid grid-cols-[96px_1fr] border-b border-white/10 p-4 last:border-b-0">
                <p className="font-mono text-neonBlue">{time}</p>
                <p>{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tickets" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Билеты</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {tickets.map((ticket) => (
            <article
              key={ticket.title}
              className={`rounded-2xl border p-6 ${ticket.highlight ? "border-neon bg-neon/10 shadow-glow" : "border-white/10 bg-surface"}`}
            >
              <h3 className="text-2xl font-bold">{ticket.title}</h3>
              <p className="mt-2 text-3xl font-black">{ticket.price}</p>
              <ul className="mt-5 space-y-2 text-slate-300">
                {ticket.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-white/10 py-3 font-semibold hover:bg-white/20">
                Выбрать
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <div className="mt-6 space-y-4">
            <details className="rounded-xl border border-white/10 bg-surface p-4">
              <summary className="cursor-pointer font-semibold">Будет ли запись докладов?</summary>
              <p className="mt-2 text-slate-300">Да, доступ к записям получают все владельцы билетов.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-surface p-4">
              <summary className="cursor-pointer font-semibold">Можно ли вернуть билет?</summary>
              <p className="mt-2 text-slate-300">Да, полный возврат возможен за 14 дней до мероприятия.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
