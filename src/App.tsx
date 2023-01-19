import { url } from "inspector"
import { useEffect, useState } from "react"
import "./App.css"
import { Badges } from "./types/badgesTypes"
import { Chapter, Data, Datum } from "./types/chaptersTypes"
import { City } from "./types/cityType"

function App() {
  const [data, setData] = useState<Badges[]>([])
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [progress, setProgress] = useState<Datum[]>([])

  useEffect(() => {
    const fetchBarges = async () => {
      const response = await fetch(
        "https://cms.travpromobile.com/api/app/training?app_id=1150"
      )
      const data = (await response.json()) as Badges[]
      setData(data)
    }

    const fetchChapters = async () => {
      const response = await fetch(
        "https://progress.travpromobile.com/progress_user_v2/?email=chrisvanworkum@gmail.com&app_id=787"
      )
      const data = (await response.json()) as Data
      setChapters(data.data[0].chapters)
    }

    const fetchProgress = async () => {
      const response = await fetch(
        "https://progress.travpromobile.com/progress_user_v2/?email=chrisvanworkum@gmail.com&app_id=787"
      )
      const data = (await response.json()) as Datum[]
      setProgress(data)
    }

    const fetchCities = async () => {
      const response = await fetch(
        "https://cms.travpromobile.com/api/app/training?app_id=1150"
      )
      const data = (await response.json()) as City[]
      setCities(data)
    }

    fetchCities()
    fetchProgress()
    fetchChapters()
    fetchBarges()
  }, [])

  const firstFourChapters = chapters.slice(0, 4)

  const totalCompletedChapters = chapters.filter(
    (chapter) => chapter.progress === chapter.total_pages
  ).length

  const openBronze =
    firstFourChapters.filter(
      (chapter) => chapter.progress === chapter.total_pages
    ).length >= 3

  const openSilver = totalCompletedChapters >= 9

  const showCertificate = openBronze && openSilver

  console.log(openSilver)
  console.log(openBronze)

  if (data.length === 0) return <div>Loading...</div>

  return (
    <div className="App">
      {/* badges */}

      <div className="badges">
        {data?.map((badge, i) => (
          <div className="badge" key={badge.id}>
            <h2
              style={{
                color: "blue",
                fontSize: "2rem",
                textAlign: "center",
                margin: "10px",
                marginBottom: "0",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              {`${i + 1} . ${badge.title}`}
            </h2>
            {badge.sessions?.map((session) => (
              <div
                className="session"
                style={{
                  backgroundClip: "border-box",
                  height: "400px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundImage: `url(${session.background_image})`,
                  backgroundOrigin: "padding-box",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  border: "1px solid #000",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                key={session.id}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    textAlign: "center",
                    margin: "10px",
                    marginBottom: "0",
                    background: "rgba(0,0,0,0.5)",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  {session.title}
                </p>
                <img
                  src={session.icon}
                  alt=""
                  style={{
                    width: "30%",
                    height: "auto",
                    background: session.icon ? "rgba(0,0,0,0.5)" : "none",
                    padding: "20px",
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* chapters */}
      {/* <div className="chapters">
        {chapters?.map((chapter) => {
          return (
            <div className="chapter" key={chapter.chapter}>
              <p>{chapter.chapter}</p>
              <p>{chapter.progress + "/" + chapter.total_pages}</p>
            </div>
          )
        })}
      </div> */}

      {/* cities */}
      {/* <div className="cities">
        {cities?.map((city) => {
          return (
            <div className="city" key={city.id}>
              <p>{city.title}</p>
              {city.sessions?.map((session) => (
                <div className="session" key={session.id}>
                  <p>{session.title}</p>
                </div>
              ))}
            </div>
          )
        })}
      </div> */}

      {/* progress */}
      {/* <div className="progress">
        {progress?.map((datum) => {
          return (
            <div className="datum" key={datum.app_id}>
              <p>{datum.name}</p>
              {datum.chapters?.map((chapter) => (
                <div className="chapter" key={chapter.chapter}>
                  <p>{chapter.chapter}</p>
                  <p>{chapter.progress + "/" + chapter.total_pages}</p>
                </div>
              ))}
            </div>
          )
        })}
      </div> */}

      {/* certificate */}
      <div className="certificate">
        {showCertificate ? "show certificate" : "no certificate"}
      </div>
    </div>
  )
}

export default App
