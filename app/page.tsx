import { Geist } from 'next/font/google'
import { Metadata } from 'next'

const geist = Geist({
  subsets: ['latin'],
  weight: ['600'],
})

export const metadata: Metadata = {
  title: 'MAFWBH Links',
  description: 'A collection of MAFWBH links',
}

export default function HomePage() {
  const links = [
    'jazz-mafwbh.vercel.app',
    'trinity-mafwbh.vercel.app',
    'trinity2-mafwbh.vercel.app',
    'mix-mafwbh.vercel.app',
    'travis-mafwbh.vercel.app',
    'ye-mafwbh.vercel.app'
  ]

  return (
    <main className={`min-h-screen flex flex-col bg-black ${geist.className}`}>
      <div className="w-full bg-black text-gray-300 text-center py-2">
        MAFWBH.GITHUB.IO
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <nav className="space-y-1">
            {links.map((link) => (
              <a
                key={link}
                href={`https://${link}`}
                className="block text-center py-1 text-xl text-white transition-all duration-300 hover:blur-sm"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="w-full bg-black text-gray-300 text-center py-2">
        BLOHO, Inc (bloho.github.io)
      </div>
    </main>
  )
}

