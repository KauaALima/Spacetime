import { ReadAndEditMemory } from '@/app/components/ReadAndEditMemory'
import { api } from '@/lib/api'
import Cookies from 'js-cookie'

interface Memory {
  id: string
  coverUrl: string
  content: string
}

interface ParamsProps {
  params: {
    id: string
  }
}

export default async function Memory(props: ParamsProps) {
  const { id } = props.params
  const token = Cookies.get('token')
  const response = await api.get(`/memories/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  const memory: Memory = response.data

  return (
    <ReadAndEditMemory content={memory.content} coverUrl={memory.coverUrl} />
  )
}
