import { type IO } from "fp-ts/IO"

import type Artist from "~/model/Artist"
import type Attraction from "~/model/Attraction"
import type Movie from "~/model/Movie"

import { type LocationId } from "~/model/Location"

export type findArtistsFromLocation = (
  locationId: LocationId,
  limit: number
) => IO<ReadonlyArray<Artist>>

export type findMoviesAboutLocation = (
  locationId: LocationId,
  limit: number
) => IO<ReadonlyArray<Movie>>

export type AttractionOrdering = "ByName" | "ByLocationPopulation"

export type findAttractions = (
  name: string,
  ordering: AttractionOrdering,
  limit: number
) => IO<ReadonlyArray<Attraction>>
