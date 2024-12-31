export function addStringGender(gender: string, title: string): string {
  if (gender === 'Женский' || gender === 'женский')
    return `Женские кроссовки ${title}`;
  else {
    return `Мужские кроссовки ${title}`;
  }
}
