import { useRouter } from 'next/router';

function PortfolioProjects() {
    const router = useRouter();

    //console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            <h3>This is a page of projects</h3>
        </div>
    );
}

export default PortfolioProjects;