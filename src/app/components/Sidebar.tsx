import { getData } from '../utils/data'

interface Tool {
  name: string
  description: string
  command: string
  docs: string
}

interface DataStructure {
  [category: string]: {
    [subcategory: string]: Tool[]
  }
}

export default function Sidebar() {
  const data: DataStructure = getData()

  return (
    <aside>
      <ul>
        {Object.entries(data).map(([category, subcategories]) => (
          <li key={category}>
            <div>{category}</div>
            <ul>
              {Object.entries(subcategories).map(([subcategory]) => (
                <li key={subcategory}>
                  {subcategory}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  )
}

