import Image from 'next/image'
import NlwLogo from '../../assets/Logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={NlwLogo} alt="Logo Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt font-bold text-black hover:bg-green-400"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
