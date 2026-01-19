export class Database {
  #database = {}

  insert(table, data){
    if (Array.isArray(this.#database[table])){
      this.#database[table].push(data)
    }

    this.#database[table] = [data]

    return data
  }

  select(table){
    const data = this.#database[table] ?? []

    return data
  }
}