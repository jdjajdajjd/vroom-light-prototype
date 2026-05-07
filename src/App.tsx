import { CalendarDays, Car, Check, ChevronRight, FileText, Home, MessageCircle, Settings2, UserRound, X } from 'lucide-react'

const colors = {
  page: '#EEF4EF',
  surface: '#FFFFFF',
  surfaceSoft: '#F8FBF8',
  text: '#101312',
  muted: '#8C9691',
  border: 'rgba(16, 24, 20, 0.07)',
  green: '#3F9A57',
  greenSoft: '#DFF2E3',
  greenPale: '#EEF8F0',
  danger: '#D75A4A',
}

function Header() {
  return (
    <header className="flex items-center justify-between py-1">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[15px] font-semibold shadow-[0_12px_30px_rgba(28,52,38,0.07)] ring-1 ring-black/[0.04]">
          МК
        </div>
        <div>
          <p className="text-sm text-[#8C9691]">Доброе утро</p>
          <h1 className="text-[21px] font-semibold tracking-[-0.03em] text-[#101312]">Мария К.</h1>
          <p className="mt-0.5 text-xs font-medium text-[#3F9A57]">Категория B</p>
        </div>
      </div>
      <button aria-label="Настройки школы" className="grid h-11 w-11 place-items-center rounded-full bg-white/80 text-[#101312] shadow-[0_10px_28px_rgba(28,52,38,0.06)] ring-1 ring-black/[0.04] backdrop-blur">
        <Settings2 size={19} strokeWidth={1.8} />
      </button>
    </header>
  )
}

