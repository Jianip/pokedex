import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Tipos } from '../Tipos/tipos';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "tipos" },
    { name: "description", content: "tipos de pokemons" },
  ];
}

export default function type() {
  return <Tipos />;
}
