import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ">
        <Image
          src={avatarUrl}
          width={40}
          height={40}
          alt="Imagem do Usuario"
          className="h-10 w-10 rounded-full"
        />
      </div>

      <p className="max-w-[140px] items-start text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
