import { HeroList } from "../components"

export const MarvelPage = () => {

  return (
    <div className="my-4">
      <h1>Marvel Page</h1>
      <hr />

      <HeroList publisher={'Marvel Comics'}/>
    </div>
  )
}