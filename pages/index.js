import Link from 'next/link';

function Homepage() {
    return (
        <div>
            <h1>Homepage</h1>
            <ul>
                <li><Link href='/portfolio'>Portfolio</Link></li>
                <li><Link href='/client'>Client</Link></li>
            </ul>
        </div>
    )
}

export default Homepage;