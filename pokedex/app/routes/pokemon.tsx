import type { Route } from "./+types/home";
import  { Pokemon }  from "~/pokemon/pokemon";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "tipos" },
    { name: "description", content: "tipos de pokemons" },
  ];
}

export default function home() {
  return <Pokemon />;
}
