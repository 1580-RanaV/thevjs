import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <div>
        <div className="mt-10 text-center text-neutral-200">
          <p className="text-sm sm:text-base">
            See more builds on{' '}
            <Link href="/work" className="font-semibold underline">
              work
            </Link>{' '}
            or reach me via{' '}
            <Link href="/contact" className="font-semibold underline">
              contact
            </Link>
            .
          </p>
        </div>
    </div>
  )
}

export default Cta
