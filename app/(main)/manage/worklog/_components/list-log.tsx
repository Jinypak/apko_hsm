import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Props = {};

const dummyData = [
  {
    weeklyIndex: 1,
    date: '2024-10',
    weeklyData: [
      {
        id: 1,
        status: 'publish',
        user: 'kim',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
      {
        id: 2,
        status: 'publish',
        user: 'park',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
      {
        id: 3,
        status: 'publish',
        user: 'choi',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
    ],
  },
  {
    weeklyIndex: 2,
    date: '2024-10',
    weeklyData: [
      {
        id: 1,
        status: 'publish',
        user: 'kim',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
      {
        id: 2,
        status: 'publish',
        user: 'park',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
      {
        id: 3,
        status: 'publish',
        user: 'choi',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
    ],
  },
  {
    weeklyIndex: 3,
    date: '2024-10',
    weeklyData: [
      {
        id: 1,
        status: 'publish',
        user: 'kim',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
      {
        id: 2,
        status: 'publish',
        user: 'park',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
      {
        id: 3,
        status: 'publish',
        user: 'choi',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
    ],
  },
  {
    weeklyIndex: 4,
    date: '2024-10',
    weeklyData: [
      {
        id: 1,
        status: 'publish',
        user: 'kim',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
      {
        id: 2,
        status: 'publish',
        user: 'park',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
      {
        id: 3,
        status: 'publish',
        user: 'choi',
        dataList: [
          { index: 1, category: 'log', textData: '주간 업무 보고 테스트1' },
          { index: 2, category: 'as', textData: '주간 업무 보고 테스트2' },
          { index: 3, category: 'test', textData: '주간 업무 보고 테스트3' },
        ],
      },
    ],
  },
];

const ListLog = (props: Props) => {
  return (
    <div className="w-[500px]">
      <Accordion type="single" collapsible className="max-w-[500px]">
        {dummyData.map((i) => (
          <AccordionItem value={`item-${i.weeklyIndex}`} key={i.weeklyIndex}>
            <AccordionTrigger>{`${
              i.date.split('-')[1]
            }월 주차`}</AccordionTrigger>
            {i.weeklyData.map((j) => (
              <AccordionContent className="flex justify-between p-2" key={j.id}>
                <div className="">{j.user}</div>
                <div>
                  {j.dataList.map((z) => (
                    <div key={z.index}>{z.textData}</div>
                  ))}
                </div>
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ListLog;
