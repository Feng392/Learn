

interface Arr12Item {
  label: string;
  id: string;
  children?: Arr12Item[];
}

const arr12: Arr12Item[] = [
  {
    label: '标题一',
    id: '1',
    children: [
      {
          label: '标题1.1',
          id: '1-1',
      },
      {
          label: '标题1.2',
          id: '1-2',
      },
    ],
  },
]

