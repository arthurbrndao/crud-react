import { api } from './api'
import { useEffect, useState } from 'react'
import { User } from './types/user'
import Skeleton from 'react-loading-skeleton'

export default function Example() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const { data: users } = await api.get('/users')
      setUsers(users)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    console.log(loading)
  }, [loading])

  return (
    <div className="mt-4 mx-8">
      {loading && (
        <>
          <div>
            <Skeleton count={2} enableAnimation />
          </div>
          <div className="mt-3">
            <Skeleton count={2} enableAnimation />
          </div>
        </>
      )}

      <ul className="divide-y divide-gray-200">
        {!loading &&
          users.length > 0 &&
          users.map((user) => (
            <li key={user.email} className="py-4 flex transition-all">
              <div className="">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
