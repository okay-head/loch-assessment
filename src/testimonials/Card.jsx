import React from 'react'

export default function Card({title, subtitle, body, classVars='min-w-[350px]'}) {
  return (
    // Only the height is fixed ~ 136px + padding/2
    // padding - 20px 
    // fixing the width to 350px or 100% whichever is smaller
    <article className={`p-5 bg-white rounded-xl h-[156px] ${classVars}`}>
      <div className="card-title flex gap-2 items-center font-semibold pb-5">
        <h3>{title}</h3>
        <h4 className='text-[var(--text-tertiary)] text-[13px] font-medium'>{subtitle}</h4>
      </div>
      <div className="card-body font-medium">
      {body}
      </div>
    </article>
  )
}
