import { ref } from 'vue';

export function useProjectData() {

  const data = ref([
    {
      id: '1',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1x9OIYbkSUt2Fg6WV77HdPfiuoJf8na1G',
      title: 'Expense Tracker Application',
      path: 'https://expensetracker-ariel.netlify.app/',
      category: 'Application',
    },
    {
      id: '2',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1bLogl4BP8ZAfs6Z-qfWA-kWpURQHiUD3',
      title: 'Simple ToDo Application',
      path: 'https://todoapp-ariel.netlify.app/',
      category: 'Application',
    },
    {
      id: '3',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1dlE1AFciZjxye6q9BccdpAzeklUTZEPu',
      title: 'West Island Digital',
      path: 'https://westislanddigital.com/',
      category: 'Web Development',
    },
    {
      id: '4',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1lfzyqB_bCRPi6blHAhLLSUABY95QUeLG',
      title: 'FixSellPay',
      path: 'https://www.fixsellpay.com.au/',
      category: 'Web Development',
    },
    {
      id: '5',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1B-QF1K9U1coakYhuzrMpKKCSZgqZEc2W',
      title: 'Swapifine',
      path: 'https://www.swapifine.com/',
      category: 'Application',
    },
    {
      id: '6',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1swr9glf4xoGow5a1FdvXoVhj8T_iqN0X',
      title: 'Sola Finance',
      path: 'https://solafinance.com.au/',
      category: 'Web Development',
    },
  ])

  return {
    data,
  }
}