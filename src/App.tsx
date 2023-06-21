import { api } from './api'
import { useEffect, useState } from 'react'
import { User } from './types/user'

export default function Example() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: users } = await api.get('/users')
      setUsers(users)
    }

    fetchUsers()
  }, [])

  return (
    <ul className="divide-y divide-gray-200">
      {users.map((user) => (
        <li key={user.email} className="py-4 flex">
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
