import { ref } from 'vue';

export function useProjectData() {

  const data = ref([
    {
      id: '1',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Fexpense-tracker.png?alt=media&token=36853b99-6dae-4f4a-97c7-8d628c09c3e0',
      title: 'Expense Tracker Application',
      path: 'https://expensetracker-ariel.netlify.app/',
      category: 'Application',
    },
    {
      id: '2',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Ftodoapp-project-mockup.png?alt=media&token=fe3be453-65e9-49bd-8eb8-6239e1295fe3',
      title: 'Simple ToDo Application',
      path: 'https://todoapp-ariel.netlify.app/',
      category: 'Application',
    },
    {
      id: '3',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Fwest-island-digital-project.png?alt=media&token=93c91612-20d6-4be1-b4bd-551fc4aee936',
      title: 'West Island Digital',
      path: 'https://westislanddigital.com/',
      category: 'Web Development',
    },
    {
      id: '4',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Ffixsellpay-mockup.png?alt=media&token=d6f8aa80-e7b3-480f-b8ab-9d0d97df7743',
      title: 'FixSellPay',
      path: 'https://www.fixsellpay.com.au/',
      category: 'Web Development',
    },
    {
      id: '5',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Fiphone-x-mockup.png?alt=media&token=54c17648-d149-4fcb-9e6c-36471711f85e',
      title: 'Swapifine',
      path: 'https://www.swapifine.com/',
      category: 'Application',
    },
    {
      id: '6',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Fmodern-laptop-mockup-with-airpods.png?alt=media&token=61f8be7c-222f-4ff3-9f21-e4681202f249',
      title: 'Sola Finance',
      path: 'https://solafinance.com.au/',
      category: 'Web Development',
    },
  ])

  return {
    data,
  }
}