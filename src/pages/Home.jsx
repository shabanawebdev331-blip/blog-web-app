import React from 'react'
import Hero from '../components/Home/Hero'
import Card from '../components/Home/Card'
import CategoryList from '../components/Home/CategoryList';

const Home = () => {
  const blogs = [
    // Lifestyle
    {
      title: "10 Simple Habits for a Happier Life",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      date: "2026-09-11",
      category: "Lifestyle"
    },
    {
      title: "How to Build a Productive Morning Routine",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      date: "2026-09-10",
      category: "Lifestyle"
    },
    {
      title: "The Art of Minimalist Living",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
      date: "2026-09-09",
      category: "Lifestyle"
    },
    {
      title: "Tips for Maintaining a Healthy Work-Life Balance",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
      date: "2026-09-08",
      category: "Lifestyle"
    },
    {
      title: "How to Stay Motivated Every Day",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      date: "2026-09-07",
      category: "Lifestyle"
    },
    {
      title: "The Benefits of Spending Time in Nature",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      date: "2026-09-06",
      category: "Lifestyle"
    },
    {
      title: "How to Create a Peaceful Home",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      date: "2026-09-05",
      category: "Lifestyle"
    },
    {
      title: "Simple Ways to Improve Your Personal Style",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      date: "2026-09-04",
      category: "Lifestyle"
    },
    {
      title: "Why Self-Care Is Important",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      date: "2026-09-03",
      category: "Lifestyle"
    },
    {
      title: "How to Develop a Positive Mindset",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618",
      date: "2026-09-02",
      category: "Lifestyle"
    },

    // Travel
    {
      title: "10 Beautiful Places to Visit in Pakistan",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      date: "2026-09-01",
      category: "Travel"
    },
    {
      title: "The Ultimate Guide to Planning Your First Trip",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
      date: "2026-08-31",
      category: "Travel"
    },
    {
      title: "Best Travel Destinations for Adventure Lovers",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      date: "2026-08-30",
      category: "Travel"
    },
    {
      title: "How to Travel on a Budget",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      date: "2026-08-29",
      category: "Travel"
    },
    {
      title: "Essential Things to Pack for Your Next Trip",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      date: "2026-08-28",
      category: "Travel"
    },
    {
      title: "Exploring the Hidden Gems of Northern Pakistan",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
      date: "2026-08-27",
      category: "Travel"
    },
    {
      title: "Tips for Traveling Alone for the First Time",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
      date: "2026-08-26",
      category: "Travel"
    },
    {
      title: "The Best Beaches Around the World",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      date: "2026-08-25",
      category: "Travel"
    },
    {
      title: "How to Make Your Travel Experience Memorable",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
      date: "2026-08-24",
      category: "Travel"
    },
    {
      title: "A Beginner's Guide to International Travel",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      date: "2026-08-23",
      category: "Travel"
    },

    // Technology
    {
      title: "The Future of Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      date: "2026-08-22",
      category: "Technology"
    },
    {
      title: "10 Essential JavaScript Tips for Beginners",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      date: "2026-08-21",
      category: "Technology"
    },
    {
      title: "How to Build Your First Website",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "2026-08-20",
      category: "Technology"
    },
    {
      title: "Understanding Cloud Computing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      date: "2026-08-19",
      category: "Technology"
    },
    {
      title: "The Rise of Smart Home Technology",
      image: "https://images.unsplash.com/photo-1558008258-3256797b43f3",
      date: "2026-08-18",
      category: "Technology"
    },
    {
      title: "Best Programming Languages to Learn",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      date: "2026-08-17",
      category: "Technology"
    },
    {
      title: "How Cybersecurity Protects Your Data",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      date: "2026-08-16",
      category: "Technology"
    },
    {
      title: "The Impact of Technology on Education",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      date: "2026-08-15",
      category: "Technology"
    },
    {
      title: "What Is Machine Learning?",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
      date: "2026-08-14",
      category: "Technology"
    },
    {
      title: "The Future of Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "2026-08-13",
      category: "Technology"
    },

    // Business
    {
      title: "How to Start a Small Business",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      date: "2026-08-12",
      category: "Business"
    },
    {
      title: "10 Profitable Online Business Ideas",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      date: "2026-08-11",
      category: "Business"
    },
    {
      title: "The Importance of Digital Marketing",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
      date: "2026-08-10",
      category: "Business"
    },
    {
      title: "How to Build a Successful Brand",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      date: "2026-08-09",
      category: "Business"
    },
    {
      title: "Tips for Managing Your Business Finances",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      date: "2026-08-08",
      category: "Business"
    },
    {
      title: "How to Improve Customer Satisfaction",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      date: "2026-08-07",
      category: "Business"
    },
    {
      title: "The Future of E-Commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      date: "2026-08-06",
      category: "Business"
    },
    {
      title: "How to Create a Winning Business Strategy",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      date: "2026-08-05",
      category: "Business"
    },
    {
      title: "Essential Skills Every Entrepreneur Needs",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      date: "2026-08-04",
      category: "Business"
    },
    {
      title: "How to Grow Your Business Online",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      date: "2026-08-03",
      category: "Business"
    },

    // Health
    {
      title: "10 Simple Habits for a Healthier Life",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
      date: "2026-08-02",
      category: "Health"
    },
    {
      title: "The Importance of Drinking Enough Water",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
      date: "2026-08-01",
      category: "Health"
    },
    {
      title: "How to Improve Your Sleep Quality",
      image: "https://images.unsplash.com/photo-1515894203077-9cd36032142f",
      date: "2026-07-31",
      category: "Health"
    },
    {
      title: "Benefits of Regular Exercise",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      date: "2026-07-30",
      category: "Health"
    },
    {
      title: "Healthy Eating Habits for Beginners",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      date: "2026-07-29",
      category: "Health"
    },
    {
      title: "How to Manage Daily Stress",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      date: "2026-07-28",
      category: "Health"
    },
    {
      title: "Why Mental Health Matters",
      image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118",
      date: "2026-07-27",
      category: "Health"
    },
    {
      title: "Simple Ways to Stay Active at Home",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      date: "2026-07-26",
      category: "Health"
    },
    {
      title: "The Benefits of Walking Every Day",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
      date: "2026-07-25",
      category: "Health"
    },
    {
      title: "How to Build a Balanced Lifestyle",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      date: "2026-07-24",
      category: "Health"
    }
  ];
  return (
    <>
      <Hero />
    <CategoryList />
      <section className='p-10 bg-secondary'>
        <h2 className='md:text-4xl text-2xl font-semibold'>Latest Blog</h2>
        <hr />
        <div className='flex justify-center gap-10 flex-wrap'>
            <Card />
        </div>
      </section>
    </>
  )
}

export default Home