function NextLessonCard() {
  return (
    <section className="relative overflow-hidden rounded-[30px] border border-black/[0.04] bg-white p-5 shadow-[0_18px_50px_rgba(28,52,38,0.08)]">
      <div className="absolute left-0 top-6 h-24 w-1 rounded-r-full bg-[#3F9A57]" />
      <div className="flex items-start justify-between gap-4 pl-2">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-[#EEF8F0] px-3 py-1 text-xs font-semibold text-[#3F9A57]">запланировано</span>
            <span className="text-xs text-[#8C9691]">Следующее занятие</span>
          </div>
          <p className="text-[17px] font-medium text-[#101312]">12 мая, вторник</p>
          <p className="mt-1 text-[30px] font-semibold leading-tight tracking-[-0.05em] text-[#101312]">10:30 – 12:00</p>
          <p className="mt-3 text-sm text-[#8C9691]">Площадка • Петров А. И.</p>
        </div>
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F8FBF8] text-[#3F9A57]">
          <Car size={22} strokeWidth={1.8} />
        </div>
      </div>
      <button className="mt-6 flex items-center gap-2 rounded-full bg-[#101312] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(16,19,18,0.12)]">
        Открыть детали <ChevronRight size={16} />
      </button>
    </section>
  )
}

function ProgressCard() {
  const rows = [
    { label: 'Вождение', value: '8 из 56 часов', state: 'active' },
    { label: 'Документы', value: '3 из 4 готовы', state: 'done' },
    { label: 'Теория', value: 'скоро', state: 'soon' },
  ]

  return (
    <section className="rounded-[28px] border border-black/[0.04] bg-white/95 p-5 shadow-[0_12px_32px_rgba(28,52,38,0.06)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[18px] font-semibold tracking-[-0.03em]">Готовность к обучению</h2>
        <span className="rounded-full bg-[#DFF2E3] px-3 py-1 text-xs font-semibold text-[#3F9A57]">в процессе</span>
      </div>
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 rounded-2xl bg-[#F8FBF8] px-3.5 py-3">
            <div className="flex items-center gap-3">
              <span className={`grid h-5 w-5 place-items-center rounded-full ${row.state === 'done' ? 'bg-[#3F9A57] text-white' : row.state === 'active' ? 'bg-[#DFF2E3] text-[#3F9A57]' : 'bg-white text-[#8C9691]'}`}>
                {row.state === 'done' ? <Check size={13} strokeWidth={2.4} /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
              </span>
              <span className="text-sm font-medium text-[#101312]">{row.label}</span>
            </div>
            <span className="text-sm text-[#8C9691]">{row.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function WeekStrip() {
  const days = [
    ['Пн', '6'], ['Вт', '7'], ['Ср', '8'], ['Чт', '9'], ['Пт', '10'], ['Сб', '11'], ['Вс', '12'],
  ]
  return (
    <section className="rounded-[26px] border border-black/[0.04] bg-white/95 p-3 shadow-[0_12px_32px_rgba(28,52,38,0.06)]">
      <div className="grid grid-cols-7 gap-1">
        {days.map(([name, date]) => {
          const active = date === '12'
          return (
            <button key={date} className={`flex h-[74px] flex-col items-center justify-center rounded-[22px] transition ${active ? 'bg-[#3F9A57] text-white shadow-[0_12px_24px_rgba(63,154,87,0.22)]' : 'bg-[#F8FBF8] text-[#8C9691]'}`}>
              <span className="text-[11px] font-medium">{name}</span>
              <span className={`mt-1 text-lg font-semibold ${active ? 'text-white' : 'text-[#101312]'}`}>{date}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

function BookingSlot({ time, place, instructor }: { time: string; place: string; instructor: string }) {
  return (
    <article className="rounded-[24px] border border-black/[0.04] bg-white/90 p-4 shadow-[0_10px_28px_rgba(28,52,38,0.05)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-[17px] font-semibold tracking-[-0.03em] text-[#101312]">{time}</p>
            <span className="flex items-center gap-1.5 rounded-full bg-[#EEF8F0] px-2.5 py-1 text-[11px] font-semibold text-[#3F9A57]"><span className="h-1.5 w-1.5 rounded-full bg-[#3F9A57]" />Свободно</span>
          </div>
          <p className="mt-2 text-sm text-[#8C9691]">{place}</p>
          <p className="mt-0.5 text-sm text-[#8C9691]">{instructor}</p>
        </div>
        <button className="rounded-full bg-[#DFF2E3] px-3.5 py-2 text-xs font-semibold text-[#2E7E44]">Записаться</button>
      </div>
    </article>
  )
}

function BookingSlots() {
  return (
    <section>
      <div className="mb-3 flex items-end justify-between px-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C9691]">Рядом</p>
          <h2 className="text-[22px] font-semibold tracking-[-0.04em]">Свободные окна</h2>
        </div>
        <button className="text-sm font-semibold text-[#3F9A57]">Все</button>
      </div>
      <div className="space-y-3">
        <BookingSlot time="12:00 – 13:30" place="Площадка" instructor="Петров А. И." />
        <BookingSlot time="16:30 – 18:00" place="Городской маршрут" instructor="Смирнова Е. В." />
      </div>
    </section>
  )
}

function DocumentsChecklist() {
  const docs = [
    { icon: <Check size={14} />, label: 'Паспорт', status: 'готово', tone: 'green' },
    { icon: <Check size={14} />, label: 'Медсправка', status: 'готово', tone: 'green' },
    { icon: <span className="h-1.5 w-1.5 rounded-full bg-current" />, label: 'Договор', status: 'на проверке', tone: 'muted' },
    { icon: <X size={13} />, label: 'Фото', status: 'загрузить', tone: 'danger' },
  ]
  return (
    <section className="rounded-[28px] border border-black/[0.04] bg-white/95 p-5 shadow-[0_12px_32px_rgba(28,52,38,0.06)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[18px] font-semibold tracking-[-0.03em]">Документы</h2>
        <FileText size={19} className="text-[#8C9691]" strokeWidth={1.8} />
      </div>
      <div className="space-y-2">
        {docs.map((doc) => (
          <div key={doc.label} className="flex items-center justify-between rounded-2xl px-1 py-2.5">
            <div className="flex items-center gap-3">
              <span className={`grid h-6 w-6 place-items-center rounded-full ${doc.tone === 'green' ? 'bg-[#DFF2E3] text-[#3F9A57]' : doc.tone === 'danger' ? 'bg-[#FFF0EE] text-[#D75A4A]' : 'bg-[#F8FBF8] text-[#8C9691]'}`}>{doc.icon}</span>
              <span className="text-sm font-medium text-[#101312]">{doc.label}</span>
            </div>
            <span className={`text-sm ${doc.tone === 'danger' ? 'text-[#D75A4A]' : 'text-[#8C9691]'}`}>{doc.status}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function BottomNav() {
  const items = [
    { label: 'Главная', icon: Home, active: true },
    { label: 'Расписание', icon: CalendarDays },
    { label: 'Связь', icon: MessageCircle },
    { label: 'Профиль', icon: UserRound },
  ]
  return (
    <nav className="fixed bottom-5 left-1/2 z-20 w-[calc(100%-32px)] max-w-[402px] -translate-x-1/2 rounded-full border border-black/[0.04] bg-white/90 px-3 py-2.5 shadow-[0_18px_45px_rgba(28,52,38,0.14)] backdrop-blur-xl">
      <div className="grid grid-cols-4">
        {items.map(({ label, icon: Icon, active }) => (
          <button key={label} className={`flex flex-col items-center gap-1.5 rounded-full py-1.5 text-[11px] font-medium ${active ? 'text-[#3F9A57]' : 'text-[#8C9691]'}`}>
            <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}

function App() {
  return (
    <main style={{ backgroundColor: colors.page }} className="min-h-screen">
      <div className="mx-auto min-h-screen max-w-[430px] px-4 pb-28 pt-5">
        <Header />
        <div className="mt-7 space-y-5">
          <NextLessonCard />
          <ProgressCard />
          <WeekStrip />
          <BookingSlots />
          <DocumentsChecklist />
        </div>
      </div>
      <BottomNav />
    </main>
  )
}

export default App
