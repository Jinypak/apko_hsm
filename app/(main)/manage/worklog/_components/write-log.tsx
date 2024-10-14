'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const FormSchema = z.object({
  text: z.string().min(1, {
    message: 'Input이 비어있습니다.',
  }),
});

type Props = {
  username: any;
};

const dummyInputData = [
  {
    id: 1,
    user: 'kim',
    status: 'im',
    category: 'log',
    textData: '주간 업무 보고 테스트4',
  },
  {
    id: 2,
    user: 'kim',
    status: 'publish',
    category: 'log',
    textData: '주간 업무 보고 테스트5',
  },
];

const WriteLog = ({ username }: Props) => {
  const [inputLog, setInputLog] = useState(dummyInputData);

  const handleInput = async () => {
    const fetchTest = await fetch('/api/manage', {
      method: 'GET',
    });

    const data = fetchTest.json().then((r) => r.response);

    console.log(data);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      text: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setInputLog([
      ...inputLog,
      {
        id: inputLog.length + 1,
        user: username,
        textData: data.text,
        category: 'test',
        status: 'im',
      },
    ]);
  }

  return (
    <div className="w-[500px] p-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 py-2">
          {inputLog.map((i) => (
            <div key={i.id}>{i.textData}</div>
          ))}
        </div>
        <div className="flex justify-between gap-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex justify-between items-center gap-4 w-full py-2"
            >
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="작업에 대하여 작성..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">작성</Button>
            </form>
          </Form>
        </div>
        <Button onClick={handleInput}>업로드</Button>
      </div>
    </div>
  );
};

export default WriteLog;
