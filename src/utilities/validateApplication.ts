export type PilotApp = {
  name: string;
  species: string;
  starship: any;
};
export function validateApplication(app: PilotApp): boolean {
  return app.name.length > 0 && app.species.length > 0 && app.starship.length > 0;
}
