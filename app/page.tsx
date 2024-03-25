// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import { Card, CardHeader, CardBody, CardFooter ,Text} from '@chakra-ui/react'
export default function Page() {
  return (
    <>
    <Card minWidth={'400px'} minHeight={'300px'}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
    <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
      About
    </Link>
    </>
  )
}