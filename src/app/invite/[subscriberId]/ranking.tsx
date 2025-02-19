import Image from 'next/image'
import React from 'react'

import { getRanking } from '@/http/api'
import medalCooper from '../../../assets/medal-cooper.svg'
import medalGold from '../../../assets/medal-gold.svg'
import medalSilver from '../../../assets/medal-silver.svg'

export const Ranking = async () => {
  const { ranking } = await getRanking()
  console.log("Ranking ", ranking)

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <div key={item.id} className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-between gap-2">
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> | {item.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              {rankingPosition === 1 && <Image src={medalGold} alt="" className="absolute right-8 top-0" />}
              {rankingPosition === 2 && <Image src={medalSilver} alt="" className="absolute right-8 top-0" />}
              {rankingPosition === 3 && <Image src={medalCooper} alt="" className="absolute right-8 top-0" />}
            </div>
          )
        })}


      </div>
    </div>
  )
}
