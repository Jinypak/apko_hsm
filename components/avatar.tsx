import Image from 'next/image';
import { auth } from '../auth';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user?.image) return null;

  return (
    <div>
      <Image
        src={session?.user?.image}
        alt="User Avatar"
        width={30}
        height={30}
        className="rounded-full"
      />
    </div>
  );
}
