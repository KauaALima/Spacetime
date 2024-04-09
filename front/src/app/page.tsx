import { User } from 'lucide-react'
import Image from 'next/image'
import NlwLogo from '../assets/Logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a href="" className="flex items-center gap-3 hover:text-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ">
            <User size={20} className="text-gray-500" />
          </div>

          <p className="max-w-[140px] items-start text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        <div className="space-y-5">
          <Image src={NlwLogo} alt="Logo Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt font-bold text-black hover:bg-green-400"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-200">
            Feito com 💜 no NLW da Rocketseat
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center p-16">
          <p className="w-[350px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="#" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
