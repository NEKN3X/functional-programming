import { type IO } from "fp-ts/IO"

import type Artist from "~/model/Artist"

import { type LocationId } from "~/model/Location"

export type findArtistsFromLocation = (
  locationId: LocationId,
  limit: number
) => IO<ReadonlyArray<Artist>>
