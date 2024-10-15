import { auth } from '@/auth';
import React from 'react';
import WriteLog from './_components/write-log';
import ListLog from './_components/list-log';

type Props = {};

const WorkLogPage = async (props: Props) => {
  const session = await auth();

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="py-4">
        <h1>업무 보고 등록 페이지</h1>
        <p>접속자 : {session?.user ? session?.user?.name : 'null'}</p>
      </div>
      <div className="flex justify-between">
        <div className="">
          <ListLog />
        </div>
        <div className="">
          <WriteLog username={session?.user?.name} />
        </div>
      </div>
    </div>
  );
};

export default WorkLogPage;
