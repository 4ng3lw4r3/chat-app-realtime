import { db } from "@/lib/db"
import Button from "@/components/ui/Button"

export default async function Home() {

  //check if it is stored on database
  // await db.set('hello', 'hello')

  return <Button>miauuu</Button>
}
