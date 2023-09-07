import type Attraction from "~/model/Attraction"
import type PopCultureSubject from "~/model/PopCultureSubject"

type TravelGuide = {
  attraction: Attraction
  subjects: ReadonlyArray<PopCultureSubject>
}

export default TravelGuide
