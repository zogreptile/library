interface TExtensions {
  mix?: string,
  mods?: Record<string, string | boolean>,
};

const extensionsDefaultData = { mods: {}, mix: '' };

export default function classname(
  baseClass: string,
  extensions: TExtensions = extensionsDefaultData,
  defaultExtensions: TExtensions = extensionsDefaultData,
): string {
  const { mods, mix } = extensions;
  const { mods: defaultMods, mix: defaultMix } = defaultExtensions;

  const modsEntries = Object.entries({ ...defaultMods, ...mods });
  const mixes = `${defaultMix} ${mix}`.trim();

  if (!modsEntries.length) return baseClass.concat(' ', mixes);

  const modificators = modsEntries
    .map(([key, value]) => typeof value === 'boolean'
      ? `${baseClass}_${key}`
      : `${baseClass}_${key}_${value}`
    )
    .join(' ');

  return baseClass.concat(' ', modificators, ' ', mixes);
}
