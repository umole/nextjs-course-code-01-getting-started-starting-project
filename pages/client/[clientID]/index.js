import { useRouter } from 'next/router'
import Link from 'next/link'

function Client() {
    const router = useRouter();
    const clients = [
        {id:'Andy', name:'Andrew', field:'experience'},
        {id: 'Ozi', name: 'Ozimede', field:'skill'}
    ]

    function handleButtonClick() {
        //...Navigate to clicked page
        router.push({
            pathname: '/client/[clientID]/[id]',
            query: {clientID: 'Umole', id: 'Uml'}
        })
    }

    return (
        <div>
            <h2>This is the client ID page</h2>
            <ul>
                {clients.map(client => (
                  <li key={client.id}><Link href={`/client/${client.id}/${client.field}`}>{client.name}</Link></li>  
                ))}
            </ul>
            <button onClick={handleButtonClick}>Navigate</button>
        </div>
    );
}

export default Client;