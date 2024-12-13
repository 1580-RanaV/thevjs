import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <div>
        <div className="mt-8 text-neutral-600 text-center">
          <p className="text-sm sm:text-base">
            Head to{' '}
            <Link href="/work" className="font-semibold underline">
              work
            </Link>{' '}
            to view all my works, or contact me at{' '}
            <Link href="/contact" className="font-semibold underline">
              contact
            </Link>{' '}
            for any queries or business.
          </p>
        </div>
    </div>
  )
}

export default Cta