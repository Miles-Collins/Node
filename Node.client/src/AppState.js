import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  // MY HERO ACADEMIA
  heroTeams: [],
  activeTeam: null,
  heros: [],
  activeHero: null,
  // NARUTO
  villages: [],
  // HOLO
  holos: [],
});
