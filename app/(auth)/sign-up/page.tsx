'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z
    .string()
    .min(8, {
      message: '패스워드 최소 글자 수는 8이상 16이하로 해라',
    })
    .max(16, { message: '패스워드 최소 글자 수는 8이상 16이하로 해라' }),
});

export default function SignUpPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    await fetch('http://localhost:3000/api/hsm', {
      method: 'GET',
      //   body: { username: data.username, password: data.password },
    }).then((res) => console.log(res));

    toast({
      title: 'Sign Up TEST',
      description: (
        <div>
          <div>{data.username}</div>
          <div>{data.password}</div>
        </div>
      ),
    });
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-5xl w-[500px] max-h-screen border-2 gap-4 bg-white border-slate-800 rounded-md p-6 flex flex-col"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>아이디</FormLabel>
                <FormControl>
                  <Input placeholder="Input ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>패스워드</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Input Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end items-center py-4 gap-2">
            <Button type="submit" className="">
              회원가입
            </Button>
          </div>
          <div>
            <div>---</div>
            <div>Social 계정 테스트</div>
          </div>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}
