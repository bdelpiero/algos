import fs from 'fs'

export function arrayFromFile() {
  const text = process.argv.slice(2)
  return fs.readFileSync(`./files/${text}`).toString().split('\n')
}
