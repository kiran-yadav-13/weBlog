import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../components'
import authService from '../appwrite/auth'

export default function Profile(){
  const user = useSelector((s) => s.auth.userData)

  if (!user) return (
    <div className="page-bg min-h-[60vh] flex items-center justify-center">
      <p className="text-center">You need to be logged in to view your profile.</p>
    </div>
  )

  return (
    <div className="page-bg min-h-[60vh] py-12">
      <div className="max-w-3xl mx-auto surface-bg rounded-xl p-8 shadow-soft-lg">
        <h2 className="text-2xl font-serif mb-4">Your Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-aurora-muted">Name</p>
            <p className="text-lg font-medium text-aurora-text">{user.name || user.$id}</p>
          </div>
          <div>
            <p className="text-aurora-muted">Email</p>
            <p className="text-lg font-medium text-aurora-text">{user.email}</p>
          </div>
          <div>
            <p className="text-aurora-muted">Created</p>
            <p className="text-sm text-aurora-text">{user.$createdAt}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button onClick={() => window.location.reload()}>Refresh</Button>
          <Button onClick={async () => { await authService.logout(); window.location.href = '/'; }} bgColor="bg-red-500">Logout</Button>
        </div>
      </div>
    </div>
  )
}
