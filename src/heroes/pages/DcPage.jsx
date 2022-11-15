
import { HeroList } from "../components"

export const DcPage = () => {
  return (
    <div className="my-4">
      <h1>DC Comics</h1>

      <hr />
      <HeroList publisher={'DC Comics'}/>
    </div>
  )
}
