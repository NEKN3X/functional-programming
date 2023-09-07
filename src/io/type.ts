import { type IO } from "fp-ts/IO"

import type Artist from "~/model/Artist"
import Attraction from "~/model/Attraction"

import { type LocationId } from "~/model/Location"
import Movie from "~/model/Movie"

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
