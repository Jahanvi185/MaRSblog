
import React from 'react';
import './Blog.css';
import blogImg from './blog.jpg';
import AIImage from './AI.jpg'
import InteriitImage from './Interiit.png'
import post1 from './post1.jpg'
import post2 from './post2.jpg'
import post3 from './post3.jpg'
import post4 from './post4.jpg'
import post5 from './post5.jpg'
import post6 from './post6.jpg'
import category1 from './category1.jpg'
import category2 from './category2.jpg'
import category3 from './category3.jpg'




const Blog = () => {
    const posts = [
        {
            image: post1,
            title: 'Future of Robotics',
            description: 'Exploring how robotics will shape the future in industries and daily life.',
        },
        {
            image: post2,
            title: 'Machine Vision',
            description: 'Understanding how robots use cameras and AI to see and interpret the world.',
        },
        {
            image: post3,
            title: 'Autonomous Drones',
            description: 'The evolution of drones and their role in automated delivery systems.',
        },
        {
            image: post4,
            title: 'Robot Swarms',
            description: 'How multiple robots work together like colonies for complex tasks.',
        },
        {
            image: post5,
            title: 'Human-Robot Collaboration',
            description: 'Designing robots that safely and efficiently work alongside people.',
        },
        {
            image: post6,
            title: 'AI-Powered Navigation',
            description: 'Using AI for smart pathfinding and real-time obstacle avoidance.',
        }
    ];
    const categories = [
        {
            image: category1,
            title: 'Future of Robotics'
            
        },

        {
            image: category2,
            title: 'Future of Robotics'
            
        },

        {
            image: category3,
            title: 'Future of Robotics'
            
        }
    ];



    return (
        <div className="blog-container">
            <div className="hero-section">
                <img src={blogImg} alt="" />
                <h1>Model and Robotics Section</h1>
            </div>


            <div className="featured-section">
                <div className="featured-left">
                    <p className="category-date">Technology | Jan 16, 2025</p>
                    <h2>AI in Robotics</h2>
                    <p className="description">
                        Enhancing robotics with AI for smarter automation, decision-making, and adaptability.
                    </p>
                    <button>Read More</button>
                </div>
                <div className="featured-right">
                    <img src={AIImage} alt="" />
                </div>
            </div>


            <div className="highlight-card">
                <div className='Highlight-left'>
                    <p className="category-date">Achievements | Dec 22, 2022</p>
                    <h3>Inter IIT 2022</h3>
                    <p>
                        Showcasing the journey, passion, and triumph behind our Inter IIT medal-winning legacy.
                    </p>
                    <button>Read More</button>
                </div>
                <div className='Interiit-img'>
                    <img src={InteriitImage} alt="" />
                </div>
            </div>
            {/* <h3>Latest-posts</h3> */}
            <div className="latest-posts">
            </div>
            <div className="latest-posts">
                {posts.map((post, index) => (
                    <div className="post-card" key={index}>
                        <img src={post.image} alt={post.title} />
                        <h4>{post.title}</h4>
                        <p>{post.description}</p>
                        <button>Read More</button>
                    </div>
                ))}
            </div>
            <h3>Latest-Categories</h3>

            <div className="latets-categories">
            </div>
            
            <div className="Category-posts">
                {categories.map((category, index) => (
                    <div className="category-card" key={index}>
                        <img src={category.image} alt={category.title} />
                        <h4>{category.title}</h4>
        
                        <button>Know More</button>
                    </div>
                ))}
            </div>











        </div>
    );
};

export default Blog;


