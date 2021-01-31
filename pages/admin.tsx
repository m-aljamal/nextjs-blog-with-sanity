 import {useSession,getSession} from 'next-auth/client'
const admin = () => {
    const [session, loading] = useSession()
    return (
        <div>
            adminPage
        </div>
    )
}

export default admin

export async function getServerSideProps(ctx){
    const session = await getSession(ctx)
    if (!session || !session.user) {
         console.log('no session', session);
         
      }
      console.log('found session', session);
      
    return{props:{}}
}


// import { useSession } from 'next-auth/client'
// import dynamic from 'next/dynamic'

// const UnauthenticatedComponent = dynamic(() =>
//   import('../components/unauthenticated')
// )
// const AuthenticatedComponent = dynamic(() =>
//   import('../components/authenticated')
// )

// export default function Profile() {
//   const [session, loading] = useSession()

//   if (typeof window !== 'undefined' && loading) return <p>Loading...</p>

//   if (!session) return <UnauthenticatedComponent />

//   return <AuthenticatedComponent user={session.user} />
// }