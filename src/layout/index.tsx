import { PropsWithChildren } from 'react'

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex h-auto py-6 px-10 font-light justify-between bg-gray-600 text-white items-center">
        <p className="text-3xl">Consulta</p>
        <button className="font-thin hover:text-slate-300 transition-all">
          Logout
        </button>
      </div>
      {children}
    </>
  )
}

export default Layout
