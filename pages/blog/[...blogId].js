import { useRouter } from 'next/router'

function BlogId() {
    const router = useRouter();

    console.log(router.query);
    
    return (
        <div>
            <h3>This is a blog ID</h3>
        </div>
    );
}

export default BlogId;