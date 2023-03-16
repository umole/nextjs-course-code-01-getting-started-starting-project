import { useRouter } from 'next/router';

function ClientSpecificId() {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h2>This is {router.query.clientID}'s client page</h2>
        </div>
    );
}

export default ClientSpecificId;