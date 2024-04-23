'use client'

import { Images } from 'lucide-react'
import { MediaPicker } from './MediaPicker'
import { FormEvent } from 'react'
import Cookies from 'js-cookie'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

export function NewMemoryForm() {
  const Router = useRouter()

  async function handdleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverUrl')

    let coverUrl = ''

    if (fileToUpload) {
      const uplaodFormData = new FormData()
      uplaodFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uplaodFormData)

      coverUrl = uploadResponse.data.fileUrl
    }

    const token = Cookies.get('token')

    await api.post(
      '/memories',
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    Router.push('/')
  }

  return (
    <form onSubmit={handdleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex gap-4">
        <div className="flex cursor-pointer items-center gap-[6px] text-sm text-gray-200 hover:text-gray-100">
          <Images className="h4 w-4" />
          <label htmlFor="midia" className="cursor-pointer">
            Anexar mídia
          </label>
        </div>

        <div className="flex items-center gap-[6px] text-sm text-gray-200 hover:text-gray-100">
          <input
            type="checkbox"
            name="ispublic"
            id="ispublic"
            className="rounded border-2 border-gray-400 bg-gray-700 checked:bg-purple-600"
          />
          <label htmlFor="ispublic">Tornar memória pública</label>
        </div>
      </div>

      <MediaPicker />

      <textarea
        className="w-full flex-1 resize-none border-none bg-transparent p-0 text-lg leading-relaxed text-gray-100 outline-none ring-0 placeholder:text-gray-400"
        name="content"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />

      <button className="mr-0 inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt font-bold text-black hover:bg-green-400">
        Salvar
      </button>
    </form>
  )
}
