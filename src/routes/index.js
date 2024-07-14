import React from 'react';
import Layout from '../path/to/Layout'; // Adjust path as needed
import authProtectedRoutes from '../path/to/allRoutes'; // Adjust path as needed

const IndexPage = () => {
    return (
        <div>
            {authProtectedRoutes.map((route, idx) => (
                <Layout key={idx}>
                    <p>Content for {route.path}</p>
                </Layout>
            ))}
        </div>
    );
};

export default IndexPage;
