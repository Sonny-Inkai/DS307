import path from 'path'
import { promises as fs } from 'fs'
import SuiteDetail from './suite-detail/suite-detail'

export default async function SuiteDetailContainer({ params }) {
  try {
    const filePath = path.join(process.cwd(), '/public/hotels.json')
    const file = await fs.readFile(filePath)
    const suites = JSON.parse(file)
    
    const { id } = await params
    const suiteId = parseInt(id)
    const suite = suites.find(s => s.id === suiteId)

    if (!suite) {
      return <div>Suite not found</div>
    }

    return <SuiteDetail suite={suite} />
  } catch (error) {
    console.error('Error:', error)
    return <div>Error loading suite details</div>
  }
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), '/public/hotels.json')
  const file = await fs.readFile(filePath)
  const suites = JSON.parse(file)

  return suites.map((suite) => ({
    id: suite.id.toString(),
  }))
}
