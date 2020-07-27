import { Ability, createAliasResolver } from "@casl/ability";

const resolveAction = createAliasResolver({
  edit: ["create", "update", "patch", "remove"],
});

export const buildAbility = (rules: any) => {
  const abilities = new Ability(rules, {
    resolveAction,
  });

  return abilities;
};
