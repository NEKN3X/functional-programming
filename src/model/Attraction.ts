import { type Option } from "fp-ts/lib/Option.js"

import type Location from "~/model/Location"

type Attraction = {
  name: string
  description: Option<string>
  location: Location
}

export default Attraction
