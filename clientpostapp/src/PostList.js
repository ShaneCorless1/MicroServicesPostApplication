import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default() =>{

    const [posts, setPosts] = useState({});

    const fetchedPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    }

    
    useEffect(()=>{

        fetchedPosts();
            //Empty Array sets to fetched posts to only do once when loaded
    }, [])

    const renderedPosts = Object.values(posts).map(post =>{
        return <div className="card" style={{width:'30%', marginBottom: '20px'}} key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
            </div>

        </div>
    });
   // console.log(posts);

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>
}