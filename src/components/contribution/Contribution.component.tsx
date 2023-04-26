import {useEffect} from 'react'
import useSWR from 'swr'

const Contribution = (props: any) => {
  const headers = {
    Authorization: `bearer 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`,
  }
  const query = {
    query: `query {
            user(login: fauzani96) {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
  }

  const fetcher = async (url: string) => {
    return await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({query}),
    })
  }

  const {data, error} = useSWR('https://api.github.com/graphql', fetcher)

  if (error) <p>Loading failed...</p>
  if (!data) <h1>Loading...</h1>

  console.log(data, error)

  //   useEffect(() => {
  //     async function getContributions(token: string, username: any) {}

  //     getContributions(
  //       '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',
  //       'fauzani96'
  //     ).then((res) => console.log({res}))
  //   }, [])
  return <h1>contrib</h1>
}

export default Contribution
