import React, { FC } from 'react'
import SearchCard from '@/ui/SearchCard'
import styles from "@/app/search/page.module.scss"

const data = ['1', '2', '3', '4', '5']

type Props = {}

const SearchPage: FC = (props: Props) => {
  return (
    <div className={styles.search_wrapper}>
      {data.map(item => (
        <SearchCard key={`1`} />
      ))}
    </div>
  )
}

export default SearchPage