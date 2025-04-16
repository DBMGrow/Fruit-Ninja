import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Highscores {
  created_at: Generated<Date | null>;
  email: string;
  highscore_id: Generated<number>;
  location_id: number;
  score: number;
  updated_at: Generated<Date | null>;
}

export interface Locations {
  created_at: Generated<Date | null>;
  location_id: Generated<number>;
  name: string;
  password: string;
  updated_at: Generated<Date | null>;
}

export interface DB {
  Highscores: Highscores;
  Locations: Locations;
}
