import { ref } from 'vue';

export function useProjectData() {

  const data = ref([
    {
      id: '1',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      title: 'Project 1',
      path: 'https://www.arielbatoon.com/',
      category: 'Web Development',
    },
    {
      id: '2',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      title: 'Project 2',
      path: 'https://www.arielbatoon.com/',
      category: 'Web Development',
    },
    {
      id: '3',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      title: 'Project 3',
      path: 'https://www.arielbatoon.com/',
      category: 'Web Development',
    },
    {
      id: '4',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      title: 'Project 4',
      path: 'https://www.arielbatoon.com/',
      category: 'Application',
    },
    {
      id: '5',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      title: 'Project 5',
      path: 'https://www.arielbatoon.com/',
      category: 'Application',
    },
    {
      id: '6',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      title: 'Project 6',
      path: 'https://www.arielbatoon.com/',
      category: 'Application',
    },
  ])

  return {
    data,
  }
}