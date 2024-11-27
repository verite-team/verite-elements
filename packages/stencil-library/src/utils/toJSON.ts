export const toJSON = <T>(obj: unknown, defaultValue: T = null): T => {
  try {
    return JSON.parse(obj as string)
  } catch (e) {
    console.error('Error parsing JSON:', e)
    return defaultValue
  }
}
