import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

const connectionString = `${process.env.DATABASE_URL}`;
if (!connectionString) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

const seedData = [
  {
    category: 'Health and Fitness',
    habits: [
      {
        name: 'Drink 2L of water',
        description: 'Stay hydrated throughout the day',
      },
      {
        name: 'Morning Jog',
        description: 'Light 15-20 min run to start the day',
      },
      { name: 'No Sugar', description: 'Avoid sweets and sugary drinks' },
      { name: 'Sleep 8 Hours', description: 'Go to bed before 11 PM' },
      {
        name: 'Take Vitamins',
        description: 'Daily supplements after breakfast',
      },
    ],
  },
  {
    category: 'Mindfulness',
    habits: [
      { name: 'Meditation', description: '10 minutes of guided meditation' },
      { name: 'Journaling', description: 'Write down thoughts or gratitude' },
      { name: 'Digital Detox', description: 'No screens 1 hour before bed' },
      {
        name: 'Breathing Exercises',
        description: 'Box breathing technique for 5 mins',
      },
    ],
  },
  {
    category: 'Productivity',
    habits: [
      {
        name: 'Read 20 Pages',
        description: 'Non-fiction or educational books',
      },
      {
        name: 'Plan the Day',
        description: 'Write down top 3 tasks for tomorrow',
      },
      {
        name: 'Learn a Language',
        description: 'Practice vocabulary for 15 mins',
      },
      {
        name: 'Deep Work',
        description: '60 mins of focused work without distractions',
      },
    ],
  },
  {
    category: 'Finance',
    habits: [
      {
        name: 'Track Expenses',
        description: 'Record all spending for the day',
      },
      { name: 'No Spend Day', description: 'Buy only essentials today' },
      {
        name: 'Save $10',
        description: 'Put small amount into savings account',
      },
    ],
  },
  {
    category: 'Social',
    habits: [
      {
        name: 'Call a Friend/Family',
        description: 'Stay in touch with loved ones',
      },
      { name: 'Compliment Someone', description: 'Spread positivity' },
    ],
  },
];

async function main() {
  for (const group of seedData) {
    const category = await prisma.category.upsert({
      where: { name: group.category },
      update: {},
      create: { name: group.category },
    });

    console.log(`Upserted category: ${category.name}`);

    for (const habitData of group.habits) {
      const existingHabit = await prisma.habit.findFirst({
        where: { name: habitData.name, isDefault: true },
      });
      if (!existingHabit) {
        await prisma.habit.create({
          data: {
            name: habitData.name,
            description: habitData.description,
            categoryId: category.id,
            isDefault: true,
          },
        });
      }
    }
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
