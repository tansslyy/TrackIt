import { useState } from "react";
import styles from "./HomePage.module.css";
import { useAuth } from "../../context/AuthContext";
import { Navbar } from "../../components/Layout/Navbar/Navbar";
import { AuthHome } from "./AuthHome";
import { GuestHome } from "./GuestHome";

const translations = {
  ua: {
    heroGuest: {
      title: "Твій успіх\nу маленьких кроках",
      desc: "Забудь про мотивацію — покладайся на дисципліну...",
      btn: "Створити акаунт безкоштовно",
      badges: ["📈 Статистика", "🔔 Нагадування", "🔥 Стріки"],
      features: {
        title: "Чому TrackIt?",
        items: [
          {
            icon: "🎯",
            title: "Фокус на дисципліні",
            desc: "Не чекай мотивації...",
          },
          {
            icon: "📊",
            title: "Наочна статистика",
            desc: "Бачи свій прогрес...",
          },
          {
            icon: "⚡",
            title: "Простота використання",
            desc: "Ніяких зайвих функцій...",
          },
        ],
      },
    },
    heroAuth: {
      title: "Раді бачити тебе знову!",
      desc: "Сьогодні ідеальний день, щоб продовжити свою серію...",
      btnDashboard: "Мій день",
      btnHabits: "Керування звичками",
      stats: {
        streak: "Поточний стрік",
        habits: "Активних звичок",
        completion: "Завершено",
      },
    },
    mockups: {
      run: "Ранкова пробіжка",
      water: "Пити воду",
      read: "Читання",
      progress: "Прогрес",
      days: "днів",
      today: "Сьогодні",
      status: "Статус",
      done: "Виконано!",
    },
    quickAction: {
      title: "Звичка дня",
      doneBtn: "Виконати зараз",
      allDone: "Всі звички на сьогодні виконано! 🎉",
    },
    social: {
      title: "Що кажуть користувачі",
      users: [
        {
          name: "Олена К.",
          role: "Frontend Dev",
          text: "TrackIt допоміг мені вивчити React. Стріки реально мотивують!",
        },
        {
          name: "Макс П.",
          role: "Designer",
          text: "Найчистіший інтерфейс, який я бачив.",
        },
        {
          name: "Анна С.",
          role: "Student",
          text: "Використовую для підготовки до іспитів.",
        },
      ],
    },
    faq: {
      title: "Часті питання",
      items: [
        { q: "Чи це безкоштовно?", a: "Так, TrackIt повністю безкоштовний." },
        { q: "Чи є мобільний додаток?", a: "Сайт працює як додаток (PWA)." },
        {
          q: "Як працюють стріки?",
          a: "Виконуйте звички щодня, щоб збільшувати стрік.",
        },
      ],
    },
  },
  en: {
    heroGuest: {
      title: "Build habits\nthat actually stick",
      desc: "Stop relying on willpower alone...",
      btn: "Start Tracking — It's Free",
      badges: ["📈 Insights", "🔔 Reminders", "🔥 Streaks"],
      features: {
        title: "Why TrackIt?",
        items: [
          {
            icon: "🎯",
            title: "Focus on Discipline",
            desc: "Don't wait for motivation...",
          },
          {
            icon: "📊",
            title: "Visual Analytics",
            desc: "See your progress...",
          },
          { icon: "⚡", title: "Dead Simple", desc: "No bloat..." },
        ],
      },
    },
    heroAuth: {
      title: "Welcome back!",
      desc: "Your streak is waiting...",
      btnDashboard: "My Dashboard",
      btnHabits: "Manage Habits",
      stats: {
        streak: "Current Streak",
        habits: "Active Habits",
        completion: "Completed Today",
      },
    },
    mockups: {
      run: "Morning Run",
      water: "Hydration",
      read: "Reading",
      progress: "Streak",
      days: "days",
      today: "Today",
      status: "Status",
      done: "Done!",
    },
    quickAction: {
      title: "Habit of the Day",
      doneBtn: "Complete Now",
      allDone: "All habits completed today! 🎉",
    },
    social: {
      title: "What users say",
      users: [
        {
          name: "Elena K.",
          role: "Frontend Dev",
          text: "Streaks really motivate me!",
        },
        {
          name: "Max P.",
          role: "Designer",
          text: "The cleanest interface I've seen.",
        },
        {
          name: "Anna S.",
          role: "Student",
          text: "Very convenient to see progress.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Is it free?", a: "Yes, fully free." },
        { q: "Mobile app?", a: "It works as PWA." },
        { q: "How streaks work?", a: "Complete daily to increase streak." },
      ],
    },
  },
};

const HomePage = () => {
  const { isAuth } = useAuth();
  const [lang] = useState<"en" | "ua">("en");
  const t = translations[lang];

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        {isAuth ? <AuthHome t={t} /> : <GuestHome t={t} />}
      </main>

      <div className={styles.bgDecoration1}></div>
      <div className={styles.bgDecoration2}></div>
    </div>
  );
};

export default HomePage;
