'use client'

import EditMemoryForm from '@/app/components/EditMemoryForm'
import Link from 'next/link'
import { ChevronLeft, FilePenLine } from 'lucide-react'
import { useState } from 'react'

import Image from 'next/image'

interface Props {
  content: string
  coverUrl: string
}

export function ReadAndEditMemory({ content, coverUrl }: Props) {
  const [isedit, setIsEdit] = useState(false)

  function handdleEdit() {
    setIsEdit(true)
  }

  if (!isedit) {
    return (
      <div className="flex flex-col space-y-5 p-8">
        <div className="flex justify-between">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
          >
            <ChevronLeft className="h-4 w-4" />
            voltar à timeline
          </Link>

          <Link
            href=""
            onClick={handdleEdit}
            className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
          >
            <FilePenLine className="h-4 w-4" />
            Editar
          </Link>
        </div>

        <Image
          src={coverUrl}
          alt=""
          width={520}
          height={280}
          className="aspect-video w-full rounded-lg object-cover"
        />

        <p className="text-lg leading-relaxed text-gray-100">{content}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-8  ">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <EditMemoryForm />
    </div>
  )
}
