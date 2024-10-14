'use client';

import { signIn } from 'next-auth/react';
import { Button } from './ui/button';

export default function SignIn({ option = '' }) {
  return <Button onClick={() => signIn(option)}>Sign In</Button>;
}
